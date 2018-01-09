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

        if (pause) {
            this.pauseDrawing();
        } else {
            if (this.storedData.length > 0) { // resume
                this.resumeDrawing();
            } else {
                this.streamDrawing();
            }
        }

    }
}

export default Gauge;
