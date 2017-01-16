import Component from './Component';
import Config from '../../Config';
import XAxis from './XAxis';
import YAxis from './YAxis';
import { simple2nested, simple2stacked } from '../../utils/dataTransformation';
import Globals from '../../Globals';
import {
    stack,
    scaleBand,
    map,
    area,
    selection,
    nest,
    pie,
    arc
} from 'd3';


class SectorSet extends Component {


    constructor() {
        super();
    }

    public render() {
        //Do nothing, since points render only when new data is received.
    }

    public update(data: [any]) {
        let propertyKey = this.config.get('propertyKey');
        let propertyX = this.config.get('propertyX');
        let width = this.config.get('width');
        let height = this.config.get('height');
        let radius = Math.min(width, height) / 2;

        let colorScale = this.config.get('colorScale');
        
        let myPie = pie().value((d:any) => d[propertyX])(data);
        let myArc = arc().innerRadius(0).outerRadius(radius);
        
        let arcs = this.svg.selectAll("g.slice").data(myPie);
        let newBlock = arcs.enter(); 

        newBlock
        .append("g")
        .attr(Globals.COMPONENT_DATA_KEY_ATTRIBUTE, (d: any) => d.data[propertyKey])
        .append("path")
            .attr('fill', 
                (d: any, i: number) => 
                d.data[propertyKey] !== undefined ? colorScale(d.data[propertyKey]) : colorScale(i))
        .attr("d", myArc);
        
    }
}

export default SectorSet;