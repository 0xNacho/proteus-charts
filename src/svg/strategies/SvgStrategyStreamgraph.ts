import XYAxes from '../components/XYAxes';
import Legend from '../components/Legend';
import Streamset from '../components/Streamset';

import Config from '../../Config';
import SvgChart from '../base/SvgChart';
import { sortByField } from '../../utils/dataSorting';
import { convertPropretiesToTimeFormat } from '../../utils/dataTransformation';

class SvgStrategyStreamgraph extends SvgChart {
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


    constructor() {
        super();
        this.axes = new XYAxes();
        this.streams = new Streamset(this.axes);
    }

    public draw(data: [{}]) {
        let xAxisFormat = this.config.get('xAxisFormat'),
            xAxisType = this.config.get('xAxisType'),
            yAxisFormat = this.config.get('yAxisFormat'),
            yAxisType = this.config.get('yAxisType');
            
        convertPropretiesToTimeFormat(data, ['x'], xAxisFormat);     

        sortByField(data, 'x');

        this.container.updateComponents(data);
    }


    public initialize(): void {
        super.initialize();
        let markerSize = this.config.get('markerSize'),
            areaOpacity = this.config.get('areaOpacity'),
            legend = this.config.get('legend');

        this.container.add(this.axes).add(this.streams);

        if (legend) {
            this.legend = new Legend();
            this.container.add(this.legend);
        }
    }
}

export default SvgStrategyStreamgraph;