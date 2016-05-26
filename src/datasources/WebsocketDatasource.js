class WebsocketDatasource extends Datasource {
    constructor(source) {
        super();
        this.source = source;
        this.reactors = [];
    }

    configure(reactor) {
        this.reactors.push(reactor);
    }

    start() {
        this.ws = new WebSocket(this.source.endpoint);

        this.ws.onopen = (e) => {
            for (let rIndex in this.reactors) {
                let reactor = this.reactors[rIndex];
                reactor.dispatchEvent('onopen', e);
            }
        };
        this.ws.onerror = (e) => {
            for (let rIndex in this.reactors) {
                let reactor = this.reactors[rIndex];
                reactor.dispatchEvent('onerror', e);
            }
        };
        this.ws.onmessage = (e) => {
            var data = JSON.parse(event.data.substr(2))[1];
            //var data = JSON.parse(e.data);
            for (let rIndex in this.reactors) {
                let reactor = this.reactors[rIndex];
                reactor.dispatchEvent('onmessage', data);
            }
        };
    }

    stop() {
        if (this.ws) {
            this.ws.close();
        }
    }
}