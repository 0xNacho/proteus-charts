import LinkedNodeset from '../components/LinkedNodeset';
import Legend from '../components/Legend';
import ZoomComponent from '../components/ZoomComponent';
import Config from '../../Config';
import SvgChart from '../base/SvgChart';
import { sortByField } from '../../utils/dataSorting';

class SvgStrategyNetwork extends SvgChart {

    private linkedNodes: LinkedNodeset;
    private legend: Legend;
    private zoom: ZoomComponent;

    constructor() {
        super();
    }

    public draw(data: [{}]) {
        this.container.updateComponents(data);
    }


    public initialize(): void {
        super.initialize();
        let legend = this.config.get('legend');
        let zoom = this.config.get('zoom'); 
        
        this.linkedNodes = new LinkedNodeset();
        this.container.add(this.linkedNodes);
        if (legend) {
            this.legend = new Legend();
            this.container.add(this.legend);
        }

        if (zoom) {
            this.zoom = new ZoomComponent(this.linkedNodes);
            this.container.add(this.zoom);
        }
    }
}

export default SvgStrategyNetwork;