class SvgLinechartStrategy extends SvgChart {
  constructor(chartContext) {
    super(chartContext);
    //Create range function
    this.xAxisName = 'x';
    this.yAxisName = 'y';

    //Create scales
    switch(this.xDataType) {
      case 'Numeric':
        this.x = d3.scale.linear().range([0, this.width]);
        this.xAxis = d3.svg.axis()
          .scale(this.x)
          .orient('bottom')
          .ticks(this.xticks);
        break;
      case 'Date':
        this.x = d3.time.scale().range([0, this.width]);
        this.format = d3.time.format(this.xDateformat);
        this.xAxis = d3.svg.axis()
          .scale(this.x)
          .orient('bottom')
          .ticks(this.xticks);
        break;
      default:
        this.x = d3.scale.linear().range([0, this.width]);
        this.xAxis = d3.svg.axis()
          .scale(this.x)
          .orient('bottom')
          .ticks(this.xticks);
    }

    this.y = d3.scale.linear().range([this.height, 0]);
    this.yAxis = d3.svg.axis()
      .scale(this.y)
      .orient('left')
      .innerTickSize(-this.width)
      .outerTickSize(0)
      .tickPadding(20)
      .ticks(this.yticks, this.tickLabel);

    this.keyFunction = ((d) => d.x);
    this.seriesKeyFunction = ((d) => d.key);
  }

	/**
	 * Renders a linechart based on data object
	 * @param  {Object} data Data Object. Contains an array with x and y properties.
	 * 
	 */
  draw(data) {
    var lineGen = null;
    var areaGen = null;
    var format = this.format;
    var s = null;
    // var path = null;

    super.draw(data);

    if (this.xDataType === 'Date') {
      //Force x axis to be a date and y-axis to be a number
      for (s = 0; s < data.length; s++) {
        data[s].values.forEach((d) => {
          d.x = format.parse(d.x);
          d.y = +d.y;
        });
      }
    }

    //Re-scale axis
    this.x.domain([d3.min(data, (series) => {
      return d3.min(series.values, (d) => d.x);
    }), d3.max(data, (series) => {
      return d3.max(series.values, (d) => d.x);
    })]);
    this.y.domain([0, d3.max(data, (series) => {
      return d3.max(series.values, (d) => d.y);
    })]);

    //Create a transition effect for axis rescaling
    this.svg.select('.x.axis').transition().duration(this.transitionDuration).call(this.xAxis);
    this.svg.select('.y.axis').transition().duration(this.transitionDuration).call(this.yAxis);

    // Line generator
    lineGen = d3.svg.line()
      .x((d) => this.x(d.x))
      .y((d) => this.y(d.y));

    // Area generator
    areaGen = d3.svg.area()
      .x((d) => this.x(d.x))
      .y0(this.height )
      .y1((d) => this.y(d.y));

    var series = this.svg.selectAll('.series')
      .data(data)
      .enter().append('g')
      .attr('class', 'series')
      .style('stroke', (d, i) => {
        return this.colorScale(i);
      });

    // Append lines
    var line = series.append('path')
      .attr('class', 'line');
    var area = series.append('path')
      .attr('class', 'area');

    // Bind data to lines
    var path = this.svg.selectAll('path')
      .data(data, this.seriesKeyFunction)
      .style('stroke', (d, i) => this.colorScale(i))
      .style('fill', (d, i) => this.colorScale(i));

    // Draw area when requested
    if (this.area) {
      var areaPath = this.svg.selectAll('.area')
        .data(data, this.seriesKeyFunction)
        .style('stroke', (d, i) => this.colorScale(i))
        .style('fill', (d, i) => this.colorScale(i));

      area
        .attr('d', (d) => areaGen(d.values))
        .style('stroke', (d, i) => this.colorScale(i));

      areaPath
        .style('fill-opacity', this.areaOpacity)
        .attr('d', (d) => areaGen(d.values));
    }
      line
        .attr('d', (d) => lineGen(d.values))
        .style('stroke', (d, i) => this.colorScale(i));

      path
        .attr('d', (d) => lineGen(d.values));


    // Append markers to lines
    if (this.markers) {
      switch (this.markers.shape) {
        case 'circle':
              var markers = this.svg.selectAll('.series')
                .selectAll('circle')
            .data((d, i) => d.values);
          markers.enter().append('circle')
            .attr('cx', (d) => this.x(d.x))
            .attr('cy', (d) => this.y(d.y))
            .attr('r', this.markers.size)
            .style({
              'fill': 'white',
              'stroke-width': this.markers.outlineWidth
            });
          markers.exit().remove();
          markers
            .transition()
            .attr('cx', (d) => this.x(d.x))
            .attr('cy', (d) => this.y(d.y))
            .duration(0);
          break;
        default:
          throw Error('Not a valid marker shape: ' + this.markers.shape);
      }
      // Add tooltips to the markers
      if (this.tooltip) {
        markers.on('mouseover.tip', this.tooltip.show)
          .on('mouseout.tip', this.tooltip.hide);
      }

      // Add events to the markers
      markers
        .on('mousedown.user', this.events.down)
        .on('mouseup.user', this.events.up)
        .on('mouseleave.user', this.events.leave)
        .on('mouseover.user', this.events.over)
        .on('click.user', this.events.click);

      this.interactiveElements = markers;
    }

    this._applyCSS();

    // Check overlapping axis labels
    var labelsWidth = 0;
    this.svg.selectAll('.x.axis g.tick text')
      .each(function() {
        labelsWidth += this.getBBox().width;
      });
    if (labelsWidth > this.width) {
      this.xticks = null;
      this.xAxis.ticks(this.xticks);
      this.svg.selectAll("g.x.axis")
        .call(this.xAxis);
    }
  }

  _initialize() {

    super._initialize();
    this._initialized = true;
  }

	/**
	 * This method adds config options to the chart context.
	 * @param  {Object} config Config object
	 */
  _loadConfigOnContext(config) {
    super._loadConfigOnContext(config);
    this.markers = {};
    this.markers.color = config.markers.color || _default.Linechart.markers.color;
    this.markers.outlineColor = config.markers.outlineColor || _default.Linechart.markers.outlineColor;
    this.markers.outlineWidth = config.markers.outlineWidth || _default.Linechart.markers.outlineWidth;
    this.markers.shape = config.markers.shape || _default.Linechart.markers.shape;
    this.markers.size = config.markers.size || _default.Linechart.markers.size;
    this.area = typeof(config.area) === 'undefined' ?  _default.Linechart.area : config.area;
    this.areaOpacity = config.areaOpacity || _default.Linechart.areaOpacity;
    this.xDataType = config.xDataType || _default.Linechart.xDataType;
    this.xDateformat = config.xDateFormat || _default.Linechart.xDateFormat;

    //Just for testing purposes
    return this;
  }
}