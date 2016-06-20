'use strict';

/**
 * Sunburst implementation. This charts belongs to 'Hierarchical' family.
 * It is inherited on 'Hierarchical'.
 */
class Sunburst extends Hierarchical {

  /**
   * Sunburst constructor. It needs (at least) one argument to start: data.
   * Optionally, you can indicate a second argument that includes all the chart options. If you
   * do not specify this, '_default' object is used by default.
   */
  constructor() {
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
      case 'Object':
        this.data = arguments[0];
        break;
      default:
        throw TypeError('Wrong data format');
    }
    //if only 1 parameter is specified, take default config. Else, take the second argument as config.
    this.config = (nArguments == 1) ? _default[this.constructor.name]
      : arguments[1];

    this._initializeSVGContext();
  }

}