import { select, Selection, zoom } from 'd3';

import Component from './Component';
import Config from '../../Config';
import Globals from '../../Globals';

class Container {

    private svg: Selection<any, any, any, any>;
    private config: Config;
    private components: Component[] = [];

    constructor(config: Config) {
        this.config = config;

        let selector: string = this.config.get('selector'),
            width: number = this.config.get('width'),
            height: number = this.config.get('height'),
            marginLeft: number = this.config.get('marginLeft'),
            marginRight: number = this.config.get('marginRight'),
            marginTop: number = this.config.get('marginTop'),
            marginBottom: number = this.config.get('marginBottom');

        width += marginLeft + marginRight;
        height += marginTop + marginBottom;

        this.initializeContainer(selector, width, height, marginLeft, marginTop);
    }

    /**
     * Add a new component to the current SVG container.
     * 
     * @param {Component} component A component to be added
     * @param {boolean} render If true, the component will be automatically rendered after adding it to the container
     * @returns {Container}
     * 
     * @memberOf Container
    
     */
    public add(component: Component): Container {
        this.components.push(component);
        component.configure(this.config, this.svg);
        component.render();
        return this;
    }

    /**
     * 
     * Initialize the svg container. 
     * @private
     * @param {string} selector Selector where this graph will be included in
     * @param {((number | string))} width Total width of the graph
     * @param {((number | string))} height Total height of the graph
     * @param {number} marginLeft Left margin
     * @param {number} marginTop Top margin
     * 
     * @memberOf Container
    
     */
    private initializeContainer(selector: string, width: (number | string), height: (number | string), marginLeft: number, marginTop: number): void {
        this.svg = select(selector)
            .style('position', 'relative')
            .style('width', `${width}px`)
            .style('height', `${height}px`)
            .append('svg:svg')
            .attr('preserveAspectRatio', "xMinYMin meet")
            .attr("viewBox", "0 0 " + width + " " + height)
            .attr('width', '100%')
            .attr('class', 'proteic')
            .attr('width', width)
            .attr('height', height)
            .style('position', 'absolute')
            .append('g')
            .attr('class', 'chartContainer')
            .attr('transform', 'translate(' + marginLeft + ',' + marginTop + ')');
    }

    /**
     * 
     * Update all the components previously added to this container.
     * @param {[{}]} data Data necessary to update the componnets
     * 
     * @memberOf Container
    
     */
    public updateComponents(data: [{}]): void {
        for (let i = 0; i < this.components.length; i++) {
            let component = this.components[i];
            component.update(data);
        }
    }

    public translate(x: Number, y: Number) {
        this.svg.attr('transform', `translate(${x}, ${y})`)
    }

    public viewBox(w: number, h: number) {
        this.svg.attr("viewBox", "0 0 " + w + " " + h);
    }

    public zoom(z: any) {
        this.svg.call(zoom().scaleExtent([1 / 2, 4]).on("zoom", z));
    }

    public addLoadingIcon() {
        let icon = Globals.LOADING_ICON;

        this.svg.append('image').attr('id', 'loadingIcon')
            .attr('width', '25%')
            .attr('height', '25%')
            .attr('x', '25%')
            .attr('y', '25%')
            .attr('xlink:href', icon)
    }

    public removeLoadingIcon() {
        this.svg.select('image[id="loadingIcon"]').transition().duration(200).remove();
    }
}

export default Container;