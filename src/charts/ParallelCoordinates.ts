import Chart from './Chart';
import SvgStrategyParallelCoordinates from '../svg/strategies/SvgStrategyParallelCoordinates';
import { defaults } from '../utils/defaults/parallelCoordinates';

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

        this.streamDrawing();

        if (pause) {
            this.pauseDrawing();
        } else {
            this.resumeDrawing();
        }
    }

}

export default ParallelCoordinates;
