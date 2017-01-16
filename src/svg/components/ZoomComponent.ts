import Component from './Component';
import Zoomable from './Zoomable';
import Config from '../../Config';

import {
    selection,
    select,
    zoom,
    event
} from 'd3';


class ZoomComponent extends Component {

    private zoom: any;
    private zoomerComponent: Zoomable;

    constructor(zoomerComponent: Zoomable) {
        super();
        this.zoomerComponent = zoomerComponent;
        this.zoom = zoom().scaleExtent([1 / 2, 4]);
    }

    public render() {
        let selector = this.config.get('selector');
        select(selector).call(this.zoom);

        this.zoom.on('zoom', () => {
            this.zoomerComponent.zoom(event);
        });
    }

    public update(data: [any]) {

    }
}

export default ZoomComponent;