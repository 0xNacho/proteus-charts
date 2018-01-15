import Chart from './Chart';
import SvgStrategySunburst from '../svg/strategies/SvgStrategySunburst';
import { defaults } from '../utils/defaults/sunburst';
import { copy } from '../utils/functions';

class Sunburst extends Chart {

    constructor(data: any, userConfig: any = {}) {
        super(
            SvgStrategySunburst,
            data,
            userConfig,
            defaults
        );
    }

    public keepDrawing(datum: any) {
        let datumType = datum.constructor,
            pause: boolean = this.config.get('pause');

        if (datumType === Array) {
            if (this.data) {
                this.data = this.data.concat(datum);
            } else {
                this.data = datum;
            }
        } else {
            this.data.push(datum);
        }

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

export default Sunburst;
