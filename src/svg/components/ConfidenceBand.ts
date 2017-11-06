import Component from './Component';
import XAxis from './XAxis';
import YAxis from './YAxis';
import Globals from '../../Globals';
import {
    map,
    select,
    area,
    nest,
    CurveFactory,
    Area,
    easeLinear
} from 'd3';


class ConfidenceBand extends Component {

    private x: XAxis;
    private y: YAxis;
    private yExtent: [number, number];
    private areaGenerator: Area<any>;

    /**
    * An array of all configuration of confidence band
    * It is gathered from 'confidenceBand' type parameter of statistics component
    * @private
    * @type {Array<ConfidenceBandConfig>}
    * @memberof confidenceBand
    */
    private confidenceBandConfig: Array<ConfidenceBandConfig> = [];

    constructor(x: XAxis, y: YAxis, config: any) {
        super();
        this.x = x;
        this.y = y;
        for (let i = 0; i < config.length; i++) {
            this.confidenceBandConfig.push(new ConfidenceBandConfig(config[i]));
        }
    }

    public render() {
        this.svg.select('g.statistics')
                .append('g')
                .attr('class', 'confidenceSet');
    }

    public update(data: [any]) {
        let propertyKey = this.config.get('propertyKey'),
            colorScale = this.config.get('colorScale'),
            confidenceBandOpacity = this.config.get('confidenceBandOpacity');

        let dataSeries = nest().key((d: any) => d[propertyKey]).entries(data),
            series = this.svg.select('g.confidenceSet').selectAll('.confidenceSeries'),
            confidenceBandEntries = series.data(dataSeries, (d: any) => d[propertyKey]);

        let thisInstance = this;

        this.elementEnter = confidenceBandEntries.enter()
            .append('g')
            .attr('class', 'confidenceSeries')
            .attr(Globals.COMPONENT_DATA_KEY_ATTRIBUTE, (d: any) => d[propertyKey])
            .attr('clip-path', 'url(#' + this.config.get('proteicID') + '_brush)')                        
            .each(function(bindingData: any) {
                // mapping all of confidence band configure to each data and draw it
                thisInstance.confidenceBandConfig.map((config) => {
                    if (config.variable == bindingData[propertyKey]) {
                        select(this)
                            .append('svg:path')
                            .attr('class', 'confidence')
                            .style('fill', (d: any) => colorScale(d[propertyKey]))
                            .style('fill-opacity', confidenceBandOpacity)
                            .attr('d', (d: any) => thisInstance.path(d));
                    }
                });
            });

        this.elementExit = confidenceBandEntries.exit().remove();

        this.elementUpdate = this.svg.selectAll('.confidence')
            .data(dataSeries, (d: any) => d[propertyKey]);

        this.y.updateDomainByMinMax(this.yExtent[0], this.yExtent[1]);
    }

    private path(data: any) {
        let propertyKey = this.config.get('propertyKey'),
            propertyX = this.config.get('propertyX'),
            propertyY = this.config.get('propertyY'),
            curve: CurveFactory = this.config.get('curve');

        let confidenceConfig = this.confidenceBandConfig.filter((config) => config.variable == data[propertyKey])[0];

        let confidenceModifier: Function = confidenceConfig.modifier,
            confidence = confidenceConfig.confidence;

        let min = this.y.extent[0],
            max = this.y.extent[1];

        data.values.map((d: any) => {
            if (d[propertyY] - confidenceModifier(d[confidence]) < min) {
                min = d[propertyY] - confidenceModifier(d[confidence]);
            }
            if (d[propertyY] + confidenceModifier(d[confidence]) > max) {
                max = d[propertyY] + confidenceModifier(d[confidence]);
            }
        })
        this.yExtent = [min, max];

        this.areaGenerator = area()
            .curve(curve)
            .x((d: any) => this.x.xAxis.scale()(d[propertyX]))
            .y0((d: any) => this.y.yAxis.scale()(d[propertyY] - confidenceModifier(d[confidence])))
            .y1((d: any) => this.y.yAxis.scale()(d[propertyY] + confidenceModifier(d[confidence])));

        return this.areaGenerator(data.values);
    }

    public transition() {
        let propertyKey = this.config.get('propertyKey'),
            thisInstance = this;
        
        this.elementUpdate
            .each(function(bindingData: any) {
                thisInstance.confidenceBandConfig.map((config: any) => {
                    if (config.variable == bindingData[propertyKey]) {
                        select(this)
                            .attr('d', (d: any) => thisInstance.path(d));
                    }
                });
            })
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
        this.svg.selectAll(`*[data-proteic-element='confidence']`).remove();
    }

}

/**
 * Type class of Confidence band configuration
 * @class ConfidenceBandConfig
 */
class ConfidenceBandConfig {
    variable: string;
    confidence: string | number;
    modifier: Function;

    /**
     * Class constructor.
     * @param {config} each 'confidenceBand' type parameter of statistics component
     */
    constructor(config: any) {
        this.variable = config.variable;
        this.confidence = config.confidence;

        if ('modifier' in config) { // optional config
            this.modifier = config.modifier;
        } else {
            this.modifier = (confidence: number) => confidence;
        }
    }
}

export default ConfidenceBand;
