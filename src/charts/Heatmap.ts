import Chart from "./Chart";
import {defaults} from "../utils/defaults/heatmap";
import SvgStrategyHeatmap from "../svg/strategies/SvgStrategyHeatmap";
import {copy, isValuesInObjectKeys} from "../utils/functions";

class Heatmap extends Chart {

    constructor(data: any, userConfig: any = {}) {
        super(
            SvgStrategyHeatmap,
            data,
            userConfig,
            defaults
        );
    }
}

export default Heatmap;