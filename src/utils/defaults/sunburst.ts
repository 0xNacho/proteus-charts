import * as Colors from '../colors';

export const defaults : any = {
    selector: '#chart',
    colorScale: Colors.category8(),
    marginTop: 20,
    marginRight: 20,
    marginBottom: 30,
    marginLeft: 50,
    width: '50%', // %, auto, or numeric
    height: 450,
    tickLabel: '',
    transitionDuration: 300,
    maxNumberOfElements: 5, // used by keepDrawing to reduce the number of elements in the current chart
    sortData: {
        descending: false,
        prop: 'x'
    },
    //Events
    onDown(d: any) {
    },
    onHover(d: any) {
    },
    onLeave(d: any) {
    },
    onClick(d: any) {
    },
    onUp(d: any) {
    }
};