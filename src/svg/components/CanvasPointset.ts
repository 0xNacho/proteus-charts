import Component from "./Component";
import YAxis from "./YAxis";
import XAxis from "./XAxis";
import {
    select,
    symbol,
    symbolCircle,
    symbolCross,
    symbolDiamond,
    symbolSquare,
    symbolStar,
    symbolTriangle,
    symbolWye
} from "d3";

class CanvasPointset extends Component {

    private x: XAxis;
    private y: YAxis;
    private canvasCtx: any;

    constructor(x: XAxis, y: YAxis) {
        super();
        this.x = x;
        this.y = y;
    }

    public update(data: [any]): void {
        let propertyKey = this.config.get('propertyKey');
        let propertyX = this.config.get('propertyX');
        let propertyY = this.config.get('propertyY');

        let markerShape = this.config.get('markerShape'),
            markerSize = this.config.get('markerSize'),
            colorScale = this.config.get('colorScale'),
            points = null,
            series = null,
            dataContainer = null,
            width = this.config.get('width'),
            height = this.config.get('height');



        let shape = symbol()
            .size(markerSize)
            .context(this.canvasCtx);

        switch (markerShape) {
            case 'dot':
                shape.type(symbolCircle);
                break;
            case 'ring':
                shape.type(symbolCircle);
                break;
            case 'cross':
                shape.type(symbolCross);
                break;
            case 'diamond':
                shape.type(symbolDiamond);
                break;
            case 'square':
                shape.type(symbolSquare);
                break;
            case 'star':
                shape.type(symbolStar);
                break;
            case 'triangle':
                shape.type(symbolTriangle);
                break;
            case 'wye':
                shape.type(symbolWye);
                break;
            case 'circle':
                shape.type(symbolCircle);
                break;
            default:
                shape.type(symbolCircle);
        }

        // Custom DOM element, this won't be rendered
        dataContainer = this.svg.append('proteic');
        series = dataContainer.selectAll('proteic.g.points');
        this.canvasCtx.clearRect(0, 0, width, height);

        series
            .data(data, (d) => d[propertyKey])
            .enter()
            .call((s) => {
                let self = this;
                s.each(function (d) {
                    self.canvasCtx.save();
                    self.canvasCtx.translate(self.x.xAxis.scale()(d[propertyX]), self.y.yAxis.scale()(d[propertyY]));
                    self.canvasCtx.beginPath();
                    self.canvasCtx.strokeStyle = colorScale(d[propertyKey]);
                    self.canvasCtx.fillStyle = colorScale(d[propertyKey]);
                    shape();
                    self.canvasCtx.closePath();
                    self.canvasCtx.stroke();
                    if (markerShape !== 'ring') {
                        self.canvasCtx.fill();
                    }
                    self.canvasCtx.restore();
                });
            });
    }

    public render(): void {
        this.canvas = select(this.config.get('selector')).append('canvas')
            .attr('id', 'point-set-canvas')
            .attr('width', this.config.get('width'))
            .attr('height', this.config.get('height'))
            .style('position', 'absolute')
            .style('z-index', 2)
            .style('transform', `translate(${this.config.get('marginLeft')}px, ${this.config.get('marginTop')}px)`);

        this.canvasCtx = this.canvas.node().getContext('2d');
    }
}

export default CanvasPointset;
