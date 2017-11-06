import Component from './Component';
import XAxis from './XAxis';
import YAxis from './YAxis';
import Globals from '../../Globals';
import ConfidenceBand from './ConfidenceBand';
import {
    map
} from 'd3';

class Statistics extends Component {
    private x: XAxis;
    private y: YAxis;

    /**
    * statistics configuration divided by 'type'
    * type -> ('confidenceBand', ..)
    * @private
    * @memberof Statistics
    */
    private statisticsConfig: { [type: string]: any[] } = {};

    /**
    * An array of Type of statistics component extracted from statisticsConfig
    * type -> ['confidenceBand']
    * @private
    * @memberof Statistics
    */
    private statisticsType: string[] = [];

    /**
    * Confidence band component
    * @private
    * @memberof Statistics
    */
    private confidenceBand: ConfidenceBand;

    private statisticsCallback: Function; // call transition() in all components added to container

    constructor(x: XAxis, y: YAxis, statisticsCallback: Function) {
        super();
        this.x = x;
        this.y = y;
        this.statisticsCallback = statisticsCallback;
    }

    public render() {
        let statistics = this.config.get('statistics');
        this.svg.append('g').attr('class', 'statistics');

        statistics.map((s: any) => {
            if (this.statisticsType.indexOf(s.type) == -1) {
                this.statisticsType.push(s.type);
                this.statisticsConfig[s.type] = [];
            }

            this.statisticsConfig[s.type].push(s);
        });

        this.statisticsType.map((type: string) => {
            switch (type) {
                case 'confidenceBand':
                    // TODO discuss new design pattern of subsidiary component for statistics
                    this.confidenceBand = new ConfidenceBand(this.x, this.y, this.statisticsConfig[type]);
                    this.setComponent(this.confidenceBand);
                    break;
            }
        });
    }

    public update(data: [any]) {
        if (typeof data === undefined || data.length == 0 || !this.statisticsConfig) {
            this.clear();
            return;
        }

        this.statisticsType.map((type: string) => {
            switch (type) {
                case 'confidenceBand':
                    this.updateComponent(this.confidenceBand, data);
                    break;
            }
        });
    }

    private setComponent(component: Component) {
        component.configure(this.config, this.svg);
        component.render();
    }

    private updateComponent(component: Component, data: [any]) {
        component.update(data);
        this.statisticsCallback();
    }

    public transition() {
        this.confidenceBand.transition();
    }

    public clear() {
        this.svg.selectAll('.statistics').remove();
    }
}

export default Statistics;
