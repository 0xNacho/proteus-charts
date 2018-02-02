import XYAxes from '../components/XYAxes';
import Legend from '../components/Legend';
import Streamset from '../components/Streamset';
import Spinner from '../components/Spinner';
import PauseSet from '../components/PauseSet';

import Config from '../../Config';
import SvgStrategy from '../base/SvgStrategy';
import { sortByField } from '../../utils/data/sorting';
import { convertPropretiesToTimeFormat } from '../../utils/data/transforming';

class SvgStrategyStreamgraph extends SvgStrategy {
    /**
     *
     * XY Axes. Horizontal and vertical references
     *
     * @private
     * @type {XYAxes}
     * @memberOf SvgStrategyStreamgraph
     */
    private axes: XYAxes;

    private legend: Legend;

    private streams: Streamset;

    private spinner: Spinner;

    private pauseButton: PauseSet;

    constructor() {
        super();
        this.axes = new XYAxes();
        this.streams = new Streamset(this.axes);
    }

    public draw(data: [{}]) {
        let xAxisFormat = this.config.get('xAxisFormat'),
            xAxisType = this.config.get('xAxisType'),
            yAxisFormat = this.config.get('yAxisFormat'),
            yAxisType = this.config.get('yAxisType'),
            propertyX = this.config.get('propertyX'),
            propertyY = this.config.get('propertyY');

        convertPropretiesToTimeFormat(data, [propertyX], xAxisFormat);

        sortByField(data, propertyX);

        this.container.updateComponents(data);
    }

    public initialize(): void {
        super.initialize();
        let legend = this.config.get('legend'),
            spinner = this.config.get('spinner'),
            pauseButton = this.config.get('pauseButton');

        this.container.add(this.axes).add(this.streams);

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

export default SvgStrategyStreamgraph;
