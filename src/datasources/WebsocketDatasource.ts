import Datasource from './Datasource';
import { unwind } from '../utils/data/transforming';
import { discardProperties } from '../utils/data/filtering';
import Config from '../Config';
import StreamingStrategy from '../charts/enums/StreamingStrategy';
import { fitArrayByOldAndNewValue } from '../utils/array/array';
import { Observable, Subject, Subscription } from 'rxjs';
/**
 *
 * This datasource set up a connection to a websocket server.
 * @export
 * @class WebsocketDatasource
 * @extends {Datasource}
 */
class WebsocketDatasource extends Datasource {

    /**
     * A websocket isntance
     */
    public ws: WebSocket;

    /**
     * A websocket subject. Use top send messages to all the subscriptors
     */
    private _wsSubject: Subject<any> = new Subject<any>();

    /**
     * Websocket endpoint
     */
    private _url: string;


    private openStream: Observable<any>;
    private closeStream: Observable<any>;
    private errorStream: Observable<any>;
    private messageStream: Observable<any>;

    private subscriptionOpenStream: Subscription;
    private subscriptionCloseStream: Subscription;
    private subscriptionErrorStream: Subscription;
    private subscriptionMessageStream: Subscription;

    private stopped: boolean = true;

    /**
     * Default constructor
     */
    constructor(ws: WebSocket) {
        super();
        this.ws = ws;
        this._url = this.ws.url;

        this.openStream = Observable.fromEvent(this.ws, 'open');
        this.closeStream = Observable.fromEvent(this.ws, 'close');
        this.errorStream = Observable.fromEvent(this.ws, 'error');
        this.messageStream = Observable.fromEvent(this.ws, 'message').takeUntil(this.closeStream);
    }

    public start() {
        if (this.ws) {
            if (this.stopped) {
                this._subscribeStreams();
                this.stopped = false;
            }
        } else {
            throw Error('Websocket is not started yet');
        }
    }
    public stop() {
        if (!this.stopped) {
            this._unregisterHandlers();
            this.stopped = true;
        }
    }


    private _subscribeStreams() {
        this.subscriptionMessageStream = this.messageStream.subscribe(
            (e: any) => this._wsSubject.next(this._extractDataFromWSEvent(e))
        );
        this.subscriptionErrorStream = this.errorStream.subscribe(
            (e: any) => this._wsSubject.error(e)
        );
    }

    private _unregisterHandlers() {
        if (this.subscriptionOpenStream) {
            this.subscriptionOpenStream.unsubscribe();
        }
        if (this.subscriptionCloseStream) {
            this.subscriptionCloseStream.unsubscribe();
        }
        if (this.subscriptionMessageStream) {
            this.subscriptionMessageStream.unsubscribe();
        }
        if (this.subscriptionErrorStream) {
            this.subscriptionErrorStream.unsubscribe();
        }
    }


    private _extractDataFromWSEvent(e: any) {
        if (e.data && e.data.length) {
            return JSON.parse(e.data);
        }
        return null;
    }


    public subscription(): Subject<any> {
        return this._wsSubject;
    }

    public on(event: string, fn: Function): Subscription {
        switch (event) {
            case 'message':
                return this.messageStream.subscribe((e: any) => fn.call(this, e, this._extractDataFromWSEvent(e)));
            case 'open':
                return this.openStream.subscribe((e: any) => fn.call(e));
            case 'error':
                return this.errorStream.subscribe((e: any) => fn.call(e));
            case 'close':
                return this.closeStream.subscribe((e: any) => fn.call(e));
            default:
                throw Error(`'${event}' is not a valid event. Allowed ones: 'message', 'open', 'error' and 'close'`);
        }

    }


}

export default WebsocketDatasource;
