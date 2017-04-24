import * as Colors from '../colors';
import { stack as d3stack } from 'd3';
import StreamingStrategy from '../../charts/enums/StreamingStrategy';

export const defaults: any = {
    selector: '#chart',
    bins: 20,
    //Axes
    xAxisType: 'linear',
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
    marginRight: 20,
    marginBottom: 130,
    marginLeft: 150,
    //width & height
    width: '100%',
    height: 350,
    legend: true,
    propertyX: 'x',
    nullValues: ['NULL', 'NUL', '\\N', NaN, "NaN", null],
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