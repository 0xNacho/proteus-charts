import * as Colors from '../colors';
import { stack as d3stack } from 'd3';
import StreamingStrategy from '../../charts/enums/StreamingStrategy';

export const defaults: any = {
    selector: '#chart',
    colorScale: Colors.category5(),
    stacked: false,
    xAxisType: 'categorical',
    xAxisFormat: '',
    xAxisLabel: '',
    xAxisGrid: false,
    xAxisMin: 'auto',
    xAxisMax: 'auto',
    xTicksTextRotation: 0,
    yAxisType: 'linear',
    yAxisFormat: '',
    yAxisLabel: '',
    yAxisShow: true,
    yAxisGrid: true,
    yAxisMin: 0,
    yAxisMax: 'auto',
    marginTop: 20,
    marginRight: 250,
    marginBottom: 130,
    marginLeft: 70,
    width: '100%',
    height: 350,
    legend: true,
    legendPosition: 'right',
    propertyX: 'x',
    propertyY: 'y',
    propertyKey: 'key',
    nullValues: ['NULL', 'NUL', '\\N', NaN, null],
    stack: d3stack().value((d: any, k: any) => d.value[k]),
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
