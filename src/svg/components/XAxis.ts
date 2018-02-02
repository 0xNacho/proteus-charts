import {
    map,
    scaleTime,
    scaleLinear,
    scaleBand,
    format,
    axisBottom,
    min as d3Min,
    max as d3Max,
    Axis,
    extent
} from 'd3';
import Component from './Component';
import { Globals } from '../../../index';

class XAxis extends Component {

    private _xAxis: any;

    /**
    * Boolean variable whether check other components update x-domain or not
    * It is set by @see setUpdateDomainByOhterComponent()
    * @private
    * @type {boolean}
    * @memberof XAxis
    */
    private updateXDomainByOhterComponents: boolean = false;

    constructor() {
        super();
    }

    public render(): void {
        let width = this.config.get('width'),
            height = this.config.get('height'),
            xAxisFormat = this.config.get('xAxisFormat'),
            xAxisType = this.config.get('xAxisType'),
            xAxisLabel = this.config.get('xAxisLabel'),
            xAxisGrid = this.config.get('xAxisGrid'),
            xTicksTextRotation = this.config.get('xTicksTextRotation');

        this.initializeXAxis(width, height, xAxisFormat, xAxisType, xAxisGrid);

        let axis = this.svg
            .append('g')
            .attr('class', `x axis ${xAxisType}`)
            .attr('transform', 'translate(0,' + height + ')')
            .call(this._xAxis);

        this.rotateTicksText(axis.selectAll('text'));

        this.svg
            .append('text')
            .attr('class', 'xaxis-title')
            .attr('text-anchor', 'middle')
            .attr('x', width / 2)
            .attr('y', height + 40)
            .text(xAxisLabel);
    }

    public update(data: [any]): void {
        let propertyX = this.config.get('propertyX');
        let xAxisType = this.config.get('xAxisType');

        let xAxisMin = this.config.get('xAxisMin'),
            xAxisMax = this.config.get('xAxisMax');

        if (!this.updateXDomainByOhterComponents) {
            if (xAxisType === 'linear') {
                let [min, max] = extent(data, (d) => d[propertyX] ||
                                    (d[this.config.get('propertyStart')] && d[this.config.get('propertyEnd')]));
                if (xAxisMin != 'auto') {
                    min = (min < xAxisMin) ? min : xAxisMin;
                }
                if (xAxisMax != 'auto') {
                    max = (max > xAxisMax) ? max : xAxisMax;
                }

                this.updateDomainByMinMax(min, Math.ceil(max));

            } else if (xAxisType === 'time') {
                let [min, max] = extent(data, (d) => d[propertyX] ||
                                    (d[this.config.get('propertyStart')] && d[this.config.get('propertyEnd')]));
                if (xAxisMin != 'auto') {
                    min = (min < xAxisMin) ? min : xAxisMin;
                }
                if (xAxisMax != 'auto') {
                    max = (max > xAxisMax) ? max : xAxisMax;
                }

                this.updateDomainByMinMax(min, max);

            } else {
                let keys: string[] = map(data, (d) => d[propertyX]).keys();
                this.updateDomainByKeys(keys);
            }
        }

        this.transition();
    }

    /**
    * @method
    * Check the other components calling 'updateDomainByMinMax' is configured
    * It can prevent from updating x-domain frequently
    * @private
    * @memberof XAxis
    * @todo If new components with updateDomainByMinMax is added, it is called in render() of the components
    * @see TileSet.ts @see HistogramBarset.ts ..
    */
    public setUpdateDomainByOhterComponent(): void {
        if (this.updateXDomainByOhterComponents == false) {
            this.updateXDomainByOhterComponents = true;
        }
    }

    private rotateTicksText(ticksText: any) {
        let rotation = this.config.get('xTicksTextRotation') || 0;

        switch (rotation) {
            case 65:
                ticksText
                    .attr('transform', `rotate(${rotation})`)
                    .attr('dx', '0.5em')
                    .attr('dy', '0.1em')
                    .style('text-anchor', 'start');
                break;
            case -65:
                ticksText
                    .attr('transform', `rotate(${rotation})`)
                    .attr('dx', '-0.5em')
                    .attr('dy', '0.5em')
                    .style('text-anchor', 'end');
                break;
            case -90:
                ticksText
                    .attr('transform', `rotate(${rotation})`)
                    .attr('dx', '-0.5em')
                    .attr('dy', '-0.25em')
                    .style('text-anchor', 'end');
                break;
            default:
        }
    }

    /**
     * Update x domain by keys
     *
     * @private
     * @memberOf XAxis
     * @param keys
     */
    private updateDomainByKeys(keys: string[]) {
        this._xAxis.scale().domain(keys);
    }

    public updateDomainByMinMax(min: number, max: number) {
        this._xAxis.scale().domain([min, max]);
    }

    public transition() {
        let axis = this.svg.selectAll('.x.axis')
            .transition()
            .duration(Globals.COMPONENT_TRANSITION_TIME)
            .call(this._xAxis);
        this.rotateTicksText(axis.selectAll('text'));
        // Reorder the axis path to appear over the ticks
        this.svg.select('.x.axis path').raise();
    }

    /**
     *
     * Initializes a new horizontal axis
     *
     * @private
     * @param {(string | number)} Width Width of the axis
     * @param {string} xAxisFormat Format of the axis. This parameter is only valid when using a time axis.
     * @param {string} xAxisType Type of the axis. It can be: time, linear or categorical.
     *
     * @memberOf XAxis
     */
    private initializeXAxis(
        width: number,
        height: string | number,
        xAxisFormat: string,
        xAxisType: string,
        xAxisGrid: boolean
    ): void {
        switch (xAxisType) {
            case 'time':
                this._xAxis = axisBottom(scaleTime().range([0, width]));
                break;
            case 'linear':
                this._xAxis = axisBottom(scaleLinear().range([0, width]))
                    .tickFormat(format(xAxisFormat));
                break;
            case 'categorical':
                this._xAxis = axisBottom(scaleBand().rangeRound([0, width])
                    .padding(0.1).align(0.5));
                break;
            default:
                throw new Error(`Not allowed type for XAxis. Only allowed time,
                linear or categorical. Got:${xAxisType}`);
        }

        if (xAxisGrid) {
            this._xAxis
                .tickSizeInner(-height)
                .tickPadding(9);
        }
    }

    get xAxis() {
        return this._xAxis;
    }

    get scale() {
        return this._xAxis.scale();
    }

    get range(): [number, number] {
        return this._xAxis.scale().range();
    }

    public clear() {
        this.updateDomainByMinMax(0, 1);
        this.transition();
    }
}

export default XAxis;
