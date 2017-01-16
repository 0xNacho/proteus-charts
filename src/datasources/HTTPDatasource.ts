import Datasource from './Datasource';
import {request} from 'd3';

/**
 * 
 * This datasource set up a connection to a http server. 
 * @export
 * @class HTTPDatasource
 * @extends {Datasource}

 */
export default class HTTPDatasource extends Datasource {

    /**
     * Creates an instance of HTTPDatasource. This datasource will try to connect to the speficied HTTP endpoint.
     * <pre class="prettyprint">
     *    var source = {
     *      endpoint: 'https://randomuser.me/api';
     *    };
     * 
     *    linechart = new proteic.Linechart(new proteic.HTTPwDatasource(source));
     * </pre>
     * 
     * If new data is available, this datasource will forward the data records to the chart, which automatically repaint the chart with these new records. 
     * @param {any} source An http endpoint. If invalid, this class will throw an Error. 
     *  
     * @memberOf HTTPDatasource
     * 
     */
    constructor(source) {
        super();
        this.source = source;
        this.intervalId = -1;
        this.started = false;
    }

   
    /**
     * 
     * Initialize an HTTP connection
     * 
     * @memberOf HTTPDatasource
    
     */
    start() {
        if (!this.started) {
            super.start();
            let pollingTime = this.source.pollingTime;
            let url = this.source.url;
            this._startPolling(url, pollingTime);
            this.started = true;
        }
    }


    _startPolling(url, time = 1000) {
        let interval = window.setInterval;
        this.intervalId = interval(() => this._startRequest(url), time);
    }

    _startRequest(url) {
        window.console.log('url', url);
        request(url).get((e, response) => this._handleResponse(response));
    }

    _stopPolling() {
        let clearInterval = window.clearInterval;
        clearInterval(this.intervalId);
    }

    _handleResponse(xmlHttpRequest) {
        let parseJson = window.JSON.parse;
        if (xmlHttpRequest.readyState === 4 && xmlHttpRequest.status === 200) {
            let response = parseJson(xmlHttpRequest.response);
            this._handleOK(response);
        }
        else {
            this._handleError(xmlHttpRequest);
        }
    }

    _handleOK(data) {
        if(this.properties.length > 0 ) {
            data = this.convert(data);
        }
        this.dispatcher.call('onmessage', this, data);
    }

    _handleError(data) {
        this.dispatcher.call('onerror', this, data);
    }

    /**
     * If started, this method close the HTTP connection.
     * 
     * @memberOf HTTPDatasource
    * */
    stop() {
        if (this.started) {
            this._stopPolling();
            this.started = false;
        }
    }
}