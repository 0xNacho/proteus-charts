import Chart from './Chart';
import SvgStrategySwimlane from '../svg/strategies/SvgStrategySwimlane';
import Config from '../Config';
import { defaults } from '../utils/defaults/swimlane';
import { calculateWidth } from '../utils/screen';
import {
    stackOrderInsideOut,
    stackOffsetWiggle,
    stack as d3Stack
} from 'd3';
import { copy } from '../utils/functions';

class Swimlane extends Chart {

    constructor(data: any, userConfig: any = {}) {
        super(
            new SvgStrategySwimlane(),
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

export default Swimlane;