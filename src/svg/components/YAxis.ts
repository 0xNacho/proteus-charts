import Component from './Component';
import Globals from '../../Globals';
import {
    stack as d3Stack,
    map,
    scaleLinear,
    scaleBand,
    format,
    axisLeft,
    axisRight,
    min as d3Min,
    max as d3Max
} from 'd3';
import { simple2stacked } from '../../utils/data/transforming';

class YAxis extends Component {

    private _yAxis: any;
    private _orient: string = 'left';
    private selection: any = null;

    /**
    * Current Max and Min y-value of data including one changed from other components
    * It can be used as role of standard y-domain in components updating new y-domain
    * (ex) Annotations, ConfidenceBand
    * Warning: It is different values from _yAxis.scale().domain() @see updateDomainByMinMax()
    * @private
    * @type {[number, number]}
    * @memberof YAxis
    */
    private yExtent: [number, number];

    /**
    * Boolean variable whether check other components update y-domain or not
    * It is set by @see setUpdateDomainByOhterComponent()
    * @private
    * @type {boolean}
    * @memberof YAxis
    */
    private updateYDomainByOhterComponents: boolean = false;


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
            .attr('transform', this.orient === 'left'
                ? 'translate( 0, 0 )'
                : 'translate( ' + width + ', 0 )'
            )
            .call(this._yAxis);

        this.svg
            .append('text')
            .attr('class', 'yaxis-title')
            .attr('transform', 'rotate(-90)')
            .attr('text-anchor', 'middle')
            .attr('x', 0 - height / 2)
            .attr('y', 0 - 55)
            .text(yAxisLabel);

        this.selection = yAxisG;
    }

    public update(data: any): void {
        let propertyKey = this.config.get('propertyKey');
        let propertyY = this.config.get('propertyY');
        let propertyX = this.config.get('propertyX');

        let yAxisType = this.config.get('yAxisType'),
            yAxisShow = this.config.get('yAxisShow'),
            layoutStacked = this.config.get('stacked'),
            annotationsConfig = this.config.get('annotations');

        this.selection.attr('opacity', yAxisShow ? 1 : 0);
        let min: string = '0', max: string = '0';

        if (yAxisType === 'linear') {
            if (layoutStacked) {
                let keys: string[] = map(data, (d: any) => d[propertyKey]).keys();
                let stack = this.config.get('stack');
                let stackedData = stack.keys(keys)(simple2stacked(data, propertyX, propertyY, propertyKey));
                min = (d3Min(stackedData, (serie: any) => d3Min(serie, (d: any) => d[0])));
                max = (d3Max(stackedData, (serie: any) => d3Max(serie, (d: any) => d[1])));
            } else {
                let yAxisMin = this.config.get('yAxisMin'),
                    yAxisMax = this.config.get('yAxisMax');

                if (yAxisMin == 'auto') {
                    min = (d3Min(data, (d: any) => d[propertyY]));
                } else {
                    min = (d3Min(data, (d: any) => d[propertyY]) < yAxisMin)
                            ? d3Min(data, (d: any) => d[propertyY])
                            : yAxisMin;
                }

                if (yAxisMax == 'auto') {
                    max = (d3Max(data, (d: any) => d[propertyY]));
                } else {
                    max = (d3Max(data, (d: any) => d[propertyY]) > yAxisMax)
                            ? d3Max(data, (d: any) => d[propertyY])
                            : yAxisMax;
                }

            }

            let minNumber = +min;
            let maxNumber = +max;

            this.yExtent = [minNumber, maxNumber];
            if (!this.updateYDomainByOhterComponents) {
                this.updateDomainByMinMax(minNumber, maxNumber);
            }

        } else if (yAxisType === 'categorical') {
            let keys: string[] = map(data, (d: any) => d[propertyY]).keys().sort();
            this._yAxis.scale().domain(keys);
        } else {
            console.warn('could not recognize y axis type', yAxisType);
        }

        if (data !== null && data.length) {
            this.transition();
        }

    }

    /**
    * @method
    * Check the other components calling 'updateDomainByMinMax' is configured
    * It can prevent from updating y-domain frequently
    * @private
    * @memberof YAxis
    * @todo If new components with updateDomainByMinMax is added, it is called in render() of the components
    * @see TileSet.ts @see Annotations.ts @see ConfidenceBand.ts ..
    */
    public setUpdateDomainByOhterComponent(): void {
        if (this.updateYDomainByOhterComponents == false) {
            this.updateYDomainByOhterComponents = true;
        }
    }

    public updateDomainByMinMax(min: number, max: number) {
        let margin = (+max - min) * 0.1 || 1;
        this._yAxis.scale().domain([min, max + margin]);
    }

    public transition() {
        this.selection
            .transition()
            .duration(Globals.COMPONENT_TRANSITION_TIME)
            .call(this._yAxis);
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
     * @memberof XAxis
     */

    private initializeYAxis(
        width: string | number,
        height: number,
        yAxisFormat: string,
        yAxisType: string,
        yAxisGrid: boolean
    ): void {
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
                throw new Error(`Not allowed type for YAxis. Only allowed 'time',
                 'linear' or 'categorical'. Got: ` + yAxisType);
        }

        if (yAxisGrid && this.orient === 'left') {
            this._yAxis
                .tickSizeInner(-width)
                .tickSizeOuter(0)
                .tickPadding(20);
        }
    }

    get yAxis() {
        return this._yAxis;
    }

    get scale() {
        return this._yAxis.scale();
    }

    get range(): [number, number] {
        return this._yAxis.scale().range();
    }

    get extent(): [number, number] {
        return this.yExtent;
    }

    public clear() {
        this.updateDomainByMinMax(0, 1);
        this.transition();
    }
}

export default YAxis;
