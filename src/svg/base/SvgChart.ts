import Container from '../components/Container';
import Config from '../../Config';

abstract class SvgChart {

    protected container: Container;
    protected config: Config;

    constructor() {

    }

    initialize() {
        this.container = new Container(this.config);
    }

    setConfig(config: Config) {
        this.config = config;
    }

    abstract draw(data: [{}]): void;


    public addLoading() {
        this.container.addLoadingIcon();
    }

    public removeLoading() {
        this.container.removeLoadingIcon();
    }



}

export default SvgChart;