import {
    D3ZoomEvent
} from 'd3';
interface Zoomable {

    zoom(e: D3ZoomEvent<any, any>): void;
}

export default Zoomable;