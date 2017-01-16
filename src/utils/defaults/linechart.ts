import * as Colors from '../colors';
import Interpolation from '../../svg/Interpolation';

export const defaults : any = {
    selector: '#chart',
    colorScale: Colors.category7(),
    curve: Interpolation.CURVE_MONOTONE_X,
    //Area
    areaOpacity: 0,
    //Axes
    xAxisType: 'linear',
    xAxisFormat: '',
    xAxisLabel: null,
    xAxisGrid: true,
    yAxisType: 'linear',
    yAxisFormat: '',
    yAxisLabel: null,
    yAxisShow: true,
    yAxisGrid: true,
    //margins
    marginTop: 20,
    marginRight: 250,
    marginBottom: 130,
    marginLeft: 150,
    //markers
    markerShape: 'dot',
    markerSize: 0,
    markerOutlineWidth: 2,
    //Width & height
    width: '100%', // %, auto, or numeric
    height: 250,
    legend: true,
    propertyX: 'x',
    propertyY: 'y',
    propertyKey: 'key',
    //Events
    onDown(d) {
    },
    onHover(d) {
    },
    onLeave(d) {
    },
    onClick(d) {
    },
    onUp(d) {
    },
    maxNumberOfElements: 10, // used by keepDrawing method to reduce the number of elements in the current chart
};