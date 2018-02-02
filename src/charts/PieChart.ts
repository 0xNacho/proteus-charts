import Chart from './Chart';
import SvgStrategyPieChart from '../svg/strategies/SvgStrategyPieChart';
import { defaults } from '../utils/defaults/piechart';
import { copy } from '../utils/functions';

class PieChart extends Chart {

    constructor(data: any, userConfig: any = {}) {
        super(
            SvgStrategyPieChart,
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

export default PieChart;
