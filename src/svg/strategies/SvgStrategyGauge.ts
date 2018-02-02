
import Config from '../../Config';
import SvgStrategy from '../base/SvgStrategy';
import { sortByField } from '../../utils/data/sorting';
import { convertByXYFormat } from '../../utils/data/transforming';
import Dial from '../components/Dial';
import DialNeedle from '../components/DialNeedle';
import TextIndicator from '../components/TextIndicator';
import Spinner from '../components/Spinner';
import PauseSet from '../components/PauseSet';

class SvgStrategyGauge extends SvgStrategy {

    private dial: Dial;
    private dialNeedle: DialNeedle;
    private textIndicator: TextIndicator;
    private spinner: Spinner;
    private pauseButton: PauseSet;

    constructor() {
        super();
        this.dial = new Dial();
        this.dialNeedle = new DialNeedle();
        this.textIndicator = new TextIndicator();
    }

    public draw(data: [{}]) {
        this.container.updateComponents(data);
    }


    public initialize(): void {
        super.initialize();

        let width = this.config.get('width'),
            height = this.config.get('height'),
            spinner = this.config.get('spinner'),
            pauseButton = this.config.get('pauseButton');

        let r = (
                (width > height) ? height : width
            ) / 2;

        this.config.put('errorImagePosition', [r - 100, r - 100]); // To config error icon position

        this.container.add(this.dial).add(this.dialNeedle);

        if (this.config.get('numericIndicator')) {
            let indicatorOffset = r + 75;
            this.container.add(this.textIndicator);
            this.textIndicator.translate(r, indicatorOffset);
        }

        if (spinner) {
            this.spinner = new Spinner();
            this.container.add(this.spinner);
            this.spinner.translate(r - 100, r - 100);
        }

        if (pauseButton) {
            let buttonXposition: number = r - 100,
                buttonYposition: number = r + 55;
            this.config.put('pauseButtonTranslate', [buttonXposition, buttonYposition]);
        }

    }
}

export default SvgStrategyGauge;
