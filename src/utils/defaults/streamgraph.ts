import * as Colors from '../colors';
import {
    stackOrderInsideOut,
    stackOffsetWiggle,
    stack as d3Stack
} from 'd3';
import StreamingStrategy from '../../charts/enums/StreamingStrategy';

export const defaults: any = {
    selector: '#chart',
    colorScale: Colors.category4(),
    xAxisType: 'time',
    xAxisFormat: '%y/%m/%d',
    xAxisLabel: '',
    xAxisGrid: true,
    xAxisMin: 'auto',
    xAxisMax: 'auto',
    xTicksTextRotation: 0,
    yAxisType: 'linear',
    yAxisFormat: '',
    yAxisLabel: '',
    yAxisShow: false,
    yAxisGrid: false,
    yAxisMin: 'auto',
    yAxisMax: 'auto',
    marginTop: 20,
    marginRight: 250,
    marginBottom: 130,
    marginLeft: 70,
    width: '100%', // %, auto, or numeric
    height: 250,
    legend: true,
    legendPosition: 'right',
    propertyX: 'x',
    propertyY: 'y',
    propertyKey: 'key',
    nullValues: ['NULL', 'NUL', '\\N', NaN, null, 'NaN', undefined],
    stack: d3Stack().value((d: any, k: any) => d.value[k]).order(stackOrderInsideOut).offset(stackOffsetWiggle),
    stacked: true,
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
    streamingStrategy: StreamingStrategy.ADD,
    maxNumberOfElements: 100, // used by keepDrawing method to reduce the number of elements in the current chart
    spinner: true,
    pauseButton: true,
    pauseButtonPosition: 'bottom'
};
