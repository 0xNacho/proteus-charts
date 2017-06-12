import Component from './Component';
import XAxis from './XAxis';
import YAxis from './YAxis';
import Globals from '../../Globals';
import { easeLinear } from 'd3';

class Alerts extends Component {
    private x: XAxis;
    private y: YAxis;
    private alertsContainer: any;

    constructor(x: XAxis, y: YAxis) {
        super();
        this.x = x;
        this.y = y;
    }

    render() {
        this.alertsContainer = this.svg.append('g')
            .attr('class', 'alerts');
    }

    public update(data: [any], events: Map<string, any>) {
        let propertyX = this.config.get('propertyX'),
            propertyY = this.config.get('propertyY'),
            propertyKey = this.config.get('propertyKey'),
            annotations = this.config.get('annotations'),
            y = this.y.yAxis.scale(),
            x = this.x.xAxis.scale(),
            alertVariable: string = this.config.get('alertVariable'),
            alertFunction: Function = this.config.get('alertFunction'),
            alertCallback = this.config.get('alertCallback');

            let alertSerie = data
                .filter((d) => {
                    return d[propertyKey] === alertVariable && 
                        alertFunction(d[propertyY], events);
                });        

            // JOIN new and old data
            let alerts = this.alertsContainer.selectAll(`.alert`)
            .data(alertSerie);

            // EXIT
            alerts.exit().remove();

            // Update old data
            alerts
                .attr('cx', (d: any) => x(d[propertyX]))
                .attr('cy', (d: any) => y(d[propertyY]));

            // ENTER
            alerts = alerts.enter().append('circle')
            .attr('class', 'alert')
            .attr('cx', (d: any) => x(d[propertyX]))
            .attr('cy', (d: any) => y(d[propertyY]))
            .attr('r', 20)
            .transition(Globals.COMPONENT_ANIMATION_TIME)
            .attr('r', 5)
            .call((s: any) => s.each((d: any) => alertCallback(d)));
    }

    public clear(){
        console.warn('TODO: Not yet implemented');
    }
}

export default Alerts;