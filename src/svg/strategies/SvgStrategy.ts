import Config from '../../Config';
import SvgChart from '../base/SvgChart';


export class SvgContext {
    private strategy: SvgChart;

    constructor(strategy: SvgChart, config: Config) {
        this.strategy = strategy;
        this.strategy.setConfig(config);
        this.strategy.initialize();
    }

    public draw(data: [{}]): void {
        this.strategy.draw(data);
    }

    public addLoading(){
        this.strategy.addLoading();
    }
    public removeLoading(){
        this.strategy.removeLoading();
    }
}