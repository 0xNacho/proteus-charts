describe('SvgLinechartStrategy', () => {

  beforeEach(() => {
    //Append default chart div
    var div = document.createElement('div');
    div.innerHTML = '<div id="chart"></div>';
    document.body.appendChild(div);
  });

  afterEach(() => {
    var el = document.getElementById('chart');
    el.parentNode.removeChild(el);
  });

  describe('_loadConfigOnContext(config)', () => {
    it('should apply the default configuration if a custom one is ommited', () => {
      var data = [{ x: 0, y: 1 }, { x: 0, y: 2 }];
      var width = 250;
      var height = 100;
      var margin = { left: 0, right: 0, top: 0, bottom: 0 };
      var config = { width, height, margin };
      var svg = new SvgLinechartStrategy({ data, config, cType: 'Linechart' });
      var result = svg._loadConfigOnContext(config);
      result.should.have.property('width').equals(width);
      result.should.have.property('height').equals(height);
    });
  });
});

describe('Linechart', () => {
  beforeEach(() => {
    //Append default chart div
    var div = document.createElement('div');
    div.innerHTML = '<div id="chart"></div>';
    document.body.appendChild(div);
  });

  afterEach(() => {
    //Remove default chart div
    var el = document.getElementById('chart');
    el.parentNode.removeChild(el);
  });

  describe('constructor()', () => {
    it('throws a "Missing constructor parameters" if the data parameter is missing', () => {
      assert.throws(() => {
        var linechart = new Linechart();
      }, Error, 'Missing constructor parameters');
    });

    it('should ignore parameters after the second one.', () => {
      var data = [{ key: 'serie1', values: [{ x: 0, y: 1 }, { x: 0, y: 2 }] }];
      var config = {};
      var linechart = new Linechart(data, config, 'foo');
      assert.isOk(linechart);
    });

    it('will construct a line chart given some data', () => {
      var data = [{ key: 'serie1', values: [{ x: 0, y: 1 }, { x: 0, y: 2 }] }];
      var chart = new Linechart(data);
      assert.isOk(chart);
    });

    it('should construct a line chart with some custom configuration', () => {
      var data = [{ key: 'serie1', values: [{ x: 0, y: 1 }, { x: 0, y: 2 }] }];
      var width = 250;
      var margin = { left: 0, right: 0, top: 0, bottom: 0 };
      var config = { width, margin };
      var chart = new Linechart(data, config);
      var svg = null;

      chart.draw();
      assert.isOk(chart);
      svg = document.getElementsByTagName('svg')[0];

      parseInt(svg.getAttribute('width')).should.equals(width);
    });

    it.skip('should construct a line chart with streaming data', function (done) {
      var streamingData = {
        endpoint: 'ws://localhost:3000/socket.io/?EIO=3&transport=websocket'
      };
      var datasource = new WebsocketDatasource(streamingData);
      var chart = new Linechart(datasource);

      this.timeout(5000);
      chart.start();

      setTimeout(() => {
        done();
      }, 3000);
    });

    it('throws a "Wrong data format" TypeError if data is not an object neither an array', () => {
      var data = 'wrong parameter';
      assert.throws(() => {
        var linechart = new Linechart(data);
      }, TypeError, 'Wrong data format');
    });
  });

  describe('chart functions', () => {
    it('toPNG()', (done) => {
      var data = [{ key: 'serie1', values: [{ x: 0, y: 1 }, { x: 0, y: 2 }] }];
      var chart = new Linechart(data);
      chart.draw();
      //wait for image creation
      setTimeout(() => {
        var result = chart.toPNG((uri) => {
          assert.isOk(uri);
        });
        done();
      }, 600);
    });

    it('addSerie(): should return an error because serie needs to be an object', () => {
      assert.throws(() => {
        var data = [{ key: 'serie1', values: [{ x: 0, y: 1 }, { x: 0, y: 2 }] }];
        var chart = new Linechart(data);
        chart.draw();
        chart.addSerie([{}, {}], true);
      }, Error);
    });

    it('addSeries(): should return an error because serie needs to be an array', () => {
      assert.throws(() => {
        var data = [{ key: 'serie1', values: [{ x: 0, y: 1 }, { x: 0, y: 2 }] }];
        var chart = new Linechart(data);
        var serie = {};

        chart.draw();
        chart.addSeries(serie);

      }, Error);
    });


    it('keepDrawing() ', () => {
      var data = [{ key: 'serie1', values: [{ x: 0, y: 1 }, { x: 1, y: 2 }] }];
      var chart = new Linechart(data);
      var newSerieElement = { key: 'serie1', values: [{ x: 2, y: 30 }] };
      var chartData = chart.keepDrawing(newSerieElement);
      data[0].values.push({ x: 2, y: 30 });
      assert.equal(chartData, data);
    });

  });
});
