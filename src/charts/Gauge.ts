import Chart from './Chart';
import SvgStrategyGauge from '../svg/strategies/SvgStrategyGauge';
import { defaults } from '../utils/defaults/gauge';

class Gauge extends Chart {

    constructor(data: any, userConfig: any = {}) {
        super(
            SvgStrategyGauge,
            data,
            userConfig,
            defaults
        );
    }

    public keepDrawing(datum: any) {
        let pause: boolean = this.config.get('pause');

        if (!Array.isArray(datum)) {
            datum = [datum];
        }
        this.data = [datum[0]];

        this.streamDrawing();

        if (pause) {
            this.pauseDrawing();
        } else {
            this.resumeDrawing();
        }

    }
}

export default Gauge;
