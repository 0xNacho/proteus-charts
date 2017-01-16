
import Component from './Component';
import XYAxes from './XYAxes';
import Config from '../../Config';
import { simple2nested } from '../../utils/dataTransformation';
import Globals from '../../Globals';

import {
    extent,
    line,
    nest,
    scaleBand,
    scaleLinear,
    map
} from 'd3';

class Timeboxset extends Component {

    private xyAxes: XYAxes;

    constructor(xyAxes: XYAxes) {
        super();
        this.xyAxes = xyAxes;
    }


    public render(): void {
        //Do nothing, since lines render only when new data is received.
    }

    public update(data: [any]): void {
        let propertyKey = this.config.get('propertyKey');
        let propertyStart = this.config.get('propertyStart');
        let propertyEnd = this.config.get('propertyEnd');

        let colorScale = this.config.get('colorScale'),
            height = this.config.get('height'),
            onDown = this.config.get('onDown'),
            onUp = this.config.get('onUp'),
            onLeave = this.config.get('onLeave'),
            onHover = this.config.get('onHover'),
            onClick = this.config.get('onClick'),
            keys = map(data, (d) => d[propertyKey]).keys(),
            layer = this.svg.selectAll('.serie').data(data),
            layerEnter = null,
            layerMerge = null,
            box = null,
            boxEnter = null,
            boxMerge = null,
            extLanes = null,
            yLanes = null,
            yLanesBand = scaleBand().range([0, keys.length + 1]).domain(keys),
            x = this.xyAxes.x.xAxis.scale(),
            y = this.xyAxes.y.yAxis.scale();

        data = simple2nested(data);
        extLanes = extent(data, (d, i) => i);
        yLanes = scaleLinear().domain([extLanes[0], extLanes[1] + 1]).range([0, height]);

        layer = this.svg.selectAll('.serie').data(data);
        layerEnter = layer.enter().append('g');

        layerMerge = layer.merge(layerEnter)
            .attr('class', 'serie')
            .attr(Globals.COMPONENT_DATA_KEY_ATTRIBUTE, (d: any) => d[propertyKey]);


        box = layerMerge.selectAll('rect')
            .data((d: any) => d.values);

        boxEnter = box.enter().append('rect');

        boxMerge = box.merge(boxEnter)
            .attr('width', (d: any) => x(d[propertyEnd]) - x(d[propertyStart]))
            .attr('x', (d: any) => x(d[propertyStart]))
            .attr('y', (d: any) => y(d[propertyKey]))
            .attr('height', () => 0.8 * yLanes(1))
            .style('fill', (d: any) => colorScale(d[propertyKey]));

        box = this.svg.selectAll('g.serie rect');

        box
            .on('mousedown.user', onDown)
            .on('mouseup.user', onUp)
            .on('mouseleave.user', onLeave)
            .on('mouseover.user', onHover)
            .on('click.user', onClick);
    }

}

export default Timeboxset;