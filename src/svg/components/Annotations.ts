import Component from './Component';
import XAxis from './XAxis';
import YAxis from './YAxis';
import { copy, isValuesInObjectKeys, hasValuesWithKeys, filterKeys } from '../../utils/functions';
import Globals from '../../Globals';
import { max, min } from 'd3-array';
import * as d3Annotation from 'd3-svg-annotation';
import Annotation from 'd3-svg-annotation';
import {
    map,
    nest
} from 'd3';

class EventKeys {
    variable: string[] = new Array<string>();
    width: string[] = new Array<string>();
}

class Annotations extends Component {
    private y: YAxis;
    private x: XAxis;
    private thresholdConfig: any;
    private annotationsConfig: any;
    private annotations: any;

    /**
    * Data for annotations
    * It is Only updated by the latest data @see makeEvents()
    * @private
    * @type {Map<string, any>}
    * @memberof Annotations
    */
    private events: Map<string, any> = new Map();

    constructor(x: XAxis, y: YAxis) {
        super();
        this.x = x;
        this.y = y;
    }

    public render() {
        this.annotationsConfig = this.config.get('annotations');
        let bandAnnotation = this.annotationsConfig.find((a: any) => a.type == 'band');
        if (bandAnnotation) {
            this.y.setUpdateDomainByOhterComponent();
        }

        this.svg.append('g')
            .attr('class', 'annotations')
            .attr('clip-path', 'url(#' + this.config.get('proteicID') + ')');
    }

    public update(data: [any]) {
        if (typeof data === undefined ||
            data.length == 0 ||
            !this.annotationsConfig ||
            !Array.isArray(this.annotationsConfig) ||
            this.annotationsConfig.length == 0
        ) {
            this.clear();
            return;
        }
        this.updateYDomainByAnnotations(data);

        this.makeEvents(data);

        this.makeAnnotation();

        this.svg.select('.annotations')
            .call(this.annotations)
            .on('dblclick', () => this.annotations.editMode(!this.annotations.editMode()).update());
    }

    private updateYDomainByAnnotations(data: [any]) {
        let propertyKey = this.config.get('propertyKey'),
            propertyY = this.config.get('propertyY');

        let minYvalue = this.y.extent[0],
            maxYvalue = this.y.extent[1];

        let annotations = this.annotationsConfig.filter((a: any) => a.type == 'band');
        if (annotations.length > 0) {
            annotations.map((annotation: any) => {
                let variable: string = annotation.variable,
                    width: string | number = annotation.width;

                let annotationData = data.filter((d: any) => d[propertyKey] == variable);
                if (annotationData && annotationData.length) {
                    let widthValue: number = 0;
                    for (let a of annotationData) {
                        if (typeof width == 'number') {
                            widthValue = width;
                        } else if (typeof width == 'string') {
                            widthValue = a[width];
                        }
                        if (a[propertyY] - widthValue < minYvalue) {
                            minYvalue = a[propertyY] - widthValue;
                        }
                        if (a[propertyY] + widthValue > maxYvalue) {
                            maxYvalue = a[propertyY] + widthValue;
                        }
                    }
                }
            });
            this.y.updateDomainByMinMax(minYvalue, maxYvalue);
        }
    }

    private makeEvents(data: [any]) {
        let propertyKey = this.config.get('propertyKey'),
            propertyY = this.config.get('propertyY');

        let eventKeys: EventKeys = new EventKeys();

        this.annotationsConfig.map((a: any) => {
            if (a.variable) {
                eventKeys.variable.push(a.variable);
            }
            if (typeof a.width == 'string') {
                 eventKeys.width.push(a.width);
            }
        });

        let nestedData = nest().key((d: any) => d[propertyKey]).entries(data);
        // optimize by using key-nested data to loop only number of key times
        nestedData.map((d) => {
            let latestData = d.values[d.values.length - 1];

            eventKeys.variable.map((v) => {
                if (v == latestData[propertyKey]) {
                    this.events.set(v, latestData[propertyY]);
                }
            });
            eventKeys.width.map((w) => {
                if (latestData[w]) {
                    this.events.set(w, latestData[w]);
                }
            });
        });
    }

    /**
    * @method
    * It makes Annotation using d3-annotation and events
    * This function is also called in transition(). @see transition()
    * @private
    * @memberof Annotations
    */
    private makeAnnotation() {
        let annotations: any = d3Annotation.annotation()
            .annotations(this.annotationsConfig.map((a: any) => {
                switch (a.type) {
                    case 'threshold':
                        if (a.variable) {
                            a.value = this.events.get(a.variable);
                        }
                        if (a.value) {
                            return this.makeThresholdAnnotation(a);
                        }
                        break;
                    case 'band':
                        a.value = this.events.get(a.variable);
                        if (a.value && a.width) {
                            let width = a.width;
                            if (typeof a.width == 'string') {
                                width = this.events.get(a.width);
                                if (!width) {
                                    throw new Error(`Invalid value of annotation width '${a.width}': ${width}`);
                                }
                            }
                            if (width !== 0) {
                                return this.makeBandAnnotation(a.value, width, a.text);
                            }
                        }
                        break;
                    default:
                        throw new Error(`Unknown annotation type: ${a.type}`);
                }
                return annotations;
            }).filter((a: any) => a)); // Filter nulls
            this.annotations = annotations;
    }

    private makeBandAnnotation(value: number, width: number, text: string) {
        let chartWidth: number = this.config.get('width'),
            chartHeight: number = this.config.get('height'),
            annotation = null,
            y = this.y.yAxis.scale(),
            annotationHeight = y((value - width)) - y((value + width)),
            annotationY = y(value) - annotationHeight / 2;

        annotation = this.makeAreaAnnotation(
            annotationY,
            chartWidth,
            annotationHeight,
            text
        );

        return annotation;
    }

    private makeThresholdAnnotation(annotationData: any) {
        let propertyX = this.config.get('propertyX'),
            propertyY = this.config.get('propertyY'),
            width: number = this.config.get('width'),
            height: number = this.config.get('height'),
            annotation = null,
            y = this.y.yAxis.scale(),
            x = this.x.xAxis.scale();

        switch (annotationData.axis) {
            case 'y':
                annotation = this.makeYThresholdAnnotation(width, y(annotationData.value), annotationData.text);
                break;
            case 'x':
                annotation = this.makeXThresholdAnnotation(x(annotationData.value), height, annotationData.text);
                break;
            default:
                throw new SyntaxError(`Unknown annotation axis: ${annotationData.axis}`);
        }

        return annotation;
    }

    private makeAreaAnnotation(y: number, width: number, height: number, text: string) {
        return {
            x: 0, // Rect X
            y: y, // Rect Y
            type: d3Annotation.annotationCalloutRect,
            dy: 80, // Label Y
            dx: width + 20, // Label X
            subject: {
                width: width, // Width of the rect
                height: height // Height of the rect
            },
            note: {
                label: text,
            }
        };
    }

    private makeXThresholdAnnotation(x: number, y: number, text: string) {
        return {
            x: x,
            y: y,
            type: d3Annotation.annotationXYThreshold,
            dy: 30,
            dx: 0,
            subject: {
                y1: 0,
                y2: y
            },
            note: {
                label: text,
            }
        };
    }

    private makeYThresholdAnnotation(x: number, y: number, text: string) {
        return {
            x: x,
            y: y,
            type: d3Annotation.annotationXYThreshold,
            // dy: 120,
            dx: 20,
            subject: {
                x1: 0,
                x2: x
            },
            note: {
                label: text,
            }
        };
    }

    public clear() {
        this.svg.selectAll('.annotation').remove();
    }

    public transition() {
        this.makeAnnotation();
        this.svg.select('.annotations')
            .call(this.annotations)
            .on('dblclick', () => this.annotations.editMode(!this.annotations.editMode()).update());
    }
}

export default Annotations;
