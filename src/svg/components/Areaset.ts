import Component from './Component';
import Config from '../../Config';
import XAxis from './XAxis';
import YAxis from './YAxis';
import Globals from '../../Globals';

import {
    area,
    selection,
    nest,
    easeLinear,
    CurveFactory,
    Area
} from 'd3';


class Areaset extends Component {

    private x: XAxis;
    private y: YAxis;
    private areaGenerator: Area<any>;

    constructor(x: XAxis, y: YAxis) {
        super();
        this.x = x;
        this.y = y;
    }

    public render() {
        let height = this.config.get('height'),
            propertyX = this.config.get('propertyX'),
            propertyY = this.config.get('propertyY'),
            curve: CurveFactory = this.config.get('curve');

        this.areaGenerator = area()
            .curve(curve)

            .x((d: any) => this.x.xAxis.scale()(d[propertyX]))
            .y0(height)
            .y1((d: any) => this.y.yAxis.scale()(d[propertyY]));
    }

    public update(data: [any]) {
        let propertyKey = this.config.get('propertyKey');
        let dataSeries = nest().key((d: any) => d[propertyKey]).entries(data);
        let areas = this.svg.selectAll('g.area');
        let colorScale = this.config.get('colorScale');
        let height = this.config.get('height');
        let areaOpacity = this.config.get('areaOpacity');

        areas = areas.data(dataSeries, (d: any) => d[propertyKey])
            .enter()
            .append('g')
            .attr('class', 'area')
            .attr(Globals.COMPONENT_DATA_KEY_ATTRIBUTE, (d: any) => d[propertyKey])
            .append('svg:path')
            .style('fill', (d: any) => colorScale(d[propertyKey]))
            .style('fill-opacity', areaOpacity)
            .attr('d', (d: any) => this.areaGenerator(d.values))
            .attr('class', 'areaPath');

        //update existing paths
        this.svg.selectAll('.areaPath')
            .data(dataSeries, (d: any) => d[propertyKey])
            .transition()
            .duration(Globals.COMPONENT_TRANSITION_TIME)
            .attr('d', (d: any) => this.areaGenerator(d.values));

    }

}

export default Areaset;