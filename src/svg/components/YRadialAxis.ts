import Component from './Component';
import {
    scaleSqrt
} from 'd3';

class YRadialAxis extends Component {

    private _yRadialAxis: any;

    constructor() {
        super();
    }

    public render() {
        let width = this.config.get('width'),
            height = this.config.get('height'),
            radius = null;
        radius = (Math.min(width, height) / 2) - 10;
        this._yRadialAxis = scaleSqrt().range([0, radius]);
    };
    
    public update(data: [any]) {};

    get yRadialAxis(): any {
        return this._yRadialAxis;
    }
}

export default YRadialAxis;