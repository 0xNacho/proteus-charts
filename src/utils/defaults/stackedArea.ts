import * as Colors from '../colors';
import {
    stackOrderInsideOut,
    stackOffsetNone,
    stack as d3Stack
} from 'd3';

export const defaults: any = {
    selector: '#chart',
    colorScale: Colors.category2(),
    //Axes
    xAxisType: 'time',
    xAxisFormat: '%y/%m/%d',
    xAxisLabel: '',
    xAxisGrid: true,
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
    //Width & height
    width: '100%', // %, auto, or numeric 
    height: 250,
    legend: true,
    propertyX: 'x',
    propertyY: 'y',
    propertyKey: 'key',
    stacked: true,
    stack: d3Stack().value((d, k) => d.value[k]).order(stackOrderInsideOut).offset(stackOffsetNone),
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

    },
    maxNumberOfElements: 100, // used by keepDrawing method to reduce the number of elements in the current chart
};