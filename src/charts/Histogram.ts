import Chart from "./Chart";
import SvgStrategyHistogram from "../svg/strategies/SvgStrategyHistogram";
import {defaults} from "../utils/defaults/histogram";
import {copy, isValuesInObjectKeys} from "../utils/functions";

class Histogram extends Chart {

    constructor(data: any, userConfig: any = {}) {
        super(
            SvgStrategyHistogram,
            data,
            userConfig,
            defaults
        );
    }
}

export default Histogram;