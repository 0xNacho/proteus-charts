import { SvgContext } from "../svg/strategies/SvgStrategy";
import SvgChart from "../svg/base/SvgChart";
import Config from "../Config";
import { copy } from "../utils/functions";
import Datasource from "../datasources/Datasource";
import { calculateWidth } from "../utils/screen";
import { dispatch } from "d3";
import StreamingStrategy from './enums/StreamingStrategy';

abstract class Chart {

    private context: SvgContext;
    protected config: Config;
    protected data: any;
    private ds: Datasource = null;
    private dispatcher: any = dispatch('onmessage', 'onopen', 'onerror', 'addLoading', 'removeLoading');
    protected streamingStrategy : StreamingStrategy;

    constructor(strategy: SvgChart, data: any, userConfig: any, defaults: any) {
        this.config = this.loadConfigFromUser(userConfig, defaults);
        this.context = new SvgContext(strategy, this.config);
        this.data = data;
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
    public datasource(ds: Datasource) {
        if (this.data && this.data.length) {
            this.draw();
        }
        this.ds = ds;

        this.ds.configure(this.dispatcher, this.config);

        this.dispatcher.on('addLoading', () => this.context.addLoading());
        this.dispatcher.on('removeLoading', () => this.context.removeLoading());

        this.dispatcher.on('onmessage', (data: any) => this.keepDrawing(data));

        this.dispatcher.on('onopen', (event: any) => {
        });

        this.dispatcher.on('onerror', (error: any) => {
            console.error('onerror', error);
        });
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

    protected abstract keepDrawing(datum: any): void;
}

export default Chart;