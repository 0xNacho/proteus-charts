import Component from './Component';
import Config from '../../Config';
import XAxis from './XAxis';
import YAxis from './YAxis';
import { simple2nested, simple2stacked } from '../../utils/dataTransformation';
import Globals from '../../Globals';
import {
    stack,
    scaleBand,
    map,
    area,
    selection,
    nest
} from 'd3';


class Barset extends Component {

    private x: XAxis;
    private y: YAxis;

    constructor(x: XAxis, y: YAxis) {
        super();
        this.x = x;
        this.y = y;
    }

    public render() {
        //Do nothing, since points render only when new data is received.

    }

    public update(data: [any]) {
        let bars: any = null,
            stacked = this.config.get('stacked');

        this.clean();

        if (stacked) {
            this.updateStacked(data);
        } else {
            this.updateGrouped(data);
        }
        bars = this.svg.selectAll('g.barSeries rect');
        bars
            .on('mousedown.user', this.config.get('onDown'))
            .on('mouseup.user', this.config.get('onUp'))
            .on('mouseleave.user', this.config.get('onLeave'))
            .on('mouseover.user', this.config.get('onHover'))
            .on('click.user', this.config.get('onClick'));
    }

    private updateStacked(data: [any]) {
        let propertyKey = this.config.get('propertyKey');
        let keys: any = map(data, (d) => d[propertyKey]).keys();
        let stack = this.config.get('stack');
        data = stack.keys(keys)(simple2stacked(data));

        let colorScale = this.config.get('colorScale'),
            layer = this.svg.selectAll('.barSeries').data(data),
            layerEnter = layer.enter().append('g'),
            x = this.x.xAxis.scale(),
            y = this.y.yAxis.scale();

        layer.merge(layerEnter)
            .attr('class', 'barSeries')
            .attr(Globals.COMPONENT_DATA_KEY_ATTRIBUTE, (d: any) => d[propertyKey])
            .style('fill', (d: any, i: number) => d[propertyKey] !== undefined ? colorScale(d[propertyKey]) : colorScale(i))
            .selectAll('rect')
            .data((d: any) => d)
            .enter().append('rect')
            .attr("x", (d: any) => x(d.data[propertyKey]))
            .attr("y", (d: any) => y(d[1]))
            .attr("height", (d: any) => y(d[0]) - y(d[1]))
            .attr("width", x.bandwidth());
    }

    private updateGrouped(data: [any]) {
        let propertyKey = this.config.get('propertyKey');
        let propertyX = this.config.get('propertyX');
        let propertyY = this.config.get('propertyY');

        let keys = map(data, (d) => d[propertyKey]).keys(),
            colorScale = this.config.get('colorScale'),
            layer: any = null,
            x = this.x.xAxis.scale(),
            y = this.y.yAxis.scale(),
            xGroup = scaleBand().domain(keys).range([0, x.bandwidth()]),
            height = this.config.get('height');

        data = simple2nested(data, 'key');

        layer = this.svg.selectAll('g.barSeries')
            .data(data, (d: any) => d.values);

        layer.enter()
            .append('g')
            .attr('class', 'barSeries')
            .attr(Globals.COMPONENT_DATA_KEY_ATTRIBUTE, (d: any) => d[propertyKey])
            .selectAll('rect')
            .data((d: any) => d.values)
            .enter()
            .append('rect')
            .attr('transform', (d: any) => 'translate(' + x(d[propertyX]) + ')')
            .attr('width', xGroup.bandwidth())
            .attr("x", (d: any) => xGroup(d[propertyKey]))
            .attr("y", (d: any) => y(d[propertyY]))
            .attr("height", (d: any) => height - y(d[propertyY]))
            .style('fill', (d: any, i: number) => d[propertyKey] !== undefined ? colorScale(d[propertyKey]) : colorScale(i));
    }

}

export default Barset;