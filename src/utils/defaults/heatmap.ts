import * as Colors from '../colors';
import { stack as d3stack } from 'd3';
import { scaleLinear } from 'd3-scale';
import StreamingStrategy from '../../charts/enums/StreamingStrategy';

export const defaults: any = {
    selector: '#chart',
    colorScale: Colors.sequentialPurpleInterpolated(), // TODO fix error and use proteic colours
    xStep: 1,
    yStep: 1,
    xAxisType: 'categorical',
    xAxisFormat: '',
    xAxisLabel: '',
    xAxisGrid: true,
    xAxisMin: 'auto',
    xAxisMax: 'auto',
    xTicksTextRotation: -65,
    yAxisType: 'categorical',
    yAxisFormat: '',
    yAxisLabel: '',
    yAxisShow: true,
    yAxisGrid: true,
    yAxisMin: 'auto',
    yAxisMax: 'auto',
    marginTop: 20,
    marginRight: 250,
    marginBottom: 130,
    marginLeft: 30,
    width: '100%',
    height: 250,
    legend: true,
    legendPosition: 'right',
    legendCells: 13,
    legendTitle: '',
    propertyX: 'x',
    propertyY: 'y',
    propertyZ: 'z',
    valuesFormat: '.1f',
    nullValues: ['NULL', 'NUL', '\\N', NaN, null, 'NaN', undefined],
    stack: d3stack().value((d: any, k: any) => d.value[k]),
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
