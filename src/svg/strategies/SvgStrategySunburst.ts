import SvgStrategy from "../base/SvgStrategy";
import RadialAxes from "../components/RadialAxes";
import SunburstDisk from "../components/SunburstDisk";
import TextIndicator from "../components/TextIndicator";

class SvgStrategySunburst extends SvgStrategy {

    private axes: RadialAxes;
    private disk: SunburstDisk;
    private textIndicator: TextIndicator;

    constructor() {
        super();
        this.axes = new RadialAxes();
        this.disk = new SunburstDisk(
            this.axes.x, this.axes.y
        );
        this.textIndicator = new TextIndicator();
    }

    public draw(data: [{}]) {
        this.container.translate(
            this.config.get('width') / 2,
            this.config.get('height') / 2
        );
        this.container.updateComponents(data);
    }

    public initialize(): void {
        super.initialize();
        this.container
            .add(this.axes)
            .add(this.disk)
            .add(this.textIndicator);
    }

}

export default SvgStrategySunburst;
