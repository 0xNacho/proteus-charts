import { SvgContext } from '../svg/base/SvgContext';
import { copy, isValuesInObjectKeys, hasValuesWithKeys, filterKeys, melt } from '../utils/functions';
import { throwError } from '../utils/error';
import { Subscription, Observable } from 'rxjs';
import { calculateWidth } from '../utils/screen';
import { select } from 'd3-selection';

import StreamingStrategy from './enums/StreamingStrategy';
import Injector from '../Injector';
import Datasource from '../datasources/Datasource';
import WebsocketDatasource from '../datasources/WebsocketDatasource';
import Config from '../Config';
import SvgStrategy from '../svg/base/SvgStrategy';
import Globals from '../Globals';
import Annotations from '../svg/components/Annotations';
import GlobalInjector from '../GlobalInjector';
import ErrorSet from '../svg/components/ErrorSet';
import Statistics from '../svg/components/Statistics';

/**
 *
 * Chart class. This class is a high-level representation for any visualization in this library. Each new visualization
 * created should extend this class.
 *
 * @abstract
 * @class Chart
 */
abstract class Chart {

    /**
     * A SVG context where the visualization is rendered.
     * @private
     * @type {SvgContext}
     * @memberof Chart
     */
    private context: SvgContext;  // TODO: In the future this should be renamed to 'Context',
    // since two different kind of contexts can be used (SVG / Canvas)

    /**
     * A key/value map that contains the chart options. By default this contains the default options for the current
     * visualization @see(src/utils/defaults/). When a user creates an instance of a specific charts, default options
     * can be overwritten through the config parameter
     * @protected
     * @type {Config}
     * @memberof Chart
     */
    protected config: Config;

    /**
     * Chart data
     * @protected
     * @type {*}
     * @memberof Chart
     */
    protected data: any;

    /**
     * A map containing chart subscriptions
     *
     * @private
     * @type {Map<string, Subscription>}
     * @memberof Chart
     */
    private subscriptions: Map<string, Subscription> = new Map<string, Subscription>();

    /**
     * An injector that instantiate the SvgContext class and pass it the config and the strategy parameters
     *
     * @private
     * @type {Injector}
     * @memberof Chart
     */
    private injector: Injector = new Injector();

    /**
     *
     * A strategy class that takes responsability for drawing an specific visualization
     *
     * @private
     * @type {SvgStrategy}
     * @memberof Chart
     */
    private strategy: SvgStrategy;
    // TODO: In the future this should be renamed to 'DrawStrategy',
    // since two different kind of 'strategies' should be allowed (SVG / Canvas)

    /**
     * An identifier used to set streaming interval when chart initially call keepDrawing()
     * @see keepDrawing() @see streamDrawing()
     * If this is not null at once, it implicits this instance is drawn for streaming chart
     * @protected
     * @memberof Chart
     */
    protected streamingIntervalIdentifier: any = null;

    /**
     * An identifier Only used to set streaming interval when chart initially changes the state from pause to resume
     * @protected
     * @memberof Chart
     */
    protected resumeIntervalIdentifier: any = null;

    /**
     * An identifier used to store Array type paused data with interval to tolerate long time
     * @protected
     * @memberof Chart
     */
    protected storeIntervalIdentifier: any = null;

    // TODO: Inject with annotations?
    private visibilityObservable: Observable<any> = GlobalInjector.getRegistered('onVisibilityChange');

    /**
     * An array of data stored when pausing
     * Two stored data type by StreamingStrategy (ADD, REPLACE):
     * 1. Added data -> array of arrays 2. Replaced data -> array of objects
     * @protected
     * @memberof Chart
     */
    protected storedData: any[] = [];

    /**
     * Creates an instance of Chart.
     * @param {{ new (...args: any[]): SvgStrategy }} Class Reference to a specific strategy
     * @param {*} data Initial data. It can be [] or a filled array
     * @param {*} userConfig A customized configuration for the current chart. It overrides the default configuration
     * @param {*} defaults Default option values for the current chart
     * @memberof Chart
     */
    constructor(clazz: { new (...args: any[]): SvgStrategy }, data: any, userConfig: any, defaults: any) {
        this.config = this.loadConfigFromUser(userConfig, defaults);
        this.config.put('proteicID', 'proteic-' + Date.now());

            this.instantiateInjections(clazz);

            this.data = data;
            this.config.put('pivotVars', []);

            this.visibilityObservable.subscribe((event: any) => {
                this.stopDrawing();
                if (!event.hidden) {
                    // Check if this is a streaming chart, so we can set the drawing interval
                    if (this.streamingIntervalIdentifier) {
                        this.streamingIntervalIdentifier = setInterval(
                            () => this.draw(copy(this.data)),
                            Globals.DRAW_INTERVAL
                        );
                    }
                }
            });
    }

    private instantiateInjections(clazz: { new (...args: any[]): SvgStrategy }) {
        this.injector.mapValue('Config', this.config);

        this.strategy = this.injector.instantiate(clazz);
        this.strategy.initialize();

        this.injector.mapValue('Strategy', this.strategy);

        this.context = this.injector.instantiate(SvgContext);
    }

    public annotations(annotations: any) {
        this.config.put('annotations', annotations);
        this.strategy.addComponent('Annotations', this.config);

        return this;
    }

    /**
     *Configure statistics component for current instance
     *@public
     *@memberof Chart
     */
    public statistics(statistics: any) {
        this.config.put('statistics', statistics);
        this.strategy.addComponent('Statistics', this.config);

        return this;
    }

    public draw(data: [{}] = this.data) {
        // TODO: SPLIT DATA INTO SMALL CHUNKS (stream-like).
        this.context.draw(copy(data));

        // The last element of stored data should be concated with incoming data @see keepDrawing()
        if (this.storedData.length > 0 && this.resumeIntervalIdentifier) {
            let lastPausedData = this.storedData[this.storedData.length - 1];
            this.data = lastPausedData;
        } else {
            this.data = data;
        }
    }

    /**
     *
     * Configure a datasources for the current instance.
     * Datasources allows data to be catached from many sources, such as websockets endpoints, HTTP urls, etc.
     * @param {Datasource} ds A datasource
     *
     * @memberOf Chart
     */
    public datasource(ds: WebsocketDatasource) {
        let subscription: Subscription = ds.subscription().subscribe(
            (data: any) => this.keepDrawing(data),
            (e: any) => this.handleWebSocketError(e)
        );

        this.subscriptions.set('datasource', subscription);
        return this;
    }

    private handleWebSocketError (e: any) {
        this.strategy.addComponent('ErrorSet', this.config);
    }

    public alert(variable: string, condition: Function, callback?: Function, events?: any) {
        this.config.put('alertVariable', variable);
        this.config.put('alertFunction', condition);
        this.config.put('alertCallback', callback);
        this.config.put('alertEvents', events);
        return this;
    }

    /**
     * Incoming data may contain mixed narrow and wide formats that will be treated appropriately.
     * @param {Array<string>} vars
     * @returns
     * @memberof Chart
     */
    public unpivot(vars: Array<string>) {
        this.config.put('pivotVars', vars);
        return this;
    }

    public removeSubscriptions() {
        this.subscriptions.forEach((s: Subscription) => s.unsubscribe());
        this.subscriptions.clear();
    }

    public stopDrawing() {
        clearInterval(this.streamingIntervalIdentifier);
        clearInterval(this.resumeIntervalIdentifier);
    }

    public erase() {
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
        width = calculateWidth(width, config.get('selector')) - config.get('marginLeft') - config.get('marginRight');
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
            propertyX = this.config.get('propertyX'),
            propertyY = this.config.get('propertyY'),
            propertyZ = this.config.get('propertyZ'),
            propertyKey = this.config.get('propertyKey'),
            propertyStart = this.config.get('propertyStart'),
            propertyEnd = this.config.get('propertyEnd'),
            pause: boolean = this.config.get('pause');

        let dataKeys = [
            propertyX,
            propertyY,
            propertyZ,
            propertyKey,
            propertyStart,
            propertyEnd,
        ].filter((p) => p !== undefined);

        this.streamDrawing();

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
            );
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

        this.sliceExcessStreamingData();

        if (pause) {
            this.pauseDrawing();
        } else {
            if (this.storedData.length > 0) { // resume
                this.resumeDrawing();
            }
        }

    }

    /**
    * @method
    * It can draw for streaming chart and can add components only for streaming chart (ex. pause-button)
    * @private
    * @memberof Chart
    * @todo If new components only for streaming chart, it can be added here.
    */
    public streamDrawing() {
        if (!this.streamingIntervalIdentifier) {
            this.strategy.addComponent('Pause', this.config.get('pauseButton'));

            this.streamingIntervalIdentifier = setInterval(() => this.draw(copy(this.data)), Globals.DRAW_INTERVAL);
        }
    }

    /**
    * @method
    * It slices excess streaming data detected by configurated maxNumberOfElements property
    * @private
    * @memberof Chart
    */
    public sliceExcessStreamingData() {
        let numberOfElements = this.data.length,
            maxNumberOfElements: number = this.config.get('maxNumberOfElements');

        if (numberOfElements > maxNumberOfElements) {
            let position = numberOfElements - maxNumberOfElements;
            this.data = this.data.slice(position);
        }
    }

    /**
    * @method
    * It sets interval to push incoming added data to avoid loading too many paused data
    * @private
    * @memberof Chart
    */
    public pauseDrawing() {
        this.stopDrawing();
        this.resumeIntervalIdentifier = null;

        if (Array.isArray(this.data)) {
            if (!this.storeIntervalIdentifier) {
                this.storeIntervalIdentifier = setInterval (() => {
                        this.storedData.push(copy(this.data));
                    },
                    Globals.DRAW_INTERVAL
                );
            }
        } else {
            this.storedData.push(this.data);
        }
    }

    /**
     * @method
     * Resume to draw paused streaming data -> @see this.storedData
     * It stores incoming data to this.storedData until all of storedData is drawn
     * @public
     * @memberof Chart
     */
    public resumeDrawing() {
        if (!Array.isArray(this.data) && this.storedData.length > 0) {
            this.storedData.push(this.data); // Store incoming replaced streaming data
        }

        if (!this.resumeIntervalIdentifier) {
            this.resumeIntervalIdentifier = setInterval(
                () => {
                    if (this.storedData.length > 0) {
                        this.storedData[this.storedData.length - 1] = this.data;
                        this.draw(copy(this.storedData.shift()));
                    } else {
                        this.draw(copy(this.data));
                        clearInterval(this.storeIntervalIdentifier); // Stop storing incoming added streaming data
                        this.storeIntervalIdentifier = null;
                    }
                },
                Globals.DRAW_INTERVAL
            );
        }
    }

}

export default Chart;
