import Chart from "./Chart";
import SvgStrategySwimlane from "../svg/strategies/SvgStrategySwimlane";
import {defaults} from "../utils/defaults/swimlane";
import {copy} from "../utils/functions";

class Swimlane extends Chart {

    constructor(data: any, userConfig: any = {}) {
        super(
            SvgStrategySwimlane,
            data,
            userConfig,
            defaults
        );
    }
}

export default Swimlane;