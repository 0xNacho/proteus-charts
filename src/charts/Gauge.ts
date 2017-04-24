import Chart from "./Chart";
import SvgStrategyGauge from "../svg/strategies/SvgStrategyGauge";
import {defaults} from "../utils/defaults/gauge";

class Gauge extends Chart {

    constructor(data: any, userConfig: any = {}) {
        super(
            SvgStrategyGauge,
            data,
            userConfig,
            defaults
        );
    }

    public keepDrawing(datum: any) {
        this.data = [datum[0]];
        super.draw();
    }
}

export default Gauge;