import Component from './Component';
import Globals from '../../Globals';
import ParallelLineset from '../components/ParallelLineset';
import {
    map,
    scaleLinear,
    scalePoint,
    axisLeft,
    axisBottom,
    Axis,
    extent,
    select,
    drag,
    event,
    brushY
} from 'd3';

class ParallelCoordinates extends Component {

    /**
     * An Array of dimensions extracted from the data of parallel coordinates
     * @private
     * @memberof ParallelCoordinates
     */
    private _dimensions: string[] = [];

    /**
     * A scale of dimensions. Determine dimension-position of parallel coordinates
     * @private
     * @memberof ParallelCoordinates
     */
    private _dimensionScale: any;

    /**
     * Parallel y-axes divided by dimension
     * @private
     * @memberof ParallelCoordinates
     */
    private _yAxes: { [dimension: string]: any } = {};

    /**
     * Type of parallel y-axes extracted from the data.
     * (number, string) -> ('linear', 'categorical')
     * @private
     * @memberof ParallelCoordinates
     */
    private yAxesType: { [dimension: string]: string } = {};

    /**
     * A set of no-value line
     * @private
     * @type {NoValueLineset}
     * @memberof ParallelCoordinates
     */
    private noValueLine: NoValueLineset;

    private dragEventPositions: any;
    private brushedExtent: any;

    constructor() {
        super();
    }

    public render() {
        let width = this.config.get('width');

        this.initializeParallelCoordinates(width);
    }

    public update(data: [any]) {
        if (typeof data === undefined || data.length == 0) {
            return;
        }
        let propertyKey = this.config.get('propertyKey'),
            height = this.config.get('height'),
            width = this.config.get('width');

        let missingDimensions: boolean = false;

        // extract dimensions of each data and check if data with missing dimensions exists
        data.map((d, i) => {
            let dimensions = Object.keys(d).filter((dimension) => dimension != propertyKey);
            if (dimensions.length != this._dimensions.length) {
                if (i != 0 && !missingDimensions) {
                    missingDimensions = true;
                }
                if (dimensions.length > this._dimensions.length) {
                    this._dimensions = dimensions;
                }
            }
        });

        // optimize to avoid looping by getting one of valid data
        let validData = data.find(this.getValidData, this);

        this.updateYaxesType(validData);
        this.updateDomainOfDimensions();
        this.updateYaxesByDimensions(data, height);

        this.initializeEvent(); // TODO separate event to each component

        let thisInstance = this;    // To use instance method in selection event

        if (missingDimensions) {
            this.noValueLine = {
                axis: axisBottom(this._dimensionScale).tickFormat((d) => ''),
                height: height * 1.2
            };

            this.svg.append('g')
                .attr('class', 'novalue-axis')
                .attr('transform', 'translate(0,' + this.noValueLine.height + ')')
                .call(thisInstance.noValueLine.axis);

            this.svg.append('text')
                .attr('class', 'xaxis-title')
                .attr('x', width + 10)
                .attr('y', height * 1.21)
                .text('No Value');
        }

        let dimensionEntries = this.svg.selectAll('.dimension')
                                    .data(this._dimensions)
                                    .enter()
                                    .append('g')
                                    .attr('class', 'dimension')
                                    .attr('transform', (d) => 'translate(' + this._dimensionScale(d) + ')')
                                    .each(function(d) {
                                        select(this)
                                            .call(drag()
                                                .on('start', (dimension) => thisInstance.startDrag(d))
                                                .on('drag', (dimension) => thisInstance.dragging(d))
                                                .on('end', (dimension) => thisInstance.endDrag(d, this))
                                            );
                                    });

        dimensionEntries.append('g')
                    .attr('class', 'axis')
                    .attr('transform', 'translate( 0, 0 )')
                    .each(function(d) {
                        select(this)
                            .call(thisInstance._yAxes[d]);
                    });

        dimensionEntries.append('text')
                .attr('class', 'yaxis-title')
                .style('text-anchor', 'middle')
                .style('cursor', 'move')
                .attr('y', -9)
                .text((d) => d);

        if (data !== null && data.length) {
            this.transition();
        }

        // TODO we will separate brush configuration later

        dimensionEntries.append('g')
                .attr('class', 'brush')
                .each(function(d) {
                    select(this)
                        .call(brushY().extent([[-8, 0], [8, height]])
                            .on('brush', (dimension: any) => thisInstance.brushed(d))
                        );
                })
                .selectAll('rect')
                .attr('x', -8)
                .attr('width', 16);
    }

    private initializeParallelCoordinates(width: number) {
        this._dimensionScale = scalePoint().range([0, width]);
    }

    private getValidData(data: any) {
        let propertyKey = this.config.get('propertyKey'),
            dimensions = Object.keys(data).filter((dimension) => dimension != propertyKey);

        if (dimensions.length == this._dimensions.length) {
            return data;
        }
    }

    private updateYaxesType(data: any) {
        this._dimensions.map((dimension) => {
            switch (typeof(data[dimension])) {
                case 'number':
                    this.yAxesType[dimension] = 'linear';
                    break;
                case 'string':
                    this.yAxesType[dimension] = 'categorical';
                    break;
                default:
                    throw new Error('Not allowed data type for YAxis');
            }
        });
    }

    private updateYaxesByDimensions(data: [any], height: number) {
        this._dimensions.map((dimension) => {
            if (this.yAxesType[dimension] == 'linear') {
                this._yAxes[dimension] = axisLeft(scaleLinear()
                                                    .domain(extent(data, (d) => +d[dimension]))
                                                    .range([height, 0]));

            } else if (this.yAxesType[dimension] == 'categorical') {
                let categoricalValue: string[] = map(data, (d: any) => d[dimension]).keys().sort();
                this._yAxes[dimension] = axisLeft(scalePoint()
                                                    .domain(categoricalValue)
                                                    .range([height, 0]));
            }
        });
    }

    private updateDomainOfDimensions() {
        this._dimensionScale.domain(this._dimensions);
    }

    public transition() {
        let thisInstance = this;

        this.svg.selectAll('.axis')
                .transition()
                .duration(Globals.COMPONENT_TRANSITION_TIME)
                .each(function(d: string) {
                    select(this)
                        .call(thisInstance._yAxes[d]);
                });

        this.svg.selectAll('.axis path').raise();
    }

    public clear() {}

    public yPosition(dimension: any, data: any) {
        let position = (data[dimension] == undefined)
                            ? this.noValueLine.height
                            : this._yAxes[dimension].scale()(data[dimension]);

        return position;
    }

    public dimensionPosition(dimension: any) {
        let position = (this.dragEventPositions[dimension] == null)
                        ? this._dimensionScale(dimension)
                        : this.dragEventPositions[dimension];

        return position;
    }

    private updateParallelLine() {
        let parallelLineInstance = new ParallelLineset(this);

        this.svg.selectAll('.foreground path')
                .attr('d', (d: any) => parallelLineInstance.path(d));

        this.svg.selectAll('.background path')
                .attr('d', (d: any) => parallelLineInstance.path(d));
    }

    // TODO we will separate drag component later

    private initializeEvent() {
        this.dragEventPositions = {};
        this.brushedExtent = {};
    }

    private startDrag(dimension: any) {
        this.svg.selectAll('.background')
                .attr('visibility', 'hidden');
    }

    private dragging(dimension: any) {
        let width = this.config.get('width');

        this.dragEventPositions[dimension] = Math.min(width, Math.max(0, event.x));

        this.updateParallelLine();

        this._dimensions.sort((a, b) => this.dimensionPosition(a) - this.dimensionPosition(b));
        this.updateDomainOfDimensions();
        this.svg.selectAll('.dimension')
                .attr('transform', (d) => 'translate(' + this.dimensionPosition(d) + ')');
    }

    private endDrag(dimension: any, element: any) {
        delete this.dragEventPositions[dimension];

        element.setAttribute('transform', 'translate(' + this._dimensionScale(dimension) + ')');

        this.updateParallelLine();

        this.svg.selectAll('.background')
                .attr('visibility', null);
    }

    // TODO we will separate brush component later

    private brushed(dimension: any) {
        this.brushedExtent[dimension] = [this._yAxes[dimension].scale().invert(event.selection[1]),
                                            this._yAxes[dimension].scale().invert(event.selection[0])];

        let activeDimension = this._dimensions.filter((d) => (this.brushedExtent[d] == null) ? false : true),
            thisInstance = this;

        this.svg.selectAll('.foreground')
            .attr('opacity', (d: any) => activeDimension.every((i: string) =>
                    (thisInstance.brushedExtent[i][0] <= d[i] && thisInstance.brushedExtent[i][1] >= d[i]))
                    ? 1
                    : 0
            );
    }

    get dimensionScale() {
        return this._dimensionScale;
    }

    get yAxes() {
        return this._yAxes;
    }

    get dimensions() {
        return this._dimensions;
    }
}

interface NoValueLineset {
    axis: any;
    height: number;
}

export default ParallelCoordinates;
