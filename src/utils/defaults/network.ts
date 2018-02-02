import * as Colors from '../colors';
import StreamingStrategy from '../../charts/enums/StreamingStrategy';

export const defaults: any = {
    selector: '#chart',
    colorScale: Colors.category7(),
    marginTop: 20,
    marginRight: 250,
    marginBottom: 130,
    marginLeft: 70,
    width: '100%', // %, auto, or numeric
    height: 250,
    nodeRadius: 8.5,
    legend: true,
    linkWeight: 1,
    nodeWeight: 8,
    minLinkValue: 0,
    maxLinkValue: 10,
    minNodeWeight: 0,
    maxNodeWeight: 100,
    weighted: false,
    labelShow: true,
    labelField: 'id',
    zoom: true,
    streamingStrategy: StreamingStrategy.ADD,
    onDown(d: any) {
    },
    onHover(d: any) {
    },
    onLeave(d: any) {
    },
    onClick(d: any) {
    },
    onUp(d: any) {
    },
    spinner: true,
    pauseButton: true,
    pauseButtonPosition: 'bottom'
};
