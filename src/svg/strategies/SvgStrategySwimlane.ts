import XYAxes from '../components/XYAxes';
import Legend from '../components/Legend';
import TimeBoxset from '../components/Timeboxset';
import Spinner from '../components/Spinner';
import PauseSet from '../components/PauseSet';

import Config from '../../Config';
import SvgStrategy from '../base/SvgStrategy';
import { sortByField } from '../../utils/data/sorting';
import { convertPropretiesToTimeFormat } from '../../utils/data/transforming';
import ColorLegend from '../components/ColorLegend';

class SvgStrategySwimlane extends SvgStrategy {
    /**
     *
     * XY Axes. Horizontal and vertical references
     *
     * @private
     * @type {XYAxes}
     * @memberOf SvgStrategySwimlane
     */
    private axes: XYAxes;

    private boxes: TimeBoxset;

    private spinner: Spinner;

    private pauseButton: PauseSet;

    constructor() {
        super();
        this.axes = new XYAxes();
        this.boxes = new TimeBoxset(this.axes);
    }

    public draw(data: [{}]) {
        let xAxisFormat = this.config.get('xAxisFormat'),
            propertyStart = this.config.get('propertyStart'),
            propertyEnd = this.config.get('propertyEnd'),
            xAxisType = this.config.get('xAxisType');

        if (xAxisType === 'time') {
            convertPropretiesToTimeFormat(data, [propertyStart, propertyEnd], xAxisFormat);
        }

        sortByField(data, propertyStart);

        this.container.updateComponents(data);
    }


    public initialize(): void {
        super.initialize();
        let legend = this.config.get('legend'),
            colorScaleType = this.config.get('colorScaleType'),
            spinner = this.config.get('spinner'),
            pauseButton = this.config.get('pauseButton');

        this.container.add(this.axes).add(this.boxes);

        if (legend) {
            switch (colorScaleType) {
                case 'categorical':
                    this.container.add(new Legend());
                    break;
                case 'sequential':
                    this.container.add(new ColorLegend());
                    break;
            }

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

export default SvgStrategySwimlane;
