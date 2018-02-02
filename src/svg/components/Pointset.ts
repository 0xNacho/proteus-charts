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

    public render() {}

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
            colorScale = this.config.get('colorScale');

        let shape = symbol().size(markerSize);

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

        // JOIN series
        // NOTE: d.key instead of d[propertyKey] because dataSeries is d3.Nest
        let series = this.svg.selectAll(`.${Globals.SELECTOR_SERIE}`)
            .data(dataSeries, (d: any) => d.key);

        // EXIT series
        series.exit().remove();

        // ENTER new series
        series = series.enter().append('g')
            .attr('class', Globals.SELECTOR_SERIE)
            .attr(Globals.COMPONENT_DATA_KEY_ATTRIBUTE, (d: any) => d.key)
            .attr('clip-path', 'url(#' + this.config.get('proteicID') + '_brush)')
            .merge(series)
            ;

        // JOIN points
        let points = series.selectAll(`.${Globals.SELECTOR_ELEMENT}`)
            .data((d: any) => d.values, (d: any) => d[propertyX]);

        // UPDATE points
        this.elementUpdate = points.attr('class', Globals.SELECTOR_ELEMENT);


        // ENTER points
        this.elementEnter = points.enter().append('path')
            .attr('data-proteic-element', 'point')
            .attr('class', Globals.SELECTOR_ELEMENT)
            .attr('d', shape)
            .style('stroke', (d: any) => colorScale(d[propertyKey]))
            .style('fill', (d: any) => markerShape !== 'ring'
                ? colorScale(d[propertyKey])
                : 'transparent'
            )
            .attr('transform', (d: any) =>
                `translate(${this.x.xAxis.scale()(d[propertyX])}, ${this.y.yAxis.scale()(d[propertyY])})`);

        // EXIT points
        this.elementExit = points.exit().remove();

        points
            .on('mousedown.user', this.config.get('onDown'))
            .on('mouseup.user', this.config.get('onUp'))
            .on('mouseleave.user', this.config.get('onLeave'))
            .on('mouseover.user', this.config.get('onHover'))
            .on('click.user', this.config.get('onClick'));
    }

    public clear() {
        this.svg.selectAll('*[data-proteic-element="point"]').remove();
    }

    public transition() {
        let propertyX = this.config.get('propertyX');
        let propertyY = this.config.get('propertyY');
        
        this.svg.selectAll(`.${Globals.SELECTOR_ELEMENT}`)
            // TODO: Add transitions again
            // .transition()
            // .duration(Globals.COMPONENT_TRANSITION_TIME)
            // .ease(easeLinear)
            .attr('transform', (d: any) =>
                `translate(${this.x.xAxis.scale()(d[propertyX])}, ${this.y.yAxis.scale()(d[propertyY])})`
            );

        this.elementEnter
            .transition()
            .duration(Globals.COMPONENT_ANIMATION_TIME)
            .attr('fill-opacity', 1)
            .attr('stroke-opacity', 1);
    }

}

export default Pointset;
