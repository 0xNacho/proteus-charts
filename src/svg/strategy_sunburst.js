class SvgSunburstStrategy extends SvgChart {

  constructor(chartContext) {
    super(chartContext);
  }

	/**
	 * Renders a barchart based on data object
	 * @param  {Object} data Data Object. Contains an array with x and y properties.
	 * 
	 */
  draw(data) {
    if (!this._initialized) {
      this._initialize();
    }

    // Remove all the paths before redrawing
    this._removePaths();

    // Create layout partition
    var partition = d3.layout.partition()
      .value((d) =>  d.value);

    // Create arc generators
    this.arcGen = d3.svg.arc()
      .startAngle((d) =>  Math.max(0, Math.min(2 * Math.PI, this.x(d.x))))
      .endAngle((d) =>  Math.max(0, Math.min(2 * Math.PI, this.x(d.x + d.dx))))
      .innerRadius((d) =>  Math.max(0, this.y(d.y)))
      .outerRadius((d) =>  Math.max(0, this.y(d.y + d.dy)));

    // Draw the paths (arcs)
    var paths = this.svg.selectAll('path')
      .data(partition.nodes(data))
      .enter().append('path')
      .attr('d', this.arcGen)
      .style('fill', (d) => {
        if (!d.parent) {
          return 'white';
        } else {
          return this.colorScale((d.children ? d : d.parent).name);
        }
      });

    // Create infobox
    var infobox = this.svg
      .append('g')
      .attr('class', 'infobox')
      .attr('pointer-events', 'none');
    // Append central circle
    // infobox.append('circle')
    //   .attr('cx', 0)
    //   .attr('cy', 0)
    //   .attr('r', 90)
    //   .attr('fill', 'rgba(255, 255, 255, 0.7)')
      // .attr('fill', 'white')
      // .attr('pointer-events', 'none');
    infobox.append('text')
      .attr('class', 'name')
      .attr('x', 0)
      .attr('y', 0)
      .attr('pointer-events', 'none');
    infobox.append('text')
      .attr('class', 'value')
      .attr('x', 0)
      .attr('y', 0)
      .attr('pointer-events', 'none');


    paths
      .on('mouseover', (d) => {
        var ancestors = this._getAncestors(d);
        // Fade all the arcs
        if (ancestors.length > 0) {
          d3.selectAll('path')
              .style('opacity', 0.3);
        }
        d3.selectAll('path')
          .filter((node) => ancestors.indexOf(node) >= 0)
          .style('opacity', 1);
        // Hightlight the hovered arc
        // d.parent ?
        //   d3.select(this).style('opacity', 1) :
        //   d3.select('.infobox .name').style('font-weight', 'bold');
          this.svg.select('.infobox .name').text(d.name);
          this.svg.select('.infobox .value').text(d.value);
      })
      .on('mouseout', function(d) {
        d3.selectAll('path').style('opacity', 1);
        d3.select('.infobox .name').style('font-weight', 'normal');
        d3.select('.infobox .name').text('');
        d3.select('.infobox .value').text('');
      })
      // .on('click', (d) => {
      //   this._zoom(d);
      //   this.svg.select('.infobox .name').text(d.name);
      //   this.svg.select('.infobox .value').text(d.value);
      // })
    ;

    d3.select(self.frameElement).style('height', this.height + 'px');

    this._applyCSS();
  }

  /**
   * Zooms into the clicked arc.
   * From: https://bl.ocks.org/mbostock/4348373
   * @param d Current arc data
   * @private
   */
  _zoom(d) {
    this.svg
      .transition()
      .duration(450)
      .tween('scale', () => {
        var xd = d3.interpolate(this.x.domain(), [d.x, d.x + d.dx]),
          yd = d3.interpolate(this.y.domain(), [d.y, 1]),
          yr = d3.interpolate(this.y.range(), [d.y ? 30 : 0, this.radius]);
        return (t) => {
          this.x.domain(xd(t));
          this.y.domain(yd(t)).range(yr(t));
        };
      })
      .selectAll('path')
      .attrTween('d', (d) => () => this.arcGen(d) );
  }


  /**
   * From: http://bl.ocks.org/kerryrodden/7090426
   * @param node
   * @returns {Array}
   * @private
   */
  _getAncestors(node) {
    var path = [];
    var current = node;
    while (current.parent) {
      path.unshift(current);
      current = current.parent;
    }
    return path;
  }

  /**
   * Removes all the paths (arcs). Doing this before each redraw prevents the
   * transition to mess up the arcs.
   * @private
   */
  _removePaths() {
    this.svg.selectAll('path').remove();
  }

  _initialize() {
    // super._initialize();

    var width = this.width + this.margin.left + this.margin.right;
    var height = this.height + this.margin.left + this.margin.right;
    this.radius = (Math.min(width, height) / 2) - 10; // TODO 10 = margin

    // Create scales
    this.x = d3.scale.linear()
      .range([0, 2 * Math.PI]);
    this.y = d3.scale.sqrt()
      .range([0, this.radius]);

    // Create a global 'g' (group) element
    this.svg = d3
      .select(this.selector).append('svg')
      .attr({ width, height })
      .append('g')
      .attr('transform', 'translate(' + width / 2 + ',' + (height / 2) + ')');


    //Create tooltip (d3-tip)
    // if (this.tip) {
    //   this.tooltip = d3.tip()
    //     .attr('class', 'd3-tip')
    //     .style({
    //       'line-height': 1,
    //       'padding': '12px',
    //       'background': 'rgba(0, 0, 0, 0.8)',
    //       'color': '#fff',
    //       'border-radius': '2px',
    //       'pointer-events': 'none',
    //     })
    //     .html(this.tip);
    //   this.svg.call(this.tooltip);
    // }

    //Initialize SVG
    this._initialized = true;
  }

	/**
	 * This method adds config options to the chart context.
	 * @param  {Object} config Config object
	 */
  _loadConfigOnContext(config) {
    config = config || { events: {} };
    if (!config.events) {
      config.events = {};
    }
    super._loadConfigOnContext(config);

    //Just for testing purposes
    return this;
  }
}