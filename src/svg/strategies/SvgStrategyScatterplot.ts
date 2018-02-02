import XYAxes from '../components/XYAxes';
import Pointset from '../components/Pointset';
import Legend from '../components/Legend';
import Spinner from '../components/Spinner';
import PauseSet from '../components/PauseSet';
import Brush from '../components/Brush';
import ClipPath from '../components/ClipPath';
import Config from '../../Config';
import SvgStrategy from '../base/SvgStrategy';
import { sortByField } from '../../utils/data/sorting';
import { convertByXYFormat } from '../../utils/data/transforming';
import CanvasPointset from '../components/CanvasPointset';
import Annotations from '../components/Annotations';

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
    private annotations: any;
    private spinner: Spinner;
    private pauseButton: PauseSet;

    constructor() {
        super();
        this.axes = new XYAxes();
        this.markers = new Pointset(this.axes.x, this.axes.y);
        this.canvasMarkers = new CanvasPointset(this.axes.x, this.axes.y);
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
        let legend = this.config.get('legend'),
        spinner = this.config.get('spinner'),
        pauseButton = this.config.get('pauseButton'),
        width = this.config.get('width'),
        height = this.config.get('height'),
        marginLeft = this.config.get('marginLeft'),
        marginRight = this.config.get('marginRight'),
        brush = this.config.get('brush');

        this.container.add(this.axes);

        if (this.config.get('canvas')) {
            this.container.add(this.canvasMarkers);
        } else {
            this.container.add(this.markers);
        }

        if (legend) {
            this.legend = new Legend();
            this.container.add(this.legend);
        }

        if (spinner) {
            this.spinner = new Spinner();
            this.container.add(this.spinner);
        }

        if (pauseButton) {
            // If its position needs to translate, then configure here @see SvgStrategyGauge
        }

        if (brush) {
            this.container
                .add(new Brush(this.axes.x, this.axes.y, () =>
                    this.container.transitionComponents())
                )
                .add(new ClipPath(width, height, 'brush'));
        }
    }
}

export default SvgStrategyScatterplot;
