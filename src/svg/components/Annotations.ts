import Component from "./Component";
import XAxis from "./XAxis";
import YAxis from "./YAxis";
import { max, min } from "d3-array";
import Globals from "../../Globals";
import * as d3Annotation from 'd3-svg-annotation';
import Annotation from 'd3-svg-annotation';

class Annotations extends Component {
    private y: YAxis;
    private x: XAxis;
    private thresholdConfig: any;

    constructor(x: XAxis, y: YAxis) {
        super();
        this.x = x;
        this.y = y;
    }

    render() {
        let annotations = this.svg.append('g')
            .attr('class', 'annotations');
    }

    public update(data: [any]) {
        let propertyX = this.config.get('propertyX'),
            propertyY = this.config.get('propertyY'),
            propertyZ = this.config.get('propertyZ'),
            annotations = this.config.get('annotations'),
            y = this.y.yAxis.scale(),
            x = this.x.xAxis.scale(),
            minX = min(data, (d) => d[propertyX]),
            minY = min(data, (d) => d[propertyY]),
            maxX = max(data, (d) => d[propertyX]),
            maxY = max(data, (d) => d[propertyY]);

        this.x.updateDomainByMinMax(minX, maxX);
        this.y.updateDomainByMinMax(minY, maxY);

        if (!annotations) {
            return;
        }

        let annotation = d3Annotation.annotation()
            .annotations(annotations.map((a: any) => {
                let annotation = null;
                switch (a.type) {
                    case 'threshold':
                        annotation = this.makeThresholdAnnotation(a);
                        break;
                }
                return annotation;
            }));
        this.svg.select('.annotations')
        .call(annotation)
        .on('dblclick', () => annotation.editMode(!annotation.editMode()).update());
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
}

export default Annotations;