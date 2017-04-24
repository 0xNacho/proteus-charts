import { SvgContext } from "../svg/base/SvgContext";
import { copy, isValuesInObjectKeys, hasValuesWithKeys, filterKeys } from "../utils/functions";
import { throwError } from "../utils/error";
import { Subscription } from 'rxjs';
import { calculateWidth } from "../utils/screen";

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
    private subscription: Subscription;
    private _injector: Injector = new Injector();
    private strategy: SvgStrategy;

    protected streamingStrategy: StreamingStrategy;

    constructor(Class: { new (...args: any[]): SvgStrategy }, data: any, userConfig: any, defaults: any) {

        this.config = this.loadConfigFromUser(userConfig, defaults);
        this._injector = new Injector();

        this._instantiateInjections(Class);

        this.data = data;
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

    public annotations(annotations: any): Chart {
        this.config.put('annotations', annotations);
        return this;
    }

    public draw(data: [{}] = this.data) { //TODO: SPLIT DATA INTO SMALL CHUNKS (stream-like). 
        this.context.draw(copy(data));
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
        setInterval(() => this.draw(copy(this.data)), Globals.DRAW_INTERVAL);
    }

    public removeDatasource() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
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

    protected keepDrawing(datum: any): void {
        let streamingStrategy = this.config.get('streamingStrategy'),
            nullValues = this.config.get('nullValues'),
            maxNumberOfElements: number = this.config.get('maxNumberOfElements'),
            numberOfElements = this.data.length,
            datumType = datum.constructor,
            keys = [
                this.config.get('propertyX'),
                this.config.get('propertyY'),
                this.config.get('propertyZ')
            ],
            cleanDatum = [],
            filteredDatum = filterKeys(datum, keys);

        if (datumType === Array) {
            cleanDatum = datum.filter(isValuesInObjectKeys(nullValues, keys));
        } else {
            if (!hasValuesWithKeys(filteredDatum, nullValues, keys)) {
                cleanDatum.push(filteredDatum);
            }
        }

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
            console.log('MAXNUMBEROFELEMENTS');
            let position = numberOfElements - maxNumberOfElements;
            this.data = this.data.slice(position);
        }
    }
}

export default Chart;