import Config from '../../Config';
import Component from './Component';
import Assets from '../../utils/assets';

class ErrorSet extends Component {
    constructor() {
        super();
    }

    public render(): void {
        let width: number = this.config.get('width'),
            height: number = this.config.get('height'),
            marginLeft: number = this.config.get('marginLeft'),
            errorImagePosition: number[] = this.config.get('errorImagePosition');

        this.svg.select('.spinner').style('opacity', 0);

        this.svg.append('g')
                .attr('class', 'warning')
                .style('opacity', 1)
                .html(Assets.WARNING);

        this.svg.select('.svg-warning')
                .attr('width', 200)
                .attr('height', 200)
                .attr('x', width / 2 - 100)
                .attr('y', height / 2 - 100);

        if (errorImagePosition) {
            this.translate(errorImagePosition[0], errorImagePosition[1]);
        }
    }

    public update(data: [{}]) {
        if (typeof data !== undefined && data.length != 0) {
            this.svg.select('.warning').style('opacity', 0);
        }
    }

    public transition() {}

    public clear() {}

    translate(x: number, y: number) {
        this.svg.select('.svg-warning')
            .attr('x', x)
            .attr('y', y);
    }
}

export default ErrorSet;
