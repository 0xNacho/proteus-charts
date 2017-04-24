import Chart from "./Chart";
import SvgStrategyStreamgraph from "../svg/strategies/SvgStrategyStreamgraph";
import {defaults} from "../utils/defaults/streamgraph";
import {copy} from "../utils/functions";

class Streamgraph extends Chart {

    constructor(data: any, userConfig: any = {}) {
        super(
            SvgStrategyStreamgraph,
            data,
            userConfig,
            defaults
        );
    }
}

export default Streamgraph;