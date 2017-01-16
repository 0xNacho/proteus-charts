import {deg2rad} from '../../utils/functions';
import Component from './Component';

import {
    scaleLinear,
    arc as d3arc,
    range as d3range
} from 'd3';

class Dial extends Component {

    constructor() {
        super();
    }


    public render() {
        let labels = null,
            invertColorScale = this.config.get('invertColorScale'),
            colorScale = this.config.get('colorScale'),
            width = this.config.get('width'),
            height = this.config.get('height'),
            ringWidth = this.config.get('ringWidth'),
            ringMargin = this.config.get('ringMargin'),
            ticks = this.config.get('ticks'),
            minAngle = this.config.get('minAngle'),
            maxAngle = this.config.get('maxAngle'),
            minLevel = this.config.get('minLevel'),
            maxLevel = this.config.get('maxLevel'),
            labelInset = this.config.get('labelInset'),
            scale = scaleLinear()
                .domain([minLevel, maxLevel])
                .range([0, 1]),
            scaleMarkers = scale.ticks(ticks),

            range = maxAngle - minAngle,
            r = ((width > height) ?
                height : width
            ) / 2,
            translation = (() => 'translate(' + r + ',' + r + ')'),
            tickData = d3range(ticks).map(() => 1 / ticks),
            arc = d3arc()
                .innerRadius(r - ringWidth - ringMargin)
                .outerRadius(r - ringMargin)
                .startAngle((d, i) => deg2rad(minAngle + ((d * i) * range)))
                .endAngle((d, i) => deg2rad(minAngle + ((d * (i + 1)) * range)));
                
         colorScale.domain([0,1]);

        // Append the ring
        let arcs = this.svg.append('g')
            .attr('class', 'arc')
            .attr('transform', translation);

        // Append the ring sectors
        let arcPaths = arcs.selectAll('path')
            .data(tickData)
            .enter().append('path')
            // ID for textPath linking
            .attr('id', (d, i) => 'sector-' + i)
            .attr('d', arc);

        // Fill colors
        arcPaths.attr('fill', (d, i) => colorScale(invertColorScale
            ? (1 - d * i)
            : (d * i))
        );

        // Apend the scale labels
        labels = this.svg.append('g')
            .attr('class', 'labels')
            .attr('transform', translation);

        // // Append scale marker labels
        labels.selectAll('text')
            .data(scaleMarkers)
            .enter().append('text')
            .attr('transform', (d) => {
                let ratio = scale(d);
                let newAngle = minAngle + (ratio * range);
                return 'rotate(' + newAngle + ') translate(0,' + (labelInset - r) + ')';
            })
            .text((d) => d)
            .style('text-anchor', 'middle')
            .style('font', '18px Montserrat, sans-serif');
    }

    public update() {

    }

}

export default Dial;