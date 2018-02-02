import Config from '../../Config';
import SvgStrategy from '../base/SvgStrategy';
import inject from '../../inject';

export class SvgContext {

    @inject('Strategy')
    public strategy: SvgStrategy;

    public draw(data: [{}]): void {
        this.strategy.draw(data);
    }

    public clear() {
        this.strategy.clear();
    }

}
