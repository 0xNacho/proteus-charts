import {dispatch} from 'd3';

/**
 * 
 * A Datasource is the name given to the connection set up to a data endpoint. This class defines the common methods for the datasources,
 * such as start() and stop().
 * 
 * @export Default export: Datasource class
 * 
 * @class Datasource The Datasource class
 * 
 */
class Datasource {
    /**
     * Creates an instance of Datasource.
     * 
     * 
     * @memberOf Datasource
    
     */
    protected dispatcher: any = null;
    protected source : {any} = null;
    protected isWaitingForData : boolean = true;

    constructor() {
        // this.filters = [];
        // this.properties = [];
    }

    /**
     * Starts the stream of data
     * 
     * 
     * @memberOf Datasource
     */
    start() {
        window.console.log('Starting datasource');
    }

    /**
     * 
     * If started, this method stops the stream of data
     * 
     * @memberOf Datasource
    
     */
    stop() {
        window.console.log('Stopping datasource');
    }


    configure(dispatcher) {
        this.dispatcher = dispatcher;
    }

/*

    property(prop, newProp, cast) {
        this.properties.push({ 'p': prop, 'newP': newProp, cast: cast });
        return this;
    }


    convert(data) {
        let result = {};
        for (let i in this.properties) {
            let p = this.properties[i].p;
            let value = eval('data.' + this.properties[i].newP);
            // if(this.properties[i].cast){
            //    value = new this.properties[i].cast(value);
            // }

            result[p] = value;
        }
        return result;
    }
    */

    /**
     * Filters the incoming messages. Each data record that do not comply the filter condition will be discarded
     * 
     * @param {any} filter A filter condition
     * @returns this Datasource instance
     * 
     * @memberOf Datasource
     */
    filter(filter) {
        return this;
    }
}

export default Datasource;