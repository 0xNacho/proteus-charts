import Container from "../components/Container";
import Config from "../../Config";
import inject from '../../inject';

abstract class SvgStrategy {

    protected container: Container;

    @inject('Config')
    protected config: Config;

    constructor() {

    }

    initialize() {
        this.container = new Container(this.config);
    }

    abstract draw(data: [{}]): void;


    public addLoading() {
        this.container.addLoadingIcon();
    }

    public removeLoading() {
        this.container.removeLoadingIcon();
    }
}

export default SvgStrategy;