import Component from './Component';
import Config from '../../Config';
import XAxis from './XAxis';
import YAxis from './YAxis';
import Globals from '../../Globals';

import {
    selection,
    nest,
    symbol,
    symbolCircle,
    symbolCross,
    symbolDiamond,
    symbolSquare,
    symbolStar,
    symbolTriangle,
    symbolWye,
    easeLinear
} from 'd3';

class Pointset extends Component {

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
        let propertyKey = this.config.get('propertyKey');
        let propertyX = this.config.get('propertyX');
        let propertyY = this.config.get('propertyY');

        let dataSeries = nest()
            .key((d: any) => d[propertyKey])
            .entries(data),
            markers: any = null,
            markerShape = this.config.get('markerShape'),
            markerSize = this.config.get('markerSize'),
            markerOutlineWidth = this.config.get('markerOutlineWidth'),
            colorScale = this.config.get('colorScale'),
            points: any = null,
            series: any = null;

        let shape = symbol().size(markerSize);

        series = this.svg.selectAll('g.points');

        switch (markerShape) {
            case 'dot':
                shape.type(symbolCircle);
                break;
            case 'ring':
                shape.type(symbolCircle);
                break;
            case 'cross':
                shape.type(symbolCross);
                break;
            case 'diamond':
                shape.type(symbolDiamond);
                break;
            case 'square':
                shape.type(symbolSquare);
                break;
            case 'star':
                shape.type(symbolStar);
                break;
            case 'triangle':
                shape.type(symbolTriangle);
                break;
            case 'wye':
                shape.type(symbolWye);
                break;
            case 'circle':
                shape.type(symbolCircle);
                break;
            default:
                shape.type(symbolCircle);
        }

        points = series
            .data(dataSeries, (d: any) => d.values, (d: any) => d[propertyX]); // bind it twice
        points.enter()
            .append('g')
            .attr('class', 'points')
            .attr(Globals.COMPONENT_DATA_KEY_ATTRIBUTE, (d: any) => d[propertyKey])
            .style('stroke', (d: any) => colorScale(d[propertyKey]))
            .selectAll('circle')
            .data((d: any) => d.values)
            .enter()
            .append('path')
            .attr('class', 'marker')
            .attr('d', shape)
            .style('stroke', (d: any) => colorScale(d[propertyKey]))
            .style('fill', (d: any) => markerShape !== 'ring' ? colorScale(d[propertyKey]) : 'transparent')
            //.style('fill-opacity', 0.8)
            .attr('transform', (d: any) => `translate(${this.x.xAxis.scale()(d[propertyX])}, ${this.y.yAxis.scale()(d[propertyY])})`);

        //Update existing markers
        this.svg.selectAll('.marker')
            .transition()
            .duration(Globals.COMPONENT_TRANSITION_TIME)
            .ease(easeLinear)
            .attr('transform', (d: any) => `translate(${this.x.xAxis.scale()(d[propertyX])}, ${this.y.yAxis.scale()(d[propertyY])})`);

        // Remove old markers
        points
            .exit()
            .remove();

        markers = this.svg.selectAll('.marker');
        markers
            .on('mousedown.user', this.config.get('onDown'))
            .on('mouseup.user', this.config.get('onUp'))
            .on('mouseleave.user', this.config.get('onLeave'))
            .on('mouseover.user', this.config.get('onHover'))
            .on('click.user', this.config.get('onClick'));
    }

}

export default Pointset;