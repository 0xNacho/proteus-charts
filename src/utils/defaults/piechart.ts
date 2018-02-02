import * as Colors from '../colors';
import StreamingStrategy from '../../charts/enums/StreamingStrategy';

export const defaults: any = {
    selector: '#chart',
    colorScale: Colors.category8(),
    marginTop: 0,
    marginRight: '100',
    marginBottom: 0,
    marginLeft: 70,
    width: '500', // %, auto, or numeric
    height: '500',
    transitionDuration: 300,
    maxNumberOfElements: 5, // used by keepDrawing to reduce the number of elements in the current chart
    legend: true,
    legendPosition: 'right',
    propertyX: 'x',
    propertyKey: 'key',
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
