import * as Colors from '../colors';
import StreamingStrategy from '../../charts/enums/StreamingStrategy';

export const defaults: any = {
    selector: '#chart',
    colorScale: Colors.category8(),
    marginTop: 20,
    marginRight: 250,
    marginBottom: 130,
    marginLeft: 70,
    width: '100%', // %, auto, or numeric
    height: 550,
    legend: false,
    legendPosition: 'right',
    propertyKey: 'key',
    tickLabel: '',
    transitionDuration: 300,
    streamingStrategy: StreamingStrategy.REPLACE,
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
