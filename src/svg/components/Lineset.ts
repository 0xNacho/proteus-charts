
import Component from './Component';
import XAxis from './XAxis';
import YAxis from './YAxis';
import Config from '../../Config';
import Globals from '../../Globals';


import {
    line,
    nest,
    easeLinear,
    CurveFactory,
    Line
} from 'd3';

class Lineset extends Component {

    private x: XAxis;
    private y: YAxis;
    private lineGenerator: Line<any>;

    constructor(x: XAxis, y: YAxis) {
        super();
        this.x = x;
        this.y = y;
    }


    public render(): void {
        let propertyX = this.config.get('propertyX');
        let propertyY = this.config.get('propertyY');
        let curve: CurveFactory = this.config.get('curve');

        this.lineGenerator = line()
            .curve(curve)
            .x((d) => this.x.xAxis.scale()(d[propertyX]))
            .y((d) => this.y.yAxis.scale()(d[propertyY]));
    }

    public update(data: [any]): void {
        let propertyKey = this.config.get('propertyKey');
        let dataSeries = nest().key((d: any) => d[propertyKey]).entries(data);
        let series = this.svg.selectAll('g.lineSeries');
        let colorScale = this.config.get('colorScale');

        //Update new lines
        let lines = series.data(dataSeries, (d: any) => d[propertyKey])
            .enter()
            .append('g')
            .attr('class', 'lineSeries')
            .attr(Globals.COMPONENT_DATA_KEY_ATTRIBUTE, (d: any) => d[propertyKey])
            .attr('stroke', (d: any) => colorScale(d[propertyKey]))
            .append('svg:path')
            .style('stroke', (d: any) => colorScale(d[propertyKey]))
            .style('stroke-width', 1.9)
            .style('fill', 'none')
            .attr('d', (d: any) => this.lineGenerator(d.values))
            .attr('class', 'line');

        //update existing lines
        this.svg.selectAll('.line')
            .data(dataSeries, (d: any) => d[propertyKey])
            .attr('d', (d: any) => this.lineGenerator(d.values))
            .transition()
            .duration(Globals.COMPONENT_TRANSITION_TIME)
            .ease(easeLinear);
    }

}

export default Lineset;