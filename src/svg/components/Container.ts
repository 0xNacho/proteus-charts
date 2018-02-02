import { select, Selection, zoom } from 'd3';
import { Observable } from 'rxjs/Observable';

import Component from './Component';
import Config from '../../Config';
import Globals from '../../Globals';
import GlobalInjector from '../../GlobalInjector';

class Container {

    private svg: Selection<any, any, any, any>;
    private config: Config;
    private components: Component[] = [];
    private visibilityObservable: Observable<any>; // TODO: Inject with annotations?
    protected udpateWithTransition: boolean = true;

    constructor(config: Config) {
        this.visibilityObservable = GlobalInjector.getRegistered('onVisibilityChange');
        this.visibilityObservable.subscribe((event: any) => {
            this.udpateWithTransition = !event.hidden;
        });

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
    // called by constructor
    private initializeContainer(
        selector: string,
        width: (number | string),
        height: (number | string),
        marginLeft: number,
        marginTop: number,
    ): void {
        this.svg = select(selector)
            .style('position', 'relative')
            .style('width', `${width}px`)
            .style('height', `${height}px`)
            .append('svg:svg')
            .attr('preserveAspectRatio', 'xMinYMin meet')
            .attr('viewBox', '0 0 ' + width + ' ' + height)
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
            if (this.udpateWithTransition) {
                component.transition();
            }
        }
    }

    public transitionComponents(): void {
        for (let i = 0; i < this.components.length; i++) {
            let component = this.components[i];
            component.transition();
        }
    }

    public translate(x: Number, y: Number) {
        this.svg.attr('transform', `translate(${x}, ${y})`);
    }

    public viewBox(w: number, h: number) {
        this.svg.attr('viewBox', '0 0 ' + w + ' ' + h);
    }

    public zoom(z: any) {
        this.svg.call(zoom().scaleExtent([1 / 2, 4]).on('zoom', z));
    }

    public getComponents(): Component[] {
        return this.components;
    }

    public getComponent(componentName: string): Component {
        return this.components.find((c: Component) => componentName === c.constructor.name);
    }
}

export default Container;
