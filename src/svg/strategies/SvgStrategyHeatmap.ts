import SvgStrategy from '../base/SvgStrategy';
import XYAxes from '../components/XYAxes';
import TileSet from '../components/TileSet';
import { sortByField } from '../../utils/data/sorting';
import ColorLegend from '../components/ColorLegend';
import Spinner from '../components/Spinner';
import PauseSet from '../components/PauseSet';

class SvgStrategyHeatmap extends SvgStrategy {

    private axes: XYAxes;
    private tiles: TileSet;
    private legend: ColorLegend;
    private spinner: Spinner;
    private pauseButton: PauseSet;

    constructor() {
        super();
        this.axes = new XYAxes();
        this.tiles = new TileSet(this.axes.x, this.axes.y);
    }

    draw(data: [{}]): void {
        let xAxisFormat = this.config.get('xAxisFormat'),
            xAxisType = this.config.get('xAxisType'),
            yAxisFormat = this.config.get('yAxisFormat'),
            yAxisType = this.config.get('yAxisType'),
            propertyX = this.config.get('propertyX'),
            propertyY = this.config.get('propertyY');

        this.container.updateComponents(data);
    }

    public initialize(): void {
        let legend = this.config.get('legend'),
        spinner = this.config.get('spinner'),
        pauseButton = this.config.get('pauseButton');

        super.initialize();
        this.container.add(this.axes).add(this.tiles);

        if (legend) {
            this.legend = new ColorLegend();
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

export default SvgStrategyHeatmap;
