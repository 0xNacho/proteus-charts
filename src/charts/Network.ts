import Chart from './Chart';
import SvgStrategyNetwork from '../svg/strategies/SvgStrategyNetwork';
import { defaults } from '../utils/defaults/network';

class Network extends Chart {

    constructor(data: any, userConfig: any = {}) {
        super(
            SvgStrategyNetwork,
            data,
            userConfig,
            defaults
        );
    }

    public keepDrawing(datum: any) {
        let datumType = datum.constructor,
            pause: boolean = this.config.get('pause');

        if (datumType === Array) {
            this.data = this.data.concat(datum);
        } else {
            this.data.push(datum);
        }

        this.streamDrawing();

        if (pause) {
            this.pauseDrawing();
        } else {
            this.resumeDrawing();
        }

    }
}

export default Network;
