import * as Colors from '../colors';
import { stack as d3stack } from 'd3';

export const defaults: any = {
    selector: '#chart',
    colorScale: Colors.category5(),
    //Stacked
    stacked: false,
    //Axes
    xAxisType: 'categorical',
    xAxisFormat: '',
    xAxisLabel: '',
    xAxisGrid: false,
    yAxisType: 'linear',
    yAxisFormat: '',
    yAxisLabel: '',
    yAxisShow: true,
    yAxisGrid: true,
    //margins
    marginTop: 20,
    marginRight: 250,
    marginBottom: 130,
    marginLeft: 150,
    //width & height
    width: '100%',
    height: 350,
    legend: true,
    propertyX: 'x',
    propertyY: 'y',
    propertyKey: 'key',
    stack:  d3stack().value((d, k) => d.value[k]),

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