import Chart from './Chart';
import SvgStrategyLinechart from '../svg/strategies/SvgStrategyLinechart';
import Config from '../Config';
import { defaults } from '../utils/defaults/linechart';
import { copy } from '../utils/functions';

class Linechart extends Chart {

    constructor(data: any, userConfig: any = {}) {
        super(
            new SvgStrategyLinechart(),
            data,
            userConfig,
            defaults
        );
    }

    public keepDrawing(datum: any) {
        let maxNumberOfElements: number = this.config.get('maxNumberOfElements'),
            numberOfElements = this.data.length,
            position = -1,
            datumType = datum.constructor;

        if (datumType === Array) {
            this.data = this.data.concat(datum);
        }
        else {
            this.data.push(datum);
        }
        //Detect excess of elements given a maxNumberOfElements property
        if (numberOfElements > maxNumberOfElements) {
            let position = numberOfElements - maxNumberOfElements;
            this.data = this.data.slice(position);
        }

        this.draw(copy(this.data));
    }

}

export default Linechart;