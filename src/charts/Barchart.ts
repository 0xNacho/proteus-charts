import Chart from "./Chart";
import SvgStrategyBarchart from "../svg/strategies/SvgStrategyBarchart";
import {defaults} from "../utils/defaults/barchart";
import {copy, isValuesInObjectKeys} from "../utils/functions";

class Barchart extends Chart {

    constructor(data: any, userConfig: any = {}) {
        super(
            SvgStrategyBarchart,
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
}

export default Barchart;