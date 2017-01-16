import {deg2rad} from '../../utils/functions';
import Component from './Component';

import {
    scaleLinear,
    arc as d3arc,
    range as d3range
} from 'd3';

class DialNeedle extends Component {

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
            needleNutRadius = this.config.get('needleNutRadius'),
            needleLenghtRatio = this.config.get('needleLenghtRatio'),
            scale = scaleLinear()
                .domain([minLevel, maxLevel])
                .range([0, 1]),
            scaleMarkers = scale.ticks(ticks),

            range = maxAngle - minAngle,
            r = ((width > height) ?
                height : width
            ) / 2,
            needleLen = needleLenghtRatio * (r),

            translation = (() => 'translate(' + r + ',' + r + ')'),
            tickData = d3range(ticks).map(() => 1 / ticks),
            arc = d3arc()
                .innerRadius(r - ringWidth - ringMargin)
                .outerRadius(r - ringMargin)
                .startAngle((d, i) => deg2rad(minAngle + ((d * i) * range)))
                .endAngle((d, i) => deg2rad(minAngle + ((d * (i + 1)) * range))),

            angleScale = scaleLinear()
                .domain([minLevel, maxLevel])
                .range([90 + minAngle, 90 + maxAngle]);

        // Update the needle
        this.svg.append('path')
            .attr('class', 'needle')
            .datum(0)
            .attr('transform', (d) => `translate(${r}, ${r}) rotate(${angleScale(d) - 90})`)
            .attr('d', `M ${0 - needleNutRadius} ${0} L ${0} ${0 - needleLen} L ${needleNutRadius} ${0}`)
            .style('fill', '#666666');

        // Append needle nut
        this.svg.append('circle')
            .attr('class', 'needle')
            .attr('transform', translation)
            .attr('cx', 0)
            .attr('cy', 0)
            .attr('r', needleNutRadius)
            .style('fill', '#666666');
    }

    public update(data: [any]) {
        let datum = data[data.length - 1],
            width = this.config.get('width'),
            height = this.config.get('height'),
            needleNutRadius = this.config.get('needleNutRadius'),
            needleLenghtRatio = this.config.get('needleLenghtRatio'),
            propertyValue = this.config.get('propertyValue'),
            minAngle = this.config.get('minAngle'),
            maxAngle = this.config.get('maxAngle'),
            minLevel = this.config.get('minLevel'),
            maxLevel = this.config.get('maxLevel'),
            r = ((width > height) ?
                height : width
            ) / 2,
            needleLen = needleLenghtRatio * (r),
            angleScale = scaleLinear()
                .domain([minLevel, maxLevel])
                .range([90 + minAngle, 90 + maxAngle]);

        this.svg.select('.needle')
            .transition()
            .attr('transform', (d) => `translate(${r}, ${r}) rotate(${angleScale(datum[propertyValue]) - 90})`)
            .attr('d', `M ${0 - needleNutRadius} ${0} L ${0} ${0 - needleLen} L ${needleNutRadius} ${0}`);
    }

}

export default DialNeedle;