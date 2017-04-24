import XYAxes from '../components/XYAxes';
import HistogramBarset from '../components/HistogramBarset';
import Legend from '../components/Legend';

import Config from '../../Config';
import SvgStrategy from '../base/SvgStrategy';
import { sortByField } from '../../utils/data/sorting';
import { convertByXYFormat } from '../../utils/data/transforming';

class SvgStrategyHistogram extends SvgStrategy {
    /**
     * 
     * XY Axes. Horizontal and vertical references
     * 
     * @private
     * @type {XYAxes}
     * @memberOf SvgStrategyHistogram
     */
    private axes: XYAxes;

    /**
     * 
     * Set of bars. The numbers of bars depends on data. Every draw() call lines are automatically updated.
     * @private
     * @type {Lineset}
     * @memberOf SvgStrategyHistogram
    
     */
    private bars: HistogramBarset;


    private legend: Legend;


    constructor() {
        super();
        this.axes = new XYAxes();
        this.bars = new HistogramBarset(this.axes.x, this.axes.y);
    }

    public draw(data: [{}]) {
        let xAxisFormat = this.config.get('xAxisFormat'),
            xAxisType = this.config.get('xAxisType'),
            yAxisFormat = this.config.get('yAxisFormat'),
            yAxisType = this.config.get('yAxisType'),
            propertyX = this.config.get('propertyX'),
            propertyY = this.config.get('propertyY');

        this.container.updateComponents(data);
    }


    public initialize(): void {
        super.initialize();
        this.container.add(this.axes).add(this.bars);
    }
}

export default SvgStrategyHistogram;