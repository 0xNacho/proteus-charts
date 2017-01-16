import Chart from './Chart';
import SvgStrategyBarchart from '../svg/strategies/SvgStrategyBarchart';
import Config from '../Config';
import { defaults } from '../utils/defaults/barchart';
import { copy } from '../utils/functions';

class Barchart extends Chart {

    constructor(data: any, userConfig: any = {}) {
        super(
            new SvgStrategyBarchart(),
            data,
            userConfig,
            defaults
        );
    }

    fire(event: string, data: string) {//TODO: improve this section
        if (event === 'transition') {
            if (data === 'grouped') {
                this.config.put('stacked', false);
            }
            else if (data === 'stacked') {
                this.config.put('stacked', true);
            }
            this.draw();
        }
    }

    public keepDrawing(datum: any) {
        let datumType = datum.constructor;
        if (datumType === Array) {
            this.data = datum;
        }
        else {
            let found = false;
            for (let i = 0; i < this.data.length; i++) {
                var d = this.data[i];
                if (d['x'] === datum['x'] && d['key'] === datum['key']) {
                    this.data[i] = datum;
                    found = true;
                    break;
                }
            }
            if (!found) {
                this.data.push(datum);
            }
        }

        this.draw(copy(this.data));
    }

}

export default Barchart;