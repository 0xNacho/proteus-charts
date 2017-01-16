import Config from '../../Config';
import Component from './Component';
import Globals from '../../Globals';
import {
    stack,
    map,
    stackOrderInsideOut,
    stackOffsetWiggle,
    select,
    scaleLinear,
    scaleBand,
    format,
    axisLeft,
    axisRight,
    min as d3Min,
    max as d3Max
} from 'd3';

import { isEven } from '../../utils/functions';
import { simple2stacked } from '../../utils/dataTransformation';

class YAxis extends Component {

    private _yAxis: any;
    private _orient: string = 'left';
    private selection: any = null;


    constructor(orient?: string) {
        super();
        if (orient != null) {
            this._orient = orient;
        }
    }

    get orient(): string {
        return this._orient;
    }

    public render(): void {
        let width = this.config.get('width'),
            height = this.config.get('height'),
            yAxisFormat = this.config.get('yAxisFormat'),
            yAxisType = this.config.get('yAxisType'),
            yAxisLabel = this.config.get('yAxisLabel'),
            yAxisGrid = this.config.get('yAxisGrid');

        this.initializeYAxis(width, height, yAxisFormat, yAxisType, yAxisGrid);

        let yAxisG = this.svg
            .append('g')
            .attr('class', 'y axis')
            .attr("transform", this.orient === 'left'
                ? "translate( 0, 0 )"
                : "translate( " + width + ", 0 )"
            )
            .call(this._yAxis);

        this.svg
            .append('text')
            .attr('class', 'yaxis-title')
            .attr("transform", "rotate(-90)")
            .attr("text-anchor", "middle")
            .attr('x', 0 - height / 2)
            .attr('y', 0 - 55)
            .text(yAxisLabel)
            .style('font', '0.8em Montserrat, sans-serif');

        this.selection = yAxisG;
    }

    public update(data: any): void {
        let propertyKey = this.config.get('propertyKey');
        let propertyY = this.config.get('propertyY');

        let yAxisType = this.config.get('yAxisType'),
            yAxisShow = this.config.get('yAxisShow'),
            layoutStacked = this.config.get('stacked');

        this.selection.attr('opacity', yAxisShow ? 1 : 0);

        if (yAxisType === 'linear') {
            if (layoutStacked) { //TODO: Improve
                let keys: string[] = map(data, (d: any) => d[propertyKey]).keys();
                let stack = this.config.get('stack');
                let stackedData = stack.keys(keys)(simple2stacked(data));
                let min = d3Min(stackedData, (serie: any) => d3Min(serie, (d: any) => d[0]));
                let max = d3Max(stackedData, (serie: any) => d3Max(serie, (d: any) => d[1]));
                this.updateDomainByMinMax(min, max);
            } else {
                let min = d3Min(data, (d: any) => d[propertyY]),
                    max = d3Max(data, (d: any) => d[propertyY]);

                this.updateDomainByMinMax(min, max);
            }
        } else if (yAxisType === 'categorical') {
            let keys = map(data, (d: any) => d[propertyKey]).keys().sort();
            this._yAxis.scale().domain(keys);
        }
        else {
            console.warn('could not recognize y axis type', yAxisType);
        }

        if (data !== null && data.length) {
            this.transition();
        }

    }

    private updateDomainByMinMax(min: number, max: number) {
        this._yAxis.scale().domain([min, max]);
    }

    private transition(time = 200) {
        this.selection.transition().duration(Globals.COMPONENT_TRANSITION_TIME).call(this._yAxis);
        // Reorder the axis path to appear over the ticks
        this.svg.selectAll('.y.axis path').raise();
    }

    /**
     *
     * Initializes a new vertical axis
     *
     * @private
     * @param {(string | number)} Width Width of the axis
     * @param {string} yAxisFormat Format of the axis. This parameter is only valid when using a time axis.
     * @param {string} yAxisType Type of the axis. It can be: linear or categorical.
     *
     * @memberOf XAxis
     */

    private initializeYAxis(width: string | number, height: number, yAxisFormat: string, yAxisType: string, yAxisGrid: boolean): void {
        switch (yAxisType) {
            case 'linear':
                this._yAxis = (this.orient === 'left')
                    ? axisLeft(scaleLinear().range([height, 0])).tickFormat(format(yAxisFormat))
                    : axisRight(scaleLinear().range([height, 0])).tickFormat(format(yAxisFormat));
                break;
            case 'categorical':
                this._yAxis = (this.orient === 'left')
                    ? axisLeft(scaleBand().rangeRound([height, 0]).padding(0.1).align(0.5))
                    : axisRight(scaleBand().rangeRound([height, 0]).padding(0.1).align(0.5));
                break;
            default:
                throw new Error('Not allowed type for YAxis. Only allowed "time",  "linear" or "categorical". Got: ' + yAxisType);
        }

        if (yAxisGrid && this.orient === 'left') {
            this._yAxis
                .tickSizeInner(-width)
                .tickSizeOuter(0)
                .tickPadding(20);
        }

        //
    }

    get yAxis() {
        return this._yAxis;
    }
}

export default YAxis;