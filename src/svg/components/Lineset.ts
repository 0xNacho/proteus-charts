
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
    Line,
    Selection,
} from 'd3';

class Lineset extends Component {

    private x: XAxis;
    private y: YAxis;
    private lineGenerator: Line<any>;
    private linesContainer: any;

    constructor(x: XAxis, y: YAxis) {
        super();
        this.x = x;
        this.y = y;
    }


    public render(): void {
        let propertyX = this.config.get('propertyX');
        let propertyY = this.config.get('propertyY');
        let curve: CurveFactory = this.config.get('curve');
        this.linesContainer = this.svg.append('g')
            .attr('class', 'lineSet');

        this.lineGenerator = line()
            .curve(curve)
            .x((d) => this.x.xAxis.scale()(d[propertyX]))
            .y((d) => this.y.yAxis.scale()(d[propertyY]));
    }

    public update(data: any[]): void {
        let propertyKey = this.config.get('propertyKey');
        let dataSeries = nest().key((d: any) => d[propertyKey]).entries(data);
        let series = this.linesContainer.selectAll('g.lineSeries');
        let colorScale = this.config.get('colorScale');

        let lines = series.data(dataSeries, (d: any) => d.key);

        this.elementEnter = lines.enter()
            .append('g')
            .attr('class', 'lineSeries')
            .attr(Globals.COMPONENT_DATA_KEY_ATTRIBUTE, (d: any) => d.key)
            .attr('clip-path', 'url(#' + this.config.get('proteicID') + '_brush)')            
            .attr('stroke', (d: any) => colorScale(d.key))
            .append('svg:path')
            .style('stroke', (d: any) => colorScale(d.key))
            .style('stroke-width', 1.9)
            .style('fill', 'none')
            .attr('d', (d: any) => this.lineGenerator(d.values))
            .attr('class', 'line');

        this.elementExit = lines.exit().remove();

        this.elementUpdate = this.svg.selectAll('.line')
            .data(dataSeries, (d: any) => d.key);
    }


    public transition() {
        this.elementUpdate
            .attr('d', (d: any) => this.lineGenerator(d.values))
            .transition()
            .duration(Globals.COMPONENT_TRANSITION_TIME)
            .ease(easeLinear);

        this.elementEnter
            .transition()
            .duration(Globals.COMPONENT_TRANSITION_TIME);

        this.elementExit
            .transition()
            .duration(Globals.COMPONENT_TRANSITION_TIME);
    }


    public clear() {
        this.update([]);
    }

}

export default Lineset;
