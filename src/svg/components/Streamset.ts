
import Component from './Component';
import XYAxes from './XYAxes';
import Config from '../../Config';
import { simple2stacked } from '../../utils/dataTransformation';
import Globals from '../../Globals';
import {
    area,
    curveCardinal,
    nest,
    map,
    stackOrderInsideOut,
    stackOffsetWiggle,
    stack as d3Stack
} from 'd3';

class Streamset extends Component {

    private xyAxes: XYAxes;
    private areaGenerator: any;

    constructor(xyAxes: XYAxes) {
        super();
        this.xyAxes = xyAxes;
        this.areaGenerator = area()
            .curve(curveCardinal)
            .y0((d) => this.xyAxes.y.yAxis.scale()(d[0]))
            .y1((d) => this.xyAxes.y.yAxis.scale()(d[1]));
    }


    public render(): void {
        //Do nothing, since lines render only when new data is received.
    }

    public update(data: [any]): void {
        let propertyKey = this.config.get('propertyKey');
        let propertyX = this.config.get('propertyX');
        let propertyY = this.config.get('propertyY');

        this.clean();
        let colorScale = this.config.get('colorScale'),
            onDown = this.config.get('onDown'),
            onUp = this.config.get('onUp'),
            onLeave = this.config.get('onLeave'),
            onHover = this.config.get('onHover'),
            onClick = this.config.get('onClick'),
            keys = map(data, (d) => d[propertyKey]).keys(),
            data4stack = simple2stacked(data),
            stack = this.config.get('stack'),
            dataSeries = stack(data4stack),
            series: any = null;
            
        this.areaGenerator.x((d: any) => this.xyAxes.x.xAxis.scale()((new Date(d.data[propertyKey]))));

        series = this.svg.selectAll('.serie')
            .data(dataSeries)
            .enter()
            .append('g')
            .attr('class', 'serie')
            .style('stroke', (d: any, i: number) => colorScale(d[propertyKey]))
            .attr(Globals.COMPONENT_DATA_KEY_ATTRIBUTE, (d: any) => d[propertyKey]);

        series
            .append('path')
            .attr('class', 'layer')
            .attr('d', this.areaGenerator)
            .style('fill', (d: any, i: number) => colorScale(d[propertyKey]));

        series.exit().remove();

        series
            .attr('opacity', 1)
            .on('mousedown.user', onDown)
            .on('mouseup.user', onUp)
            .on('mouseleave.user', onLeave)
            .on('mouseover.user', onHover)
            .on('click.user', onClick);
    }

}

export default Streamset;