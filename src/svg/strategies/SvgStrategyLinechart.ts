import XYAxes from '../components/XYAxes';
import Lineset from '../components/Lineset';
import Pointset from '../components/Pointset';
import Areaset from '../components/Areaset';
import Legend from '../components/Legend';
import Spinner from '../components/Spinner';
import Annotations from '../components/Annotations';
import Alerts from '../components/Alerts';
import Brush from '../components/Brush';
import ClipPath from '../components/ClipPath';
import PauseSet from '../components/PauseSet';
import Config from '../../Config';
import SvgStrategy from '../base/SvgStrategy';
import { sortByField } from '../../utils/data/sorting';
import { convertByXYFormat } from '../../utils/data/transforming';

class SvgStrategyLinechart extends SvgStrategy {
    /**
     *
     * XY Axes. Horizontal and vertical references
     *
     * @private
     * @type {XYAxes}
     * @memberOf SvgStrategyLinechart
     */
    private axes: XYAxes;

    /**
     *
     * Set of lines. The numbers of lines depends on data. Every draw() call lines are automatically updated.
     * @private
     * @type {Lineset}
     * @memberOf SvgStrategyLinechart

     */
    private lines: Lineset;
    private markers: Pointset;
    private area: Areaset;
    private legend: Legend;
    private spinner: Spinner;
    private annotations: Annotations;
    private alerts: Alerts;
    private pauseButton: PauseSet;

    constructor() {
        super();
        this.axes = new XYAxes();
        this.lines = new Lineset(this.axes.x, this.axes.y);
        this.alerts = new Alerts(this.axes.x, this.axes.y);
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
        let markerSize = this.config.get('markerSize'),
            areaOpacity = this.config.get('areaOpacity'),
            legend = this.config.get('legend'),
            width = this.config.get('width'),
            height = this.config.get('height'),
            spinner = this.config.get('spinner'),
            pauseButton = this.config.get('pauseButton'),
            brush = this.config.get('brush');

        this.container
            .add(this.axes)
            .add(this.lines)
            .add(this.alerts);

        if (areaOpacity > 0) {
            this.area = new Areaset(this.axes.x, this.axes.y);
            this.container.add(this.area);

        }

        if (markerSize > 0) {
            this.markers = new Pointset(this.axes.x, this.axes.y);
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

export default SvgStrategyLinechart;
