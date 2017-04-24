import Chart from "./Chart";
import SvgStrategySunburst from "../svg/strategies/SvgStrategySunburst";
import {defaults} from "../utils/defaults/sunburst";
import {copy} from "../utils/functions";

class Sunburst extends Chart {

    constructor(data: any, userConfig: any = {}) {
        super(
            SvgStrategySunburst,
            data,
            userConfig,
            defaults
        );
    }

    protected keepDrawing(datum: any) {
        let datumType = datum.constructor;
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

export default Sunburst;