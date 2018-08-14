import Component from './Component';
import Config from '../../Config';
import Globals from '../../Globals';
import Assets from '../../utils/assets';

import {
    selection,
    select,
    nest,
    mouse
} from 'd3';


class PauseSet extends Component {

    constructor() {
        super();
    }

    public render() {
        let pauseButtonPosition = this.config.get('pauseButtonPosition'),
            height: number = this.config.get('height'),
            width: number = this.config.get('width'),
            selector = this.config.get('selector'),
            pauseButtonTranslate: [number, number] = this.config.get('pauseButtonTranslate');

        let thisInstance = this; // Assign instance to call instance's method in click event

        this.svg.append('g')
            .attr('class', 'pause-button')
            .on('click', function() { thisInstance.toggle(); })
            .style('cursor', 'pointer')
            .html(Assets.PAUSE);

        this.svg.selectAll('.svg-pause')
                .attr('width', 30)
                .attr('height', 30);

        this.svg.select('#play').style('opacity', 0);

        if (pauseButtonTranslate) {
            this.translate(pauseButtonTranslate[0], pauseButtonTranslate[1]);
        } else {
            switch (pauseButtonPosition) {
                case 'right':
                    this.drawRightPauseButton(thisInstance, width, height);
                    break;
                case 'bottom':
                    this.drawBottomPauseButton(thisInstance, width, height);
                    break;
            }
        }

        select(selector)
            .on('mouseover', function() { thisInstance.svg.select('.pause-button').style('opacity', 1); })
            .on('mouseout', function() { thisInstance.svg.select('.pause-button').style('opacity', 0); });

    }

    public update(data: any) {}

    public clear() {}

    public transition() {}

    translate(x: number, y: number) {
        this.svg.selectAll('.svg-pause')
            .attr('x', x)
            .attr('y', y);
    }

    private drawRightPauseButton(thisInstance: any, width: number, height: number) {
        this.svg.selectAll('.svg-pause')
            .attr('x', width + 10)
            .attr('y', height - 30);
    }

    private drawBottomPauseButton(thisInstance: any, width: number, height: number) {
        this.svg.selectAll('.svg-pause')
            .attr('x', -50)
            .attr('y', height + 65);
    }

    private toggle(): void {
        let pause: boolean = (this.svg.select('#play').style('opacity') == '0') ? true : false;

        this.config.put('pause', pause);

        if (pause) {
            this.svg.select('#play').style('opacity', 1);
            this.svg.select('#pause').style('opacity', 0);
        } else {
            this.svg.select('#play').style('opacity', 0);
            this.svg.select('#pause').style('opacity', 1);
            this.config.put('resumed', true);
        }
    }

}

export default PauseSet;
