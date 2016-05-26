'use strict';

/**
 * Gauge implementation. This charts belongs to 'Basic' family.
 * It is inherited on 'Basic'.
 */
class Gauge extends Basic {

  /**
   * Gauge constructor. It needs (at least) one argument to start: data.
   * Optionally, you can indicate a second argument that includes all the chart options. If you
   * do not specify this, '_default' object is used by default.
   */
  constructor(data, config) {
    super();

    if (!arguments.length) {
      throw new Error('Missing constructor parameters');
    }

    let dataFormat = arguments[0].constructor.name;
    let nArguments = arguments.length;

    switch (dataFormat) {
      case 'WebsocketDatasource':
        this.datasource = arguments[0];
        this.data = [];
        this._configureDatasource();
        break;
      case 'Array':
        this.data = arguments[0];
        break;
      default:
        throw TypeError('Wrong data format');
    }
    //if only 1 parameter is specified, take default config. Else, take the second argument as config.
    this.config = (nArguments === 1) ? _default[this.constructor.name]
      : arguments[1];

    this._initializeSVGContext();
  }

  /**
   * Renders a data object on the chart.
   * @param  {Object} data This object contains the data that will be rendered on chart. If you do not
   * specify this param, this.data will be used instead.
   */
  draw(data = this.data) {
    super.draw(data);
  }

  fire(event, data) {
    var element = this._svg.strategy.svg;
    if (!element || !element[0][0]) {
      throw Error('Cannot fire events because SVG dom element is not yet initialized');
    }
    element[0][0].dispatchEvent(new CustomEvent(event, {detail: {type: data}}));
  }

  /**
   * Add new data to the current graph. If it is empty, this creates a new one.
   * @param  {[Object]} datum data to be rendered
   */
  keepDrawing(datum) {
    var config = this.config;
    var maxNumberOfElements = config.maxNumberOfElements;
    if (!this.datum) {
      this.datum = [];
    }
    this.datum = this.datum.concat(datum);
    if (maxNumberOfElements && maxNumberOfElements > 0) {
      if (this.datum.length > maxNumberOfElements) {
        for (let i = 0; i < datum.length; i++) {
          this.datum.shift();
        }
      }
    }
    super.draw(this.datum);
  }

}