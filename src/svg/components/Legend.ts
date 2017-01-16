import Component from './Component';
import Config from '../../Config';
import Globals from '../../Globals';

import {
    selection,
    nest
} from 'd3';


class Legend extends Component {


    constructor() {
        super();
    }

    public render() {
        //Do nothing, since points render only when new data is received.

    }

    public update(data: any) {
        //Exclude those values that do not contain a 'key'.
        let dataSeries = nest()
            .key((d) => d.key)
            .entries(data),
            legend = null,
            entries = null,
            colorScale = this.config.get('colorScale'),
            height = this.config.get('height'),
            width = this.config.get('width');

        if (dataSeries.length === 1 && dataSeries[0].key === 'undefined') {
            console.warn('Not showing legend, since there is a valid key');
            return;
        }

        this.svg.selectAll('g.legend').remove();

        legend = this.svg.append('g').attr('class', 'legend');
        entries = legend.selectAll('.legend-entry')
            .data(dataSeries, (d: any) => d.key)
            .enter()
            .append('g')
            .attr('class', 'legend-entry')
            .attr(Globals.LEGEND_DATA_KEY_ATTRIBUTE, (d: any) => d.key);


        entries.append('rect')
            .attr('x', width + 10)
            .attr('y', (d: any, i: number) => i * 25)
            .attr('height', 20)
            .attr('width', 20)
            .style('fill', (d: any) => colorScale(d.key))
            .style('stroke', (d: any) => colorScale(d.key))
            .style('opacity', 0.8)
            .on('click.default', (d: any) => this.toggle(d));


        entries.append('text')
            .attr("x", width + 25 + 10)
            .attr("y", (d: any, i: number) => i * 25 + 7)
            .attr("dy", "0.55em")
            .text((d: any) => d.key)
            .style('font', '14px Montserrat, sans-serif')
            .on('click.default', () => this.toggle);

    }

    private toggle(d: any): void {
        let key = d.key,
            element = this.svg.selectAll('*[' + Globals.COMPONENT_DATA_KEY_ATTRIBUTE + '="' + key + '"]'),
            colorScale = this.config.get('colorScale');

        if (!element.empty()) {
            let opacity = element.style('opacity');
            opacity = (opacity == 1) ? Globals.COMPONENT_HIDE_OPACITY : 1;
            let legendEntry = this.svg.select('.legend-entry[' + Globals.LEGEND_DATA_KEY_ATTRIBUTE + '="' + key + '"]');
            /// legendEntry
            //   .transition()
            //  .duration(Globals.COMPONENT_HIDE_SHOW_TRANSITION_TIME)
            //  .style('opacity', (opacity === 1) ? 1 : Globals.LEGEND_HIDE_OPACITY);

            legendEntry.selectAll('rect')
                .transition()
                .duration(Globals.COMPONENT_HIDE_SHOW_TRANSITION_TIME)
                .style('fill', (opacity === 1) ? (d: any) => colorScale(d.key) : 'transparent');

            element
                .transition()
                .duration(Globals.COMPONENT_HIDE_SHOW_TRANSITION_TIME)
                .style('opacity', opacity);
        }
    }

}

export default Legend;