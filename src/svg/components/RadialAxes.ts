import Component from "./Component";
import XRadialAxis from './XRadialAxis';
import YRadialAxis from "./YRadialAxis";
import Config from "../../Config";

class RadialAxes extends Component {
    private _x: XRadialAxis;
    private _y: YRadialAxis;

    constructor() {
        super();
        this._x = new XRadialAxis();
        this._y = new YRadialAxis();
    }

    public configure(config: Config, svg: any){
        super.configure(config, svg);
        this._x.configure(config, svg);
        this._y.configure(config, svg);
    }

    public render(): void {
        this._x.render();
        this._y.render();
    }

    public update(data): void {
        this._x.update(data);
        this._y.update(data);
    }


    get x(): XRadialAxis {
        return this._x;
    }

    get y(): YRadialAxis {
        return this._y;
    }
}

export default RadialAxes;
