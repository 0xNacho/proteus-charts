import Chart from "./Chart";
import SvgStrategyLinechart from "../svg/strategies/SvgStrategyLinechart";
import {defaults} from "../utils/defaults/linechart";
import {copy, isValuesInObjectKeys} from "../utils/functions";

class Linechart extends Chart {

    constructor(data: any, userConfig: any = {}) {
        super(
            SvgStrategyLinechart,
            data,
            userConfig,
            defaults
        );
    }
}

export default Linechart;