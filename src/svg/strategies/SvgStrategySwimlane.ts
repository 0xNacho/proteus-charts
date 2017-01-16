import XYAxes from '../components/XYAxes';
import Legend from '../components/Legend';
import TimeBoxset from '../components/Timeboxset';

import Config from '../../Config';
import SvgChart from '../base/SvgChart';
import { sortByField } from '../../utils/dataSorting';
import { convertPropretiesToTimeFormat } from '../../utils/dataTransformation';

class SvgStrategySwimlane extends SvgChart {
    /**
     * 
     * XY Axes. Horizontal and vertical references
     * 
     * @private
     * @type {XYAxes}
     * @memberOf SvgStrategySwimlane
     */
    private axes: XYAxes;

    private legend: Legend;


    private boxes: TimeBoxset;

    constructor() {
        super();
        this.axes = new XYAxes();
        this.boxes = new TimeBoxset(this.axes);
    }

    public draw(data: [{}]) {
        let xAxisFormat = this.config.get('xAxisFormat');
        convertPropretiesToTimeFormat(data, ['start', 'end'], xAxisFormat);       
        
        sortByField(data, 'start');
        
        this.container.updateComponents(data);
    }


    public initialize(): void {
        super.initialize();
        let markerSize = this.config.get('markerSize'),
            areaOpacity = this.config.get('areaOpacity'),
            legend = this.config.get('legend');

        this.container.add(this.axes);

        if (legend) {
            this.legend = new Legend();
            this.container.add(this.legend).add(this.boxes);
        }
    }
}

export default SvgStrategySwimlane;