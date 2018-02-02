import Component from './Component';
import Config from '../../Config';
import XAxis from './XAxis';
import YAxis from './YAxis';
import Globals from '../../Globals';

import {
    selection,
    nest,
    symbol,
    easeLinear,
    brush as d3Brush,
    event as d3Event,
} from 'd3';

class Brush extends Component {
    private x: XAxis;
    private y: YAxis;
    private brushContainer: any = null;
    private brushedCallback: any = null;
    private xDomain: [number] = null;
    private yDomain: [number] = null;

    constructor(x: XAxis, y: YAxis, brushedCallback: any) {
        super();
        this.x = x;
        this.y = y;
        this.brushedCallback = brushedCallback;
    }

    public render() {
        let idleTimeout: any = null,
            idleDelay = 350;

        let zoom = () => {
            this.brushedCallback();
        };

        function idled() {
            idleTimeout = null;
        }

        let brush = d3Brush()
        // The extent of the brush is the plotting area (axes ranges)
        .extent([
            [this.x.range[0], this.y.range[1]],
            [this.x.range[1], this.y.range[0]]
        ])
        ;

        let brushended = () => {
            let s = d3Event.selection;
            
            if (!s) {
                if (!idleTimeout) {
                    idleTimeout = setTimeout(idled, idleDelay);
                    return idleTimeout;
                }
                this.x.scale.domain(this.xDomain);
                this.y.scale.domain(this.yDomain);
            } else {
                this.x.scale.domain([s[0][0], s[1][0]].map(this.x.scale.invert, this.x.xAxis));
                this.y.scale.domain([s[1][1], s[0][1]].map(this.y.scale.invert, this.y.yAxis));
                this.svg.select('.brush').call(brush.move, null);
            }
            zoom();
        };

        brush.on('end', brushended);

        this.brushContainer = this.svg.append('g')
            .attr('class', 'brush')
            .call(brush);
    }

    public update(data: [any]) {
        this.xDomain = this.x.scale.domain();
        this.yDomain = this.y.scale.domain();
    }

    public clear() {}

    public transition() {}

}

export default Brush;
