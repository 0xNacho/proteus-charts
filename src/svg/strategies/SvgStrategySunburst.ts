import SvgStrategy from '../base/SvgStrategy';
import RadialAxes from '../components/RadialAxes';
import SunburstDisk from '../components/SunburstDisk';
import TextIndicator from '../components/TextIndicator';
import Spinner from '../components/Spinner';
import PauseSet from '../components/PauseSet';

class SvgStrategySunburst extends SvgStrategy {

    private axes: RadialAxes;
    private disk: SunburstDisk;
    private textIndicator: TextIndicator;
    private spinner: Spinner;
    private pauseButton: PauseSet;

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
        let spinner = this.config.get('spinner'),
            pauseButton = this.config.get('pauseButton');

        this.container
            .add(this.axes)
            .add(this.disk)
            .add(this.textIndicator);

        if (spinner) {
            this.spinner = new Spinner();
            this.container.add(this.spinner);
        }

        if (pauseButton) {
            this.config.put('pauseButtonTranslate', [-10, this.config.get('height') / 2]);
        }
    }

}

export default SvgStrategySunburst;
