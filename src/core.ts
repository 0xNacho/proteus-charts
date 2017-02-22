import { Observable } from 'rxjs';
import Injector from './Injector';
import StorageService from './services/StorageService';
import Chart from './charts/Chart'
import * as charts from './charts/'
import * as colors from './utils/colors'
import * as defaults from './utils/defaults/'

//Events
let visibilityChangeSource = Observable.fromEvent(window, 'visibilitychange');
let resizeSource = Observable.fromEvent(window, 'resize');

//Services
let localStorageService = new StorageService('local');
let sessionStorageService = new StorageService('session');


//Add the hidden document attribute to the visibilitychange custom event
visibilityChangeSource.subscribe((event: any) => {
    event.hidden = document.hidden;
});

Injector.register('onVisibilityChange', visibilityChangeSource);
Injector.register('onResize', resizeSource);

Injector.register('localStorageService', localStorageService);
Injector.register('sessionStorageService', sessionStorageService);

// /** 
//  * Get the list of visualizations available in Proteic.js
//  */
export function getAvailableVisualizations(): String[] {
    let visualizations = new Set<String>();

    for (let property in charts) {
        if (typeof property == 'string' && property !== Chart.name) {
            visualizations.add(property);
        }
    }

    return Array.from(visualizations);
}

export function getDefaultOptions(visualization: string) {
    let options = null;

    switch (visualization) {
        case "Linechart":
            options = defaults.LinechartDefaults;
        break;
        case "Barchart":
            options = defaults.BarchartDefaults;
        break;
        case "Gauge":
            options = defaults.GaugeDefaults;
        break;
        case "Heatmap":
            options = defaults.HeatmapDefaults;
        break;
        case "Scatterplot":
            options = defaults.ScatterplotDefaults;
        break;
        case "Streamgraph":
            options = defaults.StreamgraphDefaults;
        break;
        case "StackedArea":
            options = defaults.StackedAreaDefaults;
        break;
        case "Swimlane":
            options = defaults.SwimlaneDefaults;
        break;
        case "Sunburst":
            options = defaults.SunburstDefaults;
        break;
        case "Network":
            options = defaults.NetworkDefaults;
        break;
        case "PieChart":
            options = defaults.PieChartDefaults;
        break;
        default:
            throw new Error('Unrecognised visualization.');
    }
    return options;
}

export function getColorScales() {
    let colorScales = new Set<String>();

    for (let property in colors) {
        if (typeof property == 'string') {
            colorScales.add(property);
        }
    }

    return Array.from(colorScales);
}

export function getColorScale(name: string) {
    let scale = null;

    switch (name) {
        case "category1":
            scale = colors.category1;
        break;
        case "category2":
            scale = colors.category2;
        break;
        case "category3":
            scale = colors.category3;
        break;
        case "category4":
            scale = colors.category4;
        break;
        case "category5":
            scale = colors.category5;
        break;
        case "category6":
            scale = colors.category6;
        break;
        case "category7":
            scale = colors.category7;
        break;
        case "category8":
            scale = colors.category8;
        break;
        case "sequentialYellow":
            scale = colors.sequentialYellow;
        break;
        case "sequentialRedOrange":
            scale = colors.sequentialRedOrange;
        break;
        case "sequentialRed":
            scale = colors.sequentialRed;
        break;
        case "sequentialPink":
            scale = colors.sequentialPink;
        break;
        case "sequentialPurplePink":
            scale = colors.sequentialPurplePink;
        break;
        case "sequentialPurple":
            scale = colors.sequentialPurple;
        break;
        case "sequentialBlue":
            scale = colors.sequentialBlue;
        break;
        case "sequentialLightBlue":
            scale = colors.sequentialLightBlue;
        break;
        case "sequentialBlueViolet":
            scale = colors.sequentialBlueViolet;
        break;
        case "sequentialTurquoise":
            scale = colors.sequentialTurquoise;
        break;
        case "sequentialLightGreen":
            scale = colors.sequentialLightGreen;
        break;
        case "sequentialDarkGreen":
            scale = colors.sequentialDarkGreen;
        break;
        case "sequentialGreenBrown":
            scale = colors.sequentialGreenBrown;
        break;
        case "sequentialBrown":
            scale = colors.sequentialBrown;
        break;
        case "sequentialGrey":
            scale = colors.sequentialGrey;
        break;
        case "sequentialVioletCb":
            scale = colors.sequentialVioletCb;
        break;
        case "sequentialPinkCb":
            scale = colors.sequentialPinkCb;
        break;
        case "sequentialBlueCb":
            scale = colors.sequentialBlueCb;
        break;
        case "sequentialGreenCb":
            scale = colors.sequentialGreenCb;
        break;
        case "sequentialGreenBrownCb":
            scale = colors.sequentialGreenBrownCb;
        break;
        case "diverging_spectral1":
            scale = colors.diverging_spectral1;
        break;
        case "diverging_spectral2":
            scale = colors.diverging_spectral2;
        break;
        case "diverging_spectral3":
            scale = colors.diverging_spectral3;
        break;
        case "diverging_brown_turquoise":
            scale = colors.diverging_brown_turquoise;
        break;
        case "diverging_orange_pink":
            scale = colors.diverging_orange_pink;
        break;
        case "diverging_red_blue":
            scale = colors.diverging_red_blue;
        break;
        case "diverging_red_grey":
            scale = colors.diverging_red_grey;
        break;
        case "diverging_orange_violet":
            scale = colors.diverging_orange_violet;
        break;
        case "diverging_purple_green":
            scale = colors.diverging_purple_green;
        break;
        case "diverging_violet_green":
            scale = colors.diverging_violet_green;
        break;
        case "diverging_red_green":
            scale = colors.diverging_red_green;
        break;
        case "diverging_brown_green":
            scale = colors.diverging_brown_green;
        break;
        case "diverging_lightBrown_turquoise":
            scale = colors.diverging_lightBrown_turquoise;
        break;
    }
    return scale;
}