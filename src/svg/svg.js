class SvgChart {

    constructor(chartContext) {
        var clazz = this.constructor.name;
        if (clazz === 'SvgChart') {
            throw new Error(clazz + ' is non-instanciable');
        }
        this._initialized = false;
        this.cType = chartContext.cType;
        this._loadConfigOnContext(chartContext.config);

        this.interactiveElements = null;
    }

    draw(data) {
        if (this._sortData) {
            utils.sortBy(data, {
                prop: this._sortData.prop,
                desc: this._sortData.descending
            });
        }

        if (!this._initialized) {
            this._initialize();
        }

    }

    _initialize() {
        var width = this.width + this.margin.left + this.margin.right;
        var height = this.height + this.margin.left + this.margin.right;

        //Create a global 'g' (group) element
        this.svg = d3
            .select(this.selector).append('svg')
            .attr({ width, height })
            .append('g')
            .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

        //Create tooltip (d3-tip)
        if (this.tip) {
            this.tooltip = d3.tip()
                .attr('class', 'd3-tip')
                .style({
                    'line-height': 1,
                    'padding': '12px',
                    'background': 'rgba(0, 0, 0, 0.8)',
                    'color': '#fff',
                    'border-radius': '2px',
                    'pointer-events': 'none'
                })
                .html(this.tip);
            this.svg.call(this.tooltip);
        }

        //Append a new group with 'x' aXis
        this.svg.append('g')
            .attr('class', 'x axis')
            .attr('transform', 'translate(0,' + this.height + ')')
            .call(this.xAxis);

        //Append a new group with 'y' aXis
        this.svg.append('g')
            .attr('class', 'y axis')
            .attr('stroke-dasharray', '1, 2')
            .call(this.yAxis)
            .append('text');

        // Append axes labels
        this.svg.append('text')
            .attr('text-anchor', 'middle')
            .attr('class', 'x axis label')
            .attr('x', this.width / 2)
            .attr('y', this.height + this.margin.bottom)
            .text(this.xAxisLabel);
        this.svg.append('text')
            .attr('text-anchor', 'middle')
            .attr('class', 'y axis label')
            .attr('transform', 'rotate(-90)')
            .attr('x', - this.height / 2)
            .attr('y', - this.margin.left / 1.3)
            .text(this.yAxisLabel);
    }

    _applyCSS() {
        var style = this.style;
        var styleValue = null;

        for (let key in style) {
            styleValue = style[key];
            d3.selectAll(key).style(styleValue);
        }
    }

    on(events = {}) {
        for (let key in events) {
            let action = events[key];
            this.interactiveElements.on(key + '.user', action);
        }

    }
    _calculateWidth(width) {
        if (width === 'auto') {
            return d3.select(this.selector)
                .node()
                .getBoundingClientRect()
                .width;
        }
        else if (utils.isNumeric(width)) {
            //check container width TODO
            return width;
        }
        else if (utils.isPercentage(width)) {
            let containerWidth, percentage;
            containerWidth = d3.select(this.selector)
                .node()
                .getBoundingClientRect()
                .width;
            percentage = width.split('%')[0];
            return Math.round(percentage * containerWidth / 100);
        } else {
            throw Error('Unknow chart width: ' + width);
        }

    }

    _loadConfigOnContext(config) {
        config = config || { events: {}, markers: {}, xaxis: {}, yaxis: {} };
        if (!config.events) {
            config.events = {};
        }
        if (!config.markers) {
            config.markers = {};
        }
        if (!config.xaxis) {
            config.xaxis = {};
        }
        if (!config.yaxis) {
            config.yaxis = {};
        }
        this.selector = config.selector || _default[this.cType].selector;
        this.margin = config.margin || _default[this.cType].margin;
        this.width = config.width ? this._calculateWidth(config.width) - this.margin.left - this.margin.right
            : this._calculateWidth(_default[this.cType].width) - this.margin.left - this.margin.right;
        this.height = config.height || _default[this.cType].height;
        this.ticks = config.ticks || _default[this.cType].ticks;
        this.xticks = config.xaxis.ticks || _default[this.cType].xaxis.ticks;
        this.yticks = config.yaxis.ticks || _default[this.cType].yaxis.ticks;
        this.tickLabel = config.tickLabel || _default[this.cType].tickLabel;
        this.transitionDuration = config.transitionDuration || _default[this.cType].transitionDuration;
        //this.tooltip is d3-tip, so that renaming this bar to 'tip' is required
        this.tip = config.tooltip || _default[this.cType].tooltip;
        this.events = {};
        this.events.down = config.events.down || _default[this.cType].events.down;
        this.events.up = config.events.up || _default[this.cType].events.up;
        this.events.over = config.events.over || _default[this.cType].events.over;
        this.events.click = config.events.click || _default[this.cType].events.click;
        this.events.leave = config.events.leave || _default[this.cType].events.leave;
        this._sortData = config.sortData || _default[this.cType].sortData;
        this.style = config.style || _default[this.cType].style;
        this.colorScale = config.colorScale || _default[this.cType].colorScale;
        this.xAxisLabel = config.xaxis.label || _default[this.cType].xaxis.label;
        this.yAxisLabel = config.yaxis.label || _default[this.cType].yaxis.label;
    }

    _endAllTransitions(transition, callback) {
        var n;
        if (transition.empty()) {
            callback();
        }
        else {
            n = transition.size();
            transition.each('end', () => {
                n--;
                if (n === 0) {
                    callback();
                }
            });
        }
    }

    _removeUserEvents() {
        var userEvents = [
            'mousedown.user',
            'mouseup.user',
            'mouseleave.user',
            'mouseover.user',
            'click.user',
            'mouseover.tip',
            'mouseout.tip'
        ];
        for (let key in userEvents) {
            this.interactiveElements.on(userEvents[key], null);
        }
    }
    _updateXaxis(){
        this.svg.select('.x.axis').transition().duration(this.transitionDuration).call(this.xAxis);
    }
    _updateYaxis(){
        this.svg.select('.y.axis').transition().duration(this.transitionDuration).call(this.yAxis);
    }
    _updateAxis() {
        this._updateXaxis();
        this._updateYaxis();
    }
}