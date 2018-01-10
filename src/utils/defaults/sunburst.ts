import * as Colors from '../colors';
import StreamingStrategy from '../../charts/enums/StreamingStrategy';

export const defaults: any = {
    selector: '#chart',
    colorScale: Colors.category8(),
    marginTop: 20,
    marginRight: 20,
    marginBottom: 30,
    marginLeft: 70,
    width: '50%', // %, auto, or numeric
    height: 450,
    tickLabel: '',
    transitionDuration: 300,
    // maxNumberOfElements: 5, // TODO Improve how to slice excess elements.
                               // Elements of sunburst have parent-child relationship.
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
};
