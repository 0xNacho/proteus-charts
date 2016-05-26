class ProteusEvent {
    constructor(name) {
        this.name = name;
        this.callbacks = [];
    }

    registerCallback(cb) {
        this.callbacks.push(cb);

    }
}

class Reactor {
    constructor() {
        this.events = {};
    }
    registerEvent(eventName) {
        var event = new ProteusEvent(eventName);
        this.events[eventName] = event;
    }

    dispatchEvent(eventName, args) {
        if (this.events[eventName]) {
            this.events[eventName].callbacks.forEach((cb) => {
                cb(args);
            });
        }
    }

    addEventListener(eventName, cb) {
        //check if eventName already exists
        
        if (this.events[eventName]) {
            this.events[eventName].registerCallback(cb);
        }
    }

    removeEventListener(eventName) {
        var event = this.events[eventName];
        event.callbacks = [];
    }

}