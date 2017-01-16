import Chart from './Chart';
import SvgStrategyStreamgraph from '../svg/strategies/SvgStrategyStreamgraph';
import Config from '../Config';
import { defaults } from '../utils/defaults/stackedArea';
import { copy } from '../utils/functions';
import {
    stackOrderInsideOut,
    stackOffsetNone,
    stack as d3Stack
} from 'd3';

class StackedArea extends Chart {

    constructor(data: any, userConfig: any = {}) {
        super(
            new SvgStrategyStreamgraph(), //It uses the same strategy than streamgraph. The only difference is the stack.
            data,
            userConfig,
            defaults
        );
    }

    public keepDrawing(datum: any) {
        var datumType = datum.constructor;

        if (datumType === Array) {
            this.data = this.data.concat(datum);
        }
        else {
            this.data.push(datum);
        }
        this.draw(copy(this.data));
    }


}

export default StackedArea;