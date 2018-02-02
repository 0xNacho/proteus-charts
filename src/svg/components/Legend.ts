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
        this.svg.append('g').attr('class', 'legend');
    }

    public update(data: any) {
        let propertyKey: string = this.config.get('propertyKey');
        let dataSeries = nest()
            .key((d: any) => d[propertyKey]).entries(data),
            legend = null,
            entries = null,
            colorScale = this.config.get('colorScale'),
            height = this.config.get('height'),
            width = this.config.get('width'),
            legendPosition = this.config.get('legendPosition') || 'right';

        if (dataSeries.length === 1 && dataSeries[0].key === 'undefined') {
            console.warn('Not showing legend, since there is a valid key');
            return;
        }

        legend = this.svg.select('.legend');

        entries = legend.selectAll(`.legend-entry`)
            .data(dataSeries, (d: any) => d.key);

        entries.exit().remove();

        let enterEntries = entries.enter().append('g')
            .attr('class', 'legend-entry')
            .attr(Globals.LEGEND_DATA_KEY_ATTRIBUTE, (d: any) => d.key);

        enterEntries.append('rect')
            .attr('class', 'legend-cb')
            .attr('height', 20)
            .attr('width', 20)
            .style('fill', (d: any) => colorScale(d.key))
            .style('stroke', (d: any) => colorScale(d.key))
            .style('opacity', 0.8)
            .style('cursor', 'pointer')
            .on('click.default', (d: any) => this.toggle(d));

        enterEntries.append('text')
            .attr('class', 'legend-txt')
            .attr('dy', '0.55em')
            .text((d: any) => d.key)
            .on('click.default', () => this.toggle);

        enterEntries.merge(entries);

        switch (legendPosition) {
            case 'top':
                this.drawTopLegendCb(legend);
                this.drawTopLegendTxt(legend);
                break;
            case 'right':
                this.drawRightLegendCb(legend, width);
                this.drawRightLegendTxt(legend, width);
                break;
            case 'bottom':
                this.drawBottomLegendCb(legend, height);
                this.drawBottomLegendTxt(legend, height);
                break;
        }

        entries.exit().remove();
    }

    public clear() {
        this.update([]);
    }

    public transition() {}

    private drawTopLegendCb(legend: any) {
        legend.selectAll('.legend-cb')
            .attr('x', (d: any, i: number) => i * 100)
            .attr('y', -20 - 15)
            .on('click.default', (d: any) => this.toggle(d));
    }

    private drawBottomLegendCb(legend: any, height: number) {
        legend.selectAll('.legend-cb')
            .attr('x', (d: any, i: number) => i * 100)
            .attr('y', height + 70)
            .on('click.default', (d: any) => this.toggle(d));
    }

    private drawRightLegendCb(legend: any, width: number) {
        legend.selectAll('.legend-cb')
            .attr('x', width + 10)
            .attr('y', (d: any, i: number) => i * 25)
            .on('click.default', (d: any) => this.toggle(d));
    }

    private drawBottomLegendTxt(legend: any, height: number) {
        legend.selectAll('.legend-txt')
            .attr('x', (d: any, i: number) => i * 100 + 20 + 5)
            .attr('y', height + 70 + 10)
            .on('click.default', () => this.toggle);
    }

    private drawTopLegendTxt(legend: any) {
        legend.selectAll('.legend-txt')
            .attr('x', (d: any, i: number) => i * 100 + 20 + 5)
            .attr('y', -20 - 15 + 10)
            .on('click.default', () => this.toggle);
    }

    private drawRightLegendTxt(legend: any, width: number) {
        legend.selectAll('.legend-txt')
            .attr('x', width + 25 + 10)
            .attr('y', (d: any, i: number) => i * 25 + 7)
            .on('click.default', () => this.toggle);
    }

    private toggle(d: any): void {
        let key: string = d.key,
            element = this.svg.selectAll(`*[${Globals.COMPONENT_DATA_KEY_ATTRIBUTE}='${key}']`),
            colorScale = this.config.get('colorScale');

        if (!element.empty()) {
            let opacity: number = parseInt(element.style('opacity'));
            opacity = (opacity == 1) ? Globals.COMPONENT_HIDE_OPACITY : 1;
            let legendEntry = this.svg.select(`.legend-entry[${Globals.LEGEND_DATA_KEY_ATTRIBUTE}='${key}']`);

            legendEntry.selectAll('rect')
                .style('fill', (field: any): any => (opacity === 1)
                    ? colorScale(field.key)
                    : 'transparent'
                );

            element
                .style('opacity', opacity);
        }
    }

}

export default Legend;
