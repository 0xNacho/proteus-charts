import XYAxes from '../components/XYAxes';
import Barset from '../components/Barset';
import Legend from '../components/Legend';

import Config from '../../Config';
import SvgChart from '../base/SvgChart';
import { sortByField } from '../../utils/dataSorting';
import { convertByXYFormat } from '../../utils/dataTransformation';

class SvgStrategyBarchart extends SvgChart {
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


    constructor() {
        super();
        this.axes = new XYAxes();
        this.bars = new Barset(this.axes.x, this.axes.y);
    }

    public draw(data: [{}]) {
        let xAxisFormat = this.config.get('xAxisFormat'),
            xAxisType = this.config.get('xAxisType'),
            yAxisFormat = this.config.get('yAxisFormat'),
            yAxisType = this.config.get('yAxisType');

        convertByXYFormat(data, xAxisFormat, xAxisType, yAxisFormat, yAxisType);
        sortByField(data, 'x');

        this.container.updateComponents(data);
    }


    public initialize(): void {
        super.initialize();
        let legend = this.config.get('legend');
        this.container.add(this.axes).add(this.bars);

        if (legend) {
            this.legend = new Legend();
            this.container.add(this.legend);
        }
    }
}

export default SvgStrategyBarchart;