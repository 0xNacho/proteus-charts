/**
 * This object is used as a default one for those charts that do not have any user configuration.
 * @type {Object}
 */
const _default = {
  Barchart: {
    style: {
      '.axis': {
        'font': '10px sans-serif'
      },
      '.axis path,.axis line': {
        'fill': 'none',
        'stroke': '#000',
        'shape-rendering': 'crispEdges'
      },
      '.x.axis path': {
        'display': 'none'
      },
      '.x.axis.label, .y.axis.label': {
        'font': '12px sans-serif'
      }
    },
    xaxis: {
      label: ''
    },
    yaxis: {
      label: 'Y'
    },
    // Set the color scale for the chart. You can use Proteus scales or any D3 scale
    colorScale: Colors.category7(),
    margin: {
      top: 20,
      right: 20,
      bottom: 30,
      left: 50
    },
    width: '100%', // %, auto, or numeric 
    height: 350,
    ticks: 5, // ticks for y axis.
    tooltip(data) { // Allows HTML
      return '<b>Eje x</b>: ' + data.x + '<br/>' +
        '<b>Eje y</b>: ' + data.y;
    },
    tickLabel: '',
    selector: '#chart',
    events: {
      down() {
        d3.select(this).classed('hover', false);
      },
      over() {
        d3.select(this)
          .transition()
          .duration(150)
          .attr('fill-opacity', 0.4);
      },
      leave() {
        d3.select(this)
          .transition()
          .duration(150)
          .attr('fill-opacity', 1);
      },
      click(d, i) {
        console.log(d, i);
      }
    },
    transitionDuration: 300,
    maxNumberOfElements: 0, // used by keepDrawing to reduce the number of elements in the current chart
    sortData: {
      descending: false,
      prop: 'x'
    }
  },
  Linechart: {
    selector: '#chart',
    width: '100%', // %, auto, or numeric
    height: 250,
    margin: {
      top: 20,
      right: 20,
      bottom: 30,
      left: 50
    },
    colorScale: Colors.category7(),
    area: false,
    areaOpacity: 0.4,
    maxNumberOfElements: 10, // used by keepDrawing to reduce the number of elements in the current chart
    transitionDuration: 300,
    tickLabel: '',
    xaxis: {
      label: 'X',
      ticks: 5
    },
    yaxis: {
      label: 'Y',
      ticks: 5
    },
    style: {
      '.line': {
        'stroke-width': 2,
        'fill': 'none'
      },
      '.area': {
        'stroke-width': 0
      },
      '.axis': {
        'font': '10px sans-serif'
      },
      '.axis path,.axis line': {
        'fill': 'none',
        'stroke': '#000',
        'shape-rendering': 'crispEdge'
      },
      '.x.axis path': {
        'display': 'none'
      },
      '.x.axis.label, .y.axis.label': {
        'font': '12px sans-serif'
      }
    },
    markers: {
      shape: 'circle',
      size: 5,
      color: '#FFFCCA',
      outlineColor: '#537780',
      outlineWidth: 2
    },
    tooltip(data) {
      return '<b>X axis</b>: ' + data.x + '<br/>' +
        '<b>Y axis</b>: ' + data.y;
    },
    events: {
      down() {
        d3.select(this).classed('hover', false);
      },
      over() {
        d3.select(this)
          .transition()
          .duration(50)
          .attr('r', 7)
          ;
      },
      leave() {
        d3.select(this)
          .transition()
          .duration(50)
          .attr('r', 5)
          .style('stroke-width', 2);
      },
      click(d, i) {
        console.log(d, i);
      }
    },
    sortData: {
      descending: false,
      prop: 'x'
    }
  },
  Streamgraph: {
    selector: '#chart',
    xDateFormat: '%m/%d/%y',
    colorScale: Colors.category5(),
    xaxis: {
      label: ''
    },
    yaxis: {
      label: ''
    },
    style: {
      '.axis': {
        'font': '10px sans-serif'
      },
      '.axis path,.axis line': {
        'fill': 'none',
        'stroke': '#000',
        'shape-rendering': 'crispEdges'
      },
      '.x.axis path': {
        'display': 'none'
      },
      '.x.axis.label, .y.axis.label': {
        'font': '12px sans-serif'
      }
    },
    margin: {
      top: 20,
      right: 20,
      bottom: 30,
      left: 50
    },
    width: '100%', // %, auto, or numeric 
    height: 300,
    ticks: 5, // ticks for y axis.
    tooltip(object) {
      return 'Info: ' + JSON.stringify(object);
    },
    tickLabel: '',
    events: {
      down() {
        d3.select(this).classed('hover', false);
      },
      over() {
        d3.select(this)
          .transition()
          .duration(150)
          .attr('fill-opacity', 0.4);
      },
      leave() {
        d3.select(this)
          .transition()
          .duration(150)
          .attr('fill-opacity', 1);
      },
      click(d, i) {
        console.log(d, i);
      }
    },
    transitionDuration: 300,
    maxNumberOfElements: 0, // used by keepDrawing to reduce the number of elements in the current chart
    sortData: {
      descending: false,
      prop: 'x'
    }
  },
  Gauge: {
    selector: '#chart',
    colorScale: Colors.diverging_red_blue(),
    invertColorScale: true,
    minLevel: 0,
    maxLevel: 100,
    minAngle: -90,
    maxAngle: 180,
    ringWidth: 50,
    ringMargin: 20,
    labelInset: 10,
    needleNutRadius: 25,
    needleLenghtRatio: 0.8,
    numericIndicator: true,
    xaxis: {
      label: 'X'
    },
    yaxis: {
      label: 'Y'
    },
    margin: {
      top: 20,
      right: 20,
      bottom: 30,
      left: 50
    },
    width: '50%', // %, auto, or numeric
    height: 250,
    style: {
      '.labels': {
        'font': '18px sans-serif',
        'text-anchor': 'middle'
      },
      '.text-indicator': {
        'font': '48px sans-serif',
        'text-anchor': 'middle'
      },
      '.needle': {
        'fill': '#666666'
      }
    },
    ticks: 10, // ticks for y axis.
    markers: {
      shape: 'circle',
      size: 5,
      color: '#FFFCCA',
      outlineColor: '#537780',
      outlineWidth: 2
    },
    tooltip(data) {
      return JSON.stringify(data);
    },
    events: {
      down() {
        d3.select(this).classed('hover', false);
      },
      over() {
        d3.select(this)
          .transition()
          .duration(50)
          .attr('r', 7)
          ;
      },
      leave() {
        d3.select(this)
          .transition()
          .duration(50)
          .attr('r', 5)
          .style('stroke-width', 2);
      },
      click(d, i) {
        console.log(d, i);
      }
    },
    tickLabel: '',
    transitionDuration: 300,
    maxNumberOfElements: 5, // used by keepDrawing to reduce the number of elements in the current chart
    sortData: {
      descending: false,
      prop: 'x'
    }
  },
  Sunburst: {
    selector: '#chart',
    colorScale: Colors.category8(),
    margin: {
      top: 20,
      right: 20,
      bottom: 30,
      left: 50
    },
    width: '50%', // %, auto, or numeric
    height: 450,
    style: {
      '.labels': {
        'font': '18px sans-serif',
        'text-anchor': 'middle'
      },
      'path': {
        'stroke': '#fff',
        'stroke-width': 2,
        'shape-rendering': 'crispEdge'
      },
      '.infobox': {
        'text-anchor': 'middle',
        'alignment-baseline': 'central',
        'fill': 'black'
      },
      '.infobox .name': {
        'font': '28px sans-serif'
      },
      '.infobox .value': {
        'font': '24px sans-serif',
        'transform': 'translate(0, 1.5em)'
      }
    },
    tooltip(data) {
      return data.name + ': ' + data.value;
    },
    events: {
      down() {
        d3.select(this).classed('hover', false);
      },
      over() {
        d3.select(this)
          .transition()
          .duration(50)
          .attr('r', 7)
        ;
      },
      leave() {
        d3.select(this)
          .transition()
          .duration(50)
          .attr('r', 5)
          .style('stroke-width', 2);
      },
      click(d, i) {
        console.log(d, i);
      }
    },
    tickLabel: '',
    transitionDuration: 300,
    maxNumberOfElements: 5, // used by keepDrawing to reduce the number of elements in the current chart
    sortData: {
      descending: false,
      prop: 'x'
    }
  }
};