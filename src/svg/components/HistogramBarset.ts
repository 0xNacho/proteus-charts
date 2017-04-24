import Component from './Component';
import Config from '../../Config';
import XAxis from './XAxis';
import YAxis from './YAxis';
import { simple2nested, simple2stacked } from '../../utils/data/transforming';
import Globals from '../../Globals';
import {
    stack,
    scaleBand,
    map,
    area,
    selection,
    nest,
    easeLinear,
    histogram,
    max, min,
    format
} from 'd3';


class HistogramBarset extends Component {

    private x: XAxis;
    private y: YAxis;

    constructor(x: XAxis, y: YAxis) {
        super();
        this.x = x;
        this.y = y;
    }

    public render() {
        //Do nothing, since points render only when new data is received.
        this.svg.append('g')
        .attr('class', 'proteic-bars')
        .style('fill', '#f1a30d')
        .style('stroke', '#0c3183')
        .style('shape-rendering', 'crispEdges');
    }

    public update(data: [any]) {
        let propertyKey = this.config.get('propertyKey'),
            propertyX = this.config.get('propertyX'),
            propertyY = this.config.get('propertyY'),
            ticks = this.config.get('bins'),
            x = this.x.xAxis.scale(),
            y = this.y.yAxis.scale(),
            height = this.config.get('height'),
            width = this.config.get('width');

        let histogramData = data.map((d) => d[propertyX]);

        let bins = histogram()
        .domain(x.domain())
        .thresholds(x.ticks(ticks))
        (histogramData);

        this.y.updateDomainByMinMax(0, max(bins, (d) => d.length));
        this.y.transition();

        this.x.updateDomainByMinMax(min(data, (d) => d[propertyX]), max(data, (d) => d[propertyX] + (bins[0].x1 - bins[0].x0)));
        this.x.transition();

        // JOIN bars
        let bars = this.svg.selectAll('.proteic-bars').selectAll('.' + Globals.SELECTOR_ELEMENT)
        .data(bins);

        // Update bars
        bars
        .transition()
        .duration(Globals.COMPONENT_TRANSITION_TIME)
        .ease(easeLinear)
        .attr('width', x(bins[0].x1) - x(bins[0].x0) - 1)
        .attr('height', (d) => height - y(d.length))
        .attr('y', (d) => y(d.length))
        .attr('x', (d) => x(d.x0));

        // Enter bars
        bars
        .enter().append('rect')
        .attr('class', Globals.SELECTOR_ELEMENT)
        .attr('x', (d) => x(d.x0))
        .attr('y', (d) => y(d.length))
        .attr('width', x(bins[0].x1) - x(bins[0].x0) - 1)
        .attr('height', (d) => height - y(d.length));

        bars.exit().remove();

        bars
            .on('mousedown.user', this.config.get('onDown'))
            .on('mouseup.user', this.config.get('onUp'))
            .on('mouseleave.user', this.config.get('onLeave'))
            .on('mouseover.user', this.config.get('onHover'))
            .on('click.user', this.config.get('onClick'));
    }
}

export default HistogramBarset;