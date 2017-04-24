import XYAxes from '../components/XYAxes';
import Pointset from '../components/Pointset';
import Legend from '../components/Legend';

import Config from '../../Config';
import SvgStrategy from '../base/SvgStrategy';
import { sortByField } from '../../utils/data/sorting';
import { convertByXYFormat } from '../../utils/data/transforming';
import CanvasPointset from "../components/CanvasPointset";
import Annotations from "../components/Annotations";

class SvgStrategyScatterplot extends SvgStrategy {
    /**
     * 
     * XY Axes. Horizontal and vertical references
     * 
     * @private
     * @type {XYAxes}
     * @memberOf SvgStrategyScatterplot
     */
    private axes: XYAxes;

    /**
     * 
     * Set of points
     * 
     * @private
     * @type {Pointset}
     * @memberOf SvgStrategyScatterplot
     */
    private markers: Pointset;

    /**
     *
     * Set of points
     *
     * @private
     * @type {CanvasPointset}
     * @memberOf SvgStrategyScatterplot
     */
    private canvasMarkers: CanvasPointset;
    private legend: Legend;
    private annotations: Annotations;

    constructor() {
        super();
        this.axes = new XYAxes();
        this.markers = new Pointset(this.axes.x, this.axes.y);
        this.canvasMarkers = new CanvasPointset(this.axes.x, this.axes.y);
        this.annotations = new Annotations(this.axes.x, this.axes.y);
    }

    public draw(data: [{}]) {
        let xAxisFormat = this.config.get('xAxisFormat'),
            xAxisType = this.config.get('xAxisType'),
            yAxisFormat = this.config.get('yAxisFormat'),
            yAxisType = this.config.get('yAxisType'),
            propertyX = this.config.get('propertyX'),
            propertyY = this.config.get('propertyY');

        convertByXYFormat(data, xAxisFormat, xAxisType, yAxisFormat, yAxisType, propertyX, propertyY);
        sortByField(data, propertyX);

        this.container.updateComponents(data);
    }


    public initialize(): void {
        super.initialize();
        let legend = this.config.get('legend');

        this.container.add(this.axes).add(this.annotations);

        if (this.config.get('canvas')) {
            this.container.add(this.canvasMarkers);
        } else {
            this.container.add(this.markers);
        }

        if (legend) {
            this.legend = new Legend();
            this.container.add(this.legend);
        }
    }
}

export default SvgStrategyScatterplot;