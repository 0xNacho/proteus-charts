import { legendColor } from 'd3-svg-legend';
import Component from './Component';
import Config from '../../Config';
import Globals from '../../Globals';
import XAxis from './XAxis';
import YAxis from './YAxis';
import { max, min } from "d3-array";

import {
    selection,
    nest
} from 'd3';


class ColorLegend extends Component {

    private x: XAxis;
    private y: YAxis;

    constructor(x?: XAxis, y?: YAxis) {
        super();
        this.x = x;
        this.y = y;
    }

    public render() {
        this.svg.append('g').attr('class', 'legend');
    }

    public update(data: any) {
        let propertyKey: string = this.config.get('propertyKey');
        //Exclude those values that do not contain a 'key'.
        let legend = null,
            entries = null,
            legendTitle = this.config.get('legendTitle'),
            propertyZ = this.config.get('propertyZ'),
            colorScale = this.config.get('colorScale'),
            height = this.config.get('height'),
            width = this.config.get('width');

        if (data.length <= 1) {

            return;
        }

        colorScale.domain([min(data, (d: any) => d[propertyZ]), max(data, (d: any) => d[propertyZ])]);

        let colorLegend = legendColor()
            .title(legendTitle)
            .labelDelimiter('–')
            .scale(colorScale);
        legend = this.svg.select('.legend');
        legend.call(colorLegend); 
        
        legend.attr('transform', `translate(${width + 10}, 0)`);
    }
}

export default ColorLegend;