import Chart from './Chart';
import SvgStrategyNetwork from '../svg/strategies/SvgStrategyNetwork';
import Config from '../Config';
import { defaults } from '../utils/defaults/network';
import { copy } from '../utils/functions';


class Network extends Chart {

    constructor(data: any, userConfig: any = {}) {
        super(
            new SvgStrategyNetwork(),
            data,
            userConfig,
            defaults
        );
    }


    public keepDrawing(datum: any) {
        var datumType = datum.constructor;

        if (datumType === Array) {
            this.data = this.data.concat(datum);
        }
        else {
            this.data.push(datum);
        }
        this.draw(copy(this.data));
    }

}

export default Network;