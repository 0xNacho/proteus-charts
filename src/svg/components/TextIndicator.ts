import Component from './Component';

class TextIndicator extends Component {

    constructor() {
        super();
    }

    update(data: [any]): void {
        if (typeof data === undefined || data.length == 0) {
            return;
        }
        let datum = data[data.length - 1];

        this.svg.select('.value')
            .text(datum.value);
        this.svg.select('.label')
            .text(datum.label);
    }

    render(): void {
        let indicator = this.svg.append('g')
            .attr('class', 'text-indicator')
            .attr('pointer-events', 'none')
            .style('text-anchor', 'middle')
            .style('alignment-baseline', 'central');

        indicator.append('text')
            .attr('class', 'value')
            .attr('x', 0)
            .attr('y', 0)
            .attr('pointer-events', 'none')
            .text('')
            .style('text-anchor', 'middle');

        indicator.append('text')
            .attr('class', 'label')
            .attr('x', 0)
            .attr('y', 0)
            .attr('pointer-events', 'none')
            .text('')
            .style('transform', 'translate(0, 1.5em')
            .style('text-anchor', 'middle');
    }

    translate(x: Number, y: Number) {
        this.svg
            .select('g.text-indicator')
            .attr('transform', `translate(${x}, ${y})`);
    }

    public clear() {
        console.warn('Not yet implemented');
    }

    public transition() {
        // console.warn('no transition for sunburst disk');
    }

}

export default TextIndicator;
