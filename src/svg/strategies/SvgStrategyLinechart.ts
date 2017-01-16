import XYAxes from '../components/XYAxes';
import Lineset from '../components/Lineset';
import Pointset from '../components/Pointset';
import Areaset from '../components/Areaset';
import Legend from '../components/Legend';

import Config from '../../Config';
import SvgChart from '../base/SvgChart';
import { sortByField } from '../../utils/dataSorting';
import { convertByXYFormat } from '../../utils/dataTransformation';

class SvgStrategyLinechart extends SvgChart {
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


    private markers : Pointset;

    private area : Areaset;

    private legend : Legend;


    constructor() {
        super();
        this.axes = new XYAxes();
        this.lines = new Lineset(this.axes.x, this.axes.y);
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
        let markerSize = this.config.get('markerSize'),
            areaOpacity = this.config.get('areaOpacity'),
            legend = this.config.get('legend');

        this.container.add(this.axes).add(this.lines);

        if (areaOpacity > 0) {
            this.area = new Areaset(this.axes.x, this.axes.y);
            this.container.add(this.area);
        }

        if (markerSize > 0) {
            this.markers = new Pointset(this.axes.x, this.axes.y);
            this.container.add(this.markers);
        }

        if(legend){
            this.legend = new Legend();
            this.container.add(this.legend);
        }
    }
}

export default SvgStrategyLinechart;