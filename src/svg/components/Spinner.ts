import Config from '../../Config';
import Component from './Component';
import Assets from '../../utils/assets';

class Spinner extends Component {
    constructor() {
        super();
    }

    public render(): void {
        let width: number = this.config.get('width'),
            height: number = this.config.get('height');

        this.svg.append('g')
                .attr('class', 'spinner')
                .style('opacity', 1)
                .html(Assets.THROBBER);

        this.svg.select('.svg-spinner')
                .attr('width', 200)
                .attr('height', 200)
                .attr('x', width / 2 - 100)
                .attr('y', height / 2 - 100);
    }

    public update(data: [{}]) {
        if (typeof data !== undefined && data.length != 0) { // data arrives
            this.svg.select('.spinner').style('opacity', 0);
        } else {
            if (!parseInt(this.svg.select('.spinner').style('opacity'))) {
                this.svg.select('.spinner').style('opacity', 1);
            }
        }

    }

    public transition() {}

    public clear() {}

    translate(x: number, y: number) {
        this.svg.select('.svg-spinner')
            .attr('x', x)
            .attr('y', y);
    }
}

export default Spinner;
