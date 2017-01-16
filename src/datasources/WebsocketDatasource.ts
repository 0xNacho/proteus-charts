import Datasource from './Datasource';
import Globals from '../Globals';
/**
 * 
 * This datasource set up a connection to a websocket server. 
 * @export
 * @class WebsocketDatasource
 * @extends {Datasource}

 */
class WebsocketDatasource extends Datasource {

    /**
     * Creates an instance of WebsocketDatasource. This datasource will try to connect to the speficied websocket endpoint.
     * <pre class="prettyprint">
     *    var source = {
     *      endpoint: 'ws://192.168.3.32:3000/pathToWebsocketEndpoint';
     *    };
     * 
     *    linechart = new proteic.Linechart(new proteic.WebsocketDatasource(source));
     * </pre>
     * 
     * If new data is available, this datasource will forward the data records to the chart, which automatically repaint the chart with these new records. 
     * @param {any} source A websocket endpoint. If invalid, this class will throw an Error. 
     *  
     * @memberOf WebsocketDatasource
    
     */
    private ws: WebSocket;


    constructor(source: any) {
        super();
        this.source = source;
    }

    /**
     * Configure a dispatcher for this datasource.
     * 
     * @param {any} dispatcher A d3 dispatcher. This dispatcher is in charge of receiving and sending events.
     * 
     * @memberOf WebsocketDatasource
     */
    configure(dispatcher: any) {
        this.dispatcher = dispatcher;
    }

    /**
     * 
     * Initialize a websocket connection
     * 
     * @memberOf WebsocketDatasource
    
     */
    start() {
        super.start();
        this.ws = new WebSocket(this.source['endpoint']);


        this.dispatcher.call('addLoading', this, {});

        this.ws.onopen = (e) => {
            this.dispatcher.call('onopen', this, e);
        };
        this.ws.onerror = (e) => {
            throw new Error('An error occurred trying to reach the websocket server' + e);
        };
        this.ws.onmessage = (e) => {
            if (this.isWaitingForData) {
                this.dispatcher.call('removeLoading', this, e);
                this.isWaitingForData = false;
            }
            var data = JSON.parse(e.data);
            this.dispatcher.call('onmessage', this, data);
        };
    }
    /**
     * If started, this method close the websocket connection.
     * 
     * @memberOf WebsocketDatasource
    * */
    stop() {
        super.stop();
        if (this.ws) {
            this.ws.close();
        }
    }
}

export default WebsocketDatasource;