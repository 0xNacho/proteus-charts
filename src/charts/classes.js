'use strict';

/**
 * Base class. This class is inherited in all charts implementations.
 * This is a non-instanciable chart.
 */
class Chart {

  constructor() {
    var clazz = this.constructor.name;
    if (clazz === 'Chart' || clazz === 'Basic' || clazz === 'Flow') {
      throw new Error(clazz + ' is non-instanciable');
    }
    this.events = {};

    //Create chaining api
    Chart.prototype.custom = new Object();

    var customProperties = [];
    for (let p in _default[this.constructor.name]) {
      //hasOwnProperty?
      customProperties.push(p);
    }

    customProperties.forEach((property) => {
      Chart.prototype["custom"][property] = function (value) {
        console.debug('changing property', property, 'to', value, this);
        //create apply method to apply changes
        return this;
      }
    })
  }

  /**
   * Returns the chart context: data, configuration and chart type.
   */
  _getChartContext() {
    return {
      data: this.data,
      config: this.config,
      cType: this.constructor.name
    };
  }

  /**
   * Initialize the SVG context
   */
  _initializeSVGContext() {
    this._svg = new SvgStrategy(strategies[this.constructor.name](this._getChartContext()));
  }

  /**
  * Add a new point to a given serie.
  * @param  {object} new serie
  * @autodraw {Boolean} Auto re-draw the current chart after adding the new serie
  */
  addPoint(point, autodraw = true) {
    if (!point || !utils.isObject(point)) {
      throw Error('\'point\' should be an object. Instead: ' + point);
    }

    this.data.push(point);

    if (autodraw) {
      this.draw();
    }
  }

  /**
   * Add new points (array) to a given serie.
   * @param  {Array} points Array of data
   * @autodraw {Boolean} Auto re-draw the current chart after adding new series
   */
  addPoints(points, autodraw = true) {
    if (!points || points.constructor !== Array) {
      throw Error('\'points\' should be an array. Instead: ' + points);
    }

    this.data = this.data.concat(points);

    if (autodraw) {
      this.draw();
    }
  }

  removePoint(point, autodraw = true) {
    if (!point || !utils.isObject(point)) {
      throw Error('\'point\' should be an object. Instead: ' + point);
    }

    this.data.some((item, index, array) => {
      var equals = (JSON.stringify(item) === JSON.stringify(point));
      if (equals) {
        return this.data.splice(index, 1);
      }
    });

    if (autodraw) {
      this.draw();
    }
  }

  /**
   * Renders data on barchart. Only allowed when data is an array of static data.
   * @param  {Array} data Array of data
   */
  draw(data = this.data) {
    if (!utils.isArray(data)) {
      throw new TypeError('draw method is only allowed with static data.');
    }
    data = JSON.parse(JSON.stringify(data));
    this._svg.draw(data);
  }

  /**
   * Returns a PNG image of the current graph
   * @return {[String]} Image in data-url format
   */
  toPNG(cb) {
    utils.svgAsDataUri(d3.select(this.config.selector + ' svg')[0][0], {}, (uri, err) => {
      if (err) {
        throw Error('Error converting to image ' + err);
      }
      else {
        cb(uri);
      }
    });
  }

  /**
   * On method. Define custom events (click, over, down and up).
   */
  on(eventName, action) {
    if (!eventName || typeof eventName !== 'string') {
      throw Error('eventName should be a string. Instead: ' + eventName);
    }
    if (!action || !utils.isFunction(action)) {
      throw Error('action should be a function. Instead: ' + eventName);
    }

    this.events[eventName] = action;
    this._svg.on(this.events);
    return this;
  }

  _configureDatasource() {
    this.datasource.configure(this.reactor);
    this.reactor.registerEvent('onmessage');
    this.reactor.registerEvent('onerror');
    this.reactor.registerEvent('onopen');

    this.reactor.addEventListener('onmessage', (data) => {
      this.keepDrawing(data);
    });

    this.reactor.addEventListener('onopen', (e) => {
      console.debug('Connected to websocket endpoint.', e);
    });

    this.reactor.addEventListener('onerror', (error) => {
      console.error('An error has occured: ', error);
    });
  }

  pause() {
    if (!this.datasource) {
      throw ('You need a datasource to pause a streaming');
    }
    this.reactor.removeEventListener('onmessage');
  }

  resume() {
    if (!this.datasource) {
      throw ('You need a datasource to resume a streaming');
    }

    this.reactor.addEventListener('onmessage', (data) => {
      this.keepDrawing(data);
    });
  }

}


/**
 * Basic chart. This class in inherited in all basic charts implementatios.
 * This is a non-instanciable chart. Instanciable charts are: bar, line, point.
 */

class Basic extends Chart {
  constructor() {
    super();
    this.reactor = new Reactor();
  }

  keepDrawing(datum) {
    let config = this.config;
    let maxNumberOfElements = config.maxNumberOfElements;

    if (!datum) {
      console.warn('attemp to draw null datum');
      return;
    }

    if (datum.constructor.name === 'Array') {
      for (let i in datum) {
        this.keepDrawing(datum[i]);
      }
    }
    else {
      //Find serie or initialize this.
      let serie = utils.findElement(this.data, 'key', datum.key);
      if (!serie || !serie.values) {
        serie = {
          key: datum.key,
          values: []
        };
        this.data.push(serie);
      }
      //use addToSerie()

      serie.values = serie.values.concat(datum.values);
    }
    this.draw(this.data);
    return this.data;
  }
}

/**
 * Flow chart. This class in inherited in all basic charts implementatios.
 * This is a non-instanciable chart. Instanciable charts are: stremgraph and so on.
 */

class Flow extends Chart {
  constructor() {
    super();
  }

  draw(data) {
    //hack to clone object. It is because flow chart (like streamgraph) modify the original dataset to create itself. 
    //It could be a problem in streaming scenario, where data is concatenated with new data. We need to keep the original dataset.
    data = JSON.parse(JSON.stringify(data));
    super.draw(data);
  }
}
