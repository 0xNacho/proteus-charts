import Chart from './Chart';
import SvgStrategyParallelCoordinates from '../svg/strategies/SvgStrategyParallelCoordinates';
import { defaults } from '../utils/defaults/parallelCoordinates';
import { copy, isValuesInObjectKeys } from '../utils/functions';

class ParallelCoordinates extends Chart {

    constructor(data: any, userConfig: any = {}) {
        super(
            SvgStrategyParallelCoordinates,
            data,
            userConfig,
            defaults
        );
    }

    public keepDrawing(datum: any) {
        let pause: boolean = this.config.get('pause');
        
        if (!Array.isArray(datum)) {
            this.data = [datum];
        } else {
            this.data = datum;
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

export default ParallelCoordinates;
