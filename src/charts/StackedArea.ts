import Chart from './Chart';
import SvgStrategyStreamgraph from '../svg/strategies/SvgStrategyStreamgraph';
import { defaults } from '../utils/defaults/stackedArea';
import { isValuesInObjectKeys } from '../utils/functions';

class StackedArea extends Chart {

    constructor(data: any, userConfig: any = {}) {
        super(
            SvgStrategyStreamgraph, // It uses the same strategy than streamgraph. The only difference is the stack.
            data,
            userConfig,
            defaults
        );
    }

    public keepDrawing(datum: any) {
        let datumType = datum.constructor,
            nullValues = this.config.get('nullValues'),
            keys = [
                this.config.get('propertyX'),
                this.config.get('propertyY'),
                this.config.get('propertyKey')
            ],
            pause: boolean = this.config.get('pause');

        if (datumType === Array) {
            let filteredDatum = datum.filter(isValuesInObjectKeys(nullValues, keys));
            this.data = this.data.concat(filteredDatum);
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

export default StackedArea;
