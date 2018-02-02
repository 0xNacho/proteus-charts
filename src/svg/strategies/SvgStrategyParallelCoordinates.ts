import SvgStrategy from '../base/SvgStrategy';
import Config from '../../Config';
import ParallelCoordinates from '../components/ParallelCoordinates';
import ParallelLineset from '../components/ParallelLineset';
import Legend from '../components/Legend';
import Spinner from '../components/Spinner';
import PauseSet from '../components/PauseSet';

class SvgStrategyParallelCoordinates extends SvgStrategy {

    /**
     *
     * Parallel Coordinates. Consist of Dimension and Parallel Axes.
     *
     * @private
     * @type {ParallelCoordinates}
     */
    private axes: ParallelCoordinates;

    /**
     *
     * Set of Parallel Line. Lines for Parallel Coordinates.
     *
     * @private
     * @type {ParallelLineset}
     */
    private lines: ParallelLineset;

    private legend: Legend;

    private spinner: Spinner;
    private pauseButton: PauseSet;

    constructor() {
        super();
        this.axes = new ParallelCoordinates();
        this.lines = new ParallelLineset(this.axes);
    }

    public draw(data: [{}]) {
        this.container.updateComponents(data);
    }

    public initialize(): void {
        super.initialize();
        let legend = this.config.get('legend'),
            spinner = this.config.get('spinner'),
            pauseButton = this.config.get('pauseButton');

        this.container
            .add(this.axes)
            .add(this.lines);

        if (legend) {
            this.legend = new Legend();
            this.container.add(this.legend);
        }

        if (spinner) {
            this.spinner = new Spinner();
            this.container.add(this.spinner);
        }

        if (pauseButton) {
            // If its position needs to translate, then configure here @see SvgStrategyGauge
        }
    }

}

export default SvgStrategyParallelCoordinates;
