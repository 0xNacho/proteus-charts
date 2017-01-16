import * as Colors from '../colors';

export const defaults : any = {
    selector: '#chart',
    colorScale: Colors.category3(),
    //Axes
    xAxisType: 'time',
    xAxisFormat: '%y/%m/%d',
    xAxisLabel: '',
    xAxisGrid: true,
    yAxisType: 'categorical',
    yAxisFormat: 's',
    yAxisLabel: '',
    yAxisShow: true,
    yAxisGrid: true,
    //margins
    marginTop: 20,
    marginRight: 250,
    marginBottom: 30,
    marginLeft: 50,
    //Width & height
    width: '100%', // %, auto, or numeric 
    height: 250,
    legend: true,
    propertyStart: 'start', 
    propertyEnd: 'end',
    propertyKey: 'key',
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