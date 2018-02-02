import * as Colors from '../colors';
import StreamingStrategy from '../../charts/enums/StreamingStrategy';

export const defaults: any = {
    selector: '#chart',
    colorScale: Colors.diverging_spectral2(),
    invertColorScale: true,
    minLevel: 0,
    maxLevel: 100,
    minAngle: -90,
    maxAngle: 90,
    ringWidth: 50,
    ringMargin: 20,
    labelInset: 10,
    needleNutRadius: 25,
    needleLenghtRatio: 0.8,
    numericIndicator: true,
    label: 'km/h',
    marginTop: 20,
    marginRight: 250,
    marginBottom: 30,
    marginLeft: 70,
    width: '50%', // %, auto, or numeric
    height: 250,
    ticks: 10, // ticks for y dial.
    propertyValue: 'value',
    streamingStrategy: StreamingStrategy.REPLACE,
    spinner: true,
    pauseButton: true,
};
