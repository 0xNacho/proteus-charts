import { SvgContext } from "../svg/base/SvgContext";
import { copy, isValuesInObjectKeys, hasValuesWithKeys, filterKeys, melt } from "../utils/functions";
import { throwError } from "../utils/error";
import { Subscription } from 'rxjs';
import { calculateWidth } from "../utils/screen";
import { select } from 'd3-selection';

import StreamingStrategy from './enums/StreamingStrategy';
import Injector from '../MyInjector';
import Datasource from "../datasources/Datasource";
import WebsocketDatasource from "../datasources/WebsocketDatasource";
import Config from "../Config";
import SvgStrategy from "../svg/base/SvgStrategy";
import Globals from '../Globals';

abstract class Chart {

    private context: SvgContext;
    protected config: Config;
    protected data: any;
    private events: Map<string, any>;
    private subscription: Subscription;
    private _injector: Injector = new Injector();
    private strategy: SvgStrategy;
    private streaming: number = null;

    protected streamingStrategy: StreamingStrategy;

    constructor(Class: { new (...args: any[]): SvgStrategy }, data: any, userConfig: any, defaults: any) {

        this.config = this.loadConfigFromUser(userConfig, defaults);
        this.config.put('proteicID', 'proteic-' + Date.now());
        this._injector = new Injector();

        this._instantiateInjections(Class);

        this.data = data;
        this.events = new Map();
        this.config.put('pivotVars', []);
    }

    private _instantiateInjections(Class: { new (...args: any[]): SvgStrategy }) {
        this._injector.mapValue('Config', this.config);

        //Instantiate SvgStrategy
        this.strategy = this._injector.instantiate(Class);
        this.strategy.initialize();

        this._injector.mapValue('Strategy', this.strategy);
        //Instantiate SvgContext
        this.context = this._injector.instantiate(SvgContext);
    }

    public annotations(annotations: any) {
        this.config.put('annotations', annotations);
        return this;
    }

    public draw(data: [{}] = this.data, events: Map<string, any> = this.events) { //TODO: SPLIT DATA INTO SMALL CHUNKS (stream-like). 
        this.context.draw(copy(data), this.events);
        this.data = data;
    }

    /**
     *
     * Configure a datasources for the current instance. Datasources allows data to be catached from many sources, such as websockets endpoints, HTTP urls, etc.
     * @param {Datasource} ds A datasource
     *
     * @memberOf Chart
     */
    public datasource(ds: WebsocketDatasource) {
        let subscription: Subscription = ds.subscription().subscribe(
            (data: any) => this.keepDrawing(data),
            (e: any) => throwError(e),
            () => console.log('Completed subject')
        );

        this.subscription = subscription;

        return this;
    }

    public alert(variable: string, condition: Function, callback: any) {
        this.config.put('alertVariable', variable);
        this.config.put('alertFunction', condition);
        this.config.put('alertCallback', callback);
        return this;
    }

    /**
     * Unpivot wide format data coming from the Datasource to narrow format.
     * 
     * Incoming data may contain mixed narrow and wide formats that will be
     * treated appropriately.
     */
    public unpivot(vars: Array<string>) {
        this.config.put('pivotVars', vars);
        return this;
    }

    public removeDatasource() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    public stopDrawing() {
        clearInterval(this.streaming);
    }

    public erase() {
        this.removeDatasource();
        this.stopDrawing();
        select(this.config.get('selector')).remove();
    }

    public clear() {
        this.data = [];
        this.context.clear();
    }

    protected loadConfigFromUser(userData: any, defaults: any): Config {
        let config = new Config();
        for (let v in defaults) {
            config.put(v, (v in userData) ? userData[v] : defaults[v]);
        }
        let width = config.get('width');
        width = calculateWidth(width, config.get('selector')) - config.get('marginLeft') - config.get('marginRight')
        config.put('width', width);
        return config;
    }

    private cleanDatum(datum: any, dataKeys: Array<any>) {
        let cleanDatum = [],
            datumType = datum.constructor,
            nullValues = this.config.get('nullValues'),
            filteredDatum = filterKeys(datum, dataKeys);

        if (datumType === Array) {
            cleanDatum = datum.filter(isValuesInObjectKeys(nullValues, dataKeys));
        } else {
            if (!hasValuesWithKeys(filteredDatum, nullValues, dataKeys)) {
                cleanDatum.push(filteredDatum);
            }
        }

        return cleanDatum;
    }

    public keepDrawing(datum: any): void {
        let streamingStrategy = this.config.get('streamingStrategy'),
            maxNumberOfElements: number = this.config.get('maxNumberOfElements'),
            numberOfElements = this.data.length,
            propertyX = this.config.get('propertyX'),
            propertyY = this.config.get('propertyY'),
            propertyZ = this.config.get('propertyZ'),
            propertyKey = this.config.get('propertyKey');

        let dataKeys = [
            propertyX,
            propertyY,
            propertyZ,
            propertyKey
        ].filter((p) => p !== undefined);

        if (!this.streaming) {
            this.streaming = setInterval(() => this.draw(copy(this.data)), Globals.DRAW_INTERVAL);
        }

        let annotations = this.config.get('annotations'),
        eventKeys: Set<string> = new Set;

        if (annotations) {
            annotations.forEach((a: any) => {
                eventKeys.add(a.variable);
                eventKeys.add(a.width);
            })
        }

        // Event detection
        eventKeys.forEach((e) => {
            if (e in datum) {
                this.events.set(e, datum[e]);
            }
        });

        // Wide data to narrow and draw
        let pivotVars = this.config.get('pivotVars');
        let keys = Object.keys(datum);
        let varsInDatum = keys.filter((k) => pivotVars.indexOf(k) != -1);
        let ids = keys.filter((k) => pivotVars.indexOf(k) == -1);

        if (varsInDatum.length >= 1) {
            datum = melt(
                datum, 
                varsInDatum, 
                ids, 
                this.config.get('propertyKey'),
                this.config.get('propertyY')
            )
        }

        let cleanDatum = this.cleanDatum(datum, dataKeys);

        switch (streamingStrategy) {
            case StreamingStrategy.ADD:
                this.data = this.data.concat(cleanDatum);
                break;
            case StreamingStrategy.REPLACE:
                this.data = cleanDatum;
                break;
            case StreamingStrategy.NONE:
                break;
            default:
        }

        //Detect excess of elements given a maxNumberOfElements property
        if (numberOfElements > maxNumberOfElements) {
            let position = numberOfElements - maxNumberOfElements;
            this.data = this.data.slice(position);
        }

    }
}

export default Chart;
