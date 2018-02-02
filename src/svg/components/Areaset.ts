import Component from './Component';
import XAxis from './XAxis';
import YAxis from './YAxis';
import Globals from '../../Globals';
import { area, nest, CurveFactory, Area } from 'd3';


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
        let series = this.svg.selectAll(`.${Globals.SELECTOR_ELEMENT}`);
        let colorScale = this.config.get('colorScale');
        let height = this.config.get('height');
        let areaOpacity = this.config.get('areaOpacity');

        let areas = series.data(dataSeries, (d: any) => d[propertyKey]);

        this.elementEnter = areas.enter()
            .append('g')
            .attr('class', Globals.SELECTOR_ELEMENT)
            .attr(Globals.COMPONENT_DATA_KEY_ATTRIBUTE, (d: any) => d[propertyKey])
            .attr('clip-path', 'url(#' + this.config.get('proteicID') + '_brush)')
            .append('svg:path')
            .attr('data-proteic-element', 'area')
            .attr('class', 'areas')
            .style('fill', (d: any) => colorScale(d[propertyKey]))
            .style('fill-opacity', areaOpacity)
            .attr('d', (d: any) => this.areaGenerator(d.values));

        this.elementExit = areas.exit().remove();

        this.elementUpdate = this.svg.selectAll('.areas')
            .data(dataSeries, (d: any) => d.key);
    }

    public transition() {
        this.elementUpdate
            .attr('d', (d: any) => this.areaGenerator(d.values))
            .transition()
            .duration(Globals.COMPONENT_TRANSITION_TIME);

        this.elementEnter
            .transition()
            .duration(Globals.COMPONENT_TRANSITION_TIME);

        this.elementExit
            .transition()
            .duration(Globals.COMPONENT_TRANSITION_TIME);
    }

    public clear() {
        this.svg.selectAll(`*[data-proteic-element='area']`).remove();
    }

}

export default Areaset;
