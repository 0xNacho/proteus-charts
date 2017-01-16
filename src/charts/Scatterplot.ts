import Chart from './Chart';
import SvgStrategyScatterplot from '../svg/strategies/SvgStrategyScatterplot';
import Config from '../Config';
import { defaults } from '../utils/defaults/scatterplot';
import { copy } from '../utils/functions';


class Scatterplot extends Chart {

    constructor(data: any, userConfig: any = {}) {
        super(
            new SvgStrategyScatterplot(),
            data,
            userConfig,
            defaults
        );
    }


    public keepDrawing(datum: any) {
        var datumType = datum.constructor;

        if (datumType === Array) {
            if (this.data) {
                this.data = this.data.concat(datum);
            } else {
                this.data = datum;
            }
        }
        else {
            this.data.push(datum);
        }
        this.draw(copy(this.data));
    }



}

export default Scatterplot;