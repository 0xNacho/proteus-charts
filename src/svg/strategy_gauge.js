class SvgGaugeStrategy extends SvgChart {
  constructor(chartContext) {
    super(chartContext);

    //Create scale
    this.scale = d3.scale
      .linear()
      .domain([this.minLevel, this.maxLevel])
      .range([0, 1]);

    this.angleScale = d3.scale
      .linear()
      .domain([this.minLevel, this.maxLevel])
      .range([90 + this.minAngle, 90 + this.maxAngle]);

    this.colorScale.domain([0, 1]);

    this.scaleMarks = this.scale.ticks(this.ticks);
    this.tickData = d3.range(this.ticks)
      .map(() => 1 / this.ticks);

    this.keyFunction = ((d) => d.x);
    this.translation = (() => 'translate(' + this.r + ',' + this.r + ')');

  }

	/**
	 * Renders a gauge chart based on data object
	 * @param  {Object} data Data Object. Contains a numeric value.
	 * 
	 */
  draw(data) {
    var needleLen = null;

    super.draw(data);
    this.datum = data[data.length - 1];
    needleLen = this.needleLenghtRatio * (this.r);

    // Append the needle
    if (!this.needle) {
      this.needle = this.svg.append('path')
        .attr('class', 'needle')
        .datum(this.datum.x)
        .attr('transform', (d) => `translate(${this.r}, ${this.r}) rotate(${this.angleScale(d) - 90})`)
        .attr('d', `M ${0 - this.needleNutRadius} ${0} L ${0} ${0 - needleLen} L ${this.needleNutRadius} ${0}`);
    }

    this.needle
      .transition()
      .attr('transform', (d) => `translate(${this.r}, ${this.r}) rotate(${this.angleScale(this.datum.x) - 90})`)
      .attr('d', `M ${0 - this.needleNutRadius} ${0} L ${0} ${0 - needleLen} L ${this.needleNutRadius} ${0}`);

    this.svg.select('.text-indicator')
      .text(this.datum.x);

    this._applyCSS();
  }


  _initialize() {
    var width = this.width + this.margin.left + this.margin.right;
    var height = this.height + this.margin.left + this.margin.right;
    var labels = null;
    var arcs = null;

    //Create a global 'g' (group) element
    this.svg = d3
      .select(this.selector).append('svg')
      .attr({ width, height })
      .append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

    this.range = this.maxAngle - this.minAngle;
    this.r = this.width / 2;
    this.needleLength = Math.round(this.r * this.needleLenghtRatio);

    this.arc = d3.svg.arc()
      .innerRadius(this.r - this.ringWidth - this.ringMargin)
      .outerRadius(this.r - this.ringMargin)
      .startAngle((d, i) => {
        var ratio = d * i;
        return utils.deg2rad(this.minAngle + (ratio * this.range));
      })
      .endAngle((d, i) => {
        var ratio = d * (i + 1);
        return utils.deg2rad(this.minAngle + (ratio * this.range));
      });

    // Append the ring
    arcs = this.svg.append('g')
      .attr('class', 'arc')
      .attr('transform', this.translation);

    // Append the ring sectors
    var arcPaths = arcs.selectAll('path')
      .data(this.tickData)
      .enter().append('path')
      // ID for textPath linking
      .attr('id', (d, i) => 'sector-' + i)
      .attr('d', this.arc);

    // Fill colors
    if (this.invertColorScale) {
      arcPaths.attr('fill', (d, i) => this.colorScale(1 - d * i));
    } else {
      arcPaths.attr('fill', (d, i) => this.colorScale(d * i));
    }

    // Apend the scale labels
    labels = this.svg.append('g')
      .attr('class', 'labels')
      .attr('transform', this.translation);

    // Append scale marker labels
    labels.selectAll('text')
      .data(this.scaleMarks)
      .enter().append('text')
      .attr('transform', (d) => {
        var ratio = this.scale(d);
        var newAngle = this.minAngle + (ratio * this.range);
        return 'rotate(' + newAngle + ') translate(0,' + (this.labelInset - this.r) + ')';
      })
      .text((d) => d);

    // Append needle nut
    this.svg.append('circle')
      .attr('class', 'needle')
      .attr('transform', this.translation)
      .attr('cx', 0)
      .attr('cy', 0)
      .attr('r', this.needleNutRadius);

    this.svg.append('g')
      .attr('class', 'needle');

    if (this.numericIndicator) {
      this.svg.append('text')
        .attr('class', 'text-indicator')
        .attr('transform', this.translation)
        .attr('x', 0)
        .attr('y', 100)
        .text('0');
    }

    //Initialize SVG
    this._initialized = true;
  }

	/**
	 * This method adds config options to the chart context.
	 * @param  {Object} config Config object
	 */
  _loadConfigOnContext(config) {
    super._loadConfigOnContext(config);

    this.minLevel = config.minLevel || _default.Gauge.minLevel;
    this.maxLevel = config.maxLevel || _default.Gauge.maxLevel;
    this.minAngle = config.minAngle || _default.Gauge.minAngle;
    this.maxAngle = config.maxAngle || _default.Gauge.maxAngle;
    this.ticks = config.ticks || _default.Gauge.ticks;
    this.ringWidth = config.ringWidth || _default.Gauge.ringWidth;
    this.ringMargin = config.ringMargin || _default.Gauge.ringMargin;
    this.labelInset = config.labelInset || _default.Gauge.labelInset;
    this.needleNutRadius = config.needleNutRadius || _default.Gauge.needleNutRadius;
    this.needleLenghtRatio = config.needleLenghtRatio || _default.Gauge.needleLenghtRatio;
    this.invertColorScale = typeof (config.invertColorScale) === 'undefined' ? _default.Gauge.invertColorScale : config.invertColorScale;
    this.numericIndicator = typeof (config.numericIndicator) === 'undefined' ? _default.Gauge.numericIndicator : config.numericIndicator;
    //Just for testing purposes
    return this;
  }

}