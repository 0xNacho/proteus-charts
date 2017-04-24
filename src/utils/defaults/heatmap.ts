import * as Colors from '../colors';
import { stack as d3stack } from 'd3';
import {scaleLinear} from "d3-scale";
import StreamingStrategy from '../../charts/enums/StreamingStrategy';

export const defaults: any = {
    selector: '#chart',
    colorScale: Colors.sequentialVioletCb(), // TODO fix error and use proteic colours
    xStep: 1,
    yStep: 1,
    //Axes
    xAxisType: 'categorical',
    xAxisFormat: '',
    xAxisLabel: '',
    xAxisGrid: false,
    yAxisType: 'categorical',
    yAxisFormat: '',
    yAxisLabel: '',
    yAxisShow: true,
    yAxisGrid: false,
    //margins
    marginTop: 20,
    marginRight: 250,
    marginBottom: 130,
    marginLeft: 150,
    //width & height
    width: '100%',
    height: 350,
    legend: true,
    legendTitle: '',
    propertyX: 'x',
    propertyY: 'y',
    propertyZ: 'z',
    nullValues: ['NULL', 'NUL', '\\N', NaN, null, 'NaN'],
    stack:  d3stack().value((d: any, k: any) => d.value[k]),
    streamingStrategy: StreamingStrategy.ADD,
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