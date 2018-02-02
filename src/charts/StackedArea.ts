import Chart from './Chart';
import SvgStrategyStreamgraph from '../svg/strategies/SvgStrategyStreamgraph';
import { defaults } from '../utils/defaults/stackedArea';
import { copy, isValuesInObjectKeys } from '../utils/functions';

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

export default StackedArea;
