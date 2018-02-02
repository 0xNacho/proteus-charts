import XYAxes from '../components/XYAxes';
import Barset from '../components/Barset';
import Legend from '../components/Legend';
import Spinner from '../components/Spinner';
import PauseSet from '../components/PauseSet';

import Config from '../../Config';
import SvgStrategy from '../base/SvgStrategy';
import { sortByField } from '../../utils/data/sorting';
import { convertByXYFormat } from '../../utils/data/transforming';

class SvgStrategyBarchart extends SvgStrategy {
    /**
     *
     * XY Axes. Horizontal and vertical references
     *
     * @private
     * @type {XYAxes}
     * @memberOf SvgStrategyBarchart
     */
    private axes: XYAxes;

    /**
     *
     * Set of bars. The numbers of bars depends on data. Every draw() call lines are automatically updated.
     * @private
     * @type {Lineset}
     * @memberOf SvgStrategyBarchart

     */
    private bars: Barset;


    private legend: Legend;

    private spinner: Spinner;

    private pauseButton: PauseSet;

    constructor() {
        super();
        this.axes = new XYAxes();
        this.bars = new Barset(this.axes.x, this.axes.y);
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
            pauseButton = this.config.get('pauseButton');

        this.container.add(this.axes).add(this.bars);

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

    }
}

export default SvgStrategyBarchart;
