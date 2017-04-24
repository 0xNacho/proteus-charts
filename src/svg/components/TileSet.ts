import Component from "./Component";
import XAxis from "./XAxis";
import YAxis from "./YAxis";
import { max, min } from "d3-array";
import Globals from "../../Globals";

class TileSet extends Component {
    private x: XAxis;
    private y: YAxis;

    constructor(x: XAxis, y: YAxis) {
        super();
        this.x = x;
        this.y = y;
    }

    render() {
        // Do nothing. (a tile set allways needs data)
    }

    public update(data: [any]) {
        let propertyX = this.config.get('propertyX'),
            propertyY = this.config.get('propertyY'),
            propertyZ = this.config.get('propertyZ'),
            colorScale = this.config.get('colorScale'),
            xStep: number = this.config.get('xStep'),
            yStep: number = this.config.get('yStep'),
            yAxisType = this.config.get('yAxisType'),
            xAxisType = this.config.get('xAxisType'),
            x = this.x.xAxis.scale(),
            y = this.y.yAxis.scale(),
            width: number = 0,
            heigth: number = 0,
            minX = min(data, (d) => d[propertyX]),
            minY = min(data, (d) => d[propertyY]),
            maxX = max(data, (d) => d[propertyX]),
            maxY = max(data, (d) => d[propertyY]);

        colorScale.domain([min(data, (d) => d[propertyZ]), max(data, (d) => d[propertyZ])]);

        if (xAxisType === 'linear') {
            this.x.updateDomainByMinMax(minX, maxX + xStep);
            this.x.transition(Globals.COMPONENT_ANIMATION_TIME);
            width = x(xStep) - x(0);
        } else if (xAxisType === 'categorical') {
            width = x.step();
        }
        if (yAxisType === 'linear') {
            this.y.updateDomainByMinMax(minY, maxY + yStep);
            this.y.transition(Globals.COMPONENT_ANIMATION_TIME);
            heigth = y(0) - y(yStep);
        } else if (yAxisType === 'categorical') {
            heigth = y.step();
        }

        // Data join
        let tiles = this.svg.selectAll('.tile')
            .data(data);

        // Update
        tiles.attr('class', 'tile')
            .transition()
            .duration(Globals.COMPONENT_ANIMATION_TIME)
            .attr('x', (d) => x(d[propertyX]))
            .attr('y', (d) => {
                if (yAxisType === 'linear') {
                    return y(d[propertyY] + yStep);
                } else {
                    return y(d[propertyY]);
                }
            })
            .attr('width', width)
            .attr('height', heigth)
            .attr('fill-opacity', 1)
            .style('fill', (d) => colorScale(d[propertyZ]));

        // Enter
        let entering = tiles
            .enter().append('rect')
            .attr('class', 'tile')
            .attr('x', (d) => x(d[propertyX]))
            .attr('y', (d) => {
                if (yAxisType === 'linear') {
                    return y(d[propertyY] + yStep);
                } else {
                    return y(d[propertyY]);
                }
            })
            .attr('width', width)
            .attr('height', heigth)
            .style('fill', (d) => colorScale(d[propertyZ]))
            .attr('fill-opacity', 0)
            .transition()
            .duration(Globals.COMPONENT_ANIMATION_TIME)
            .attr('fill-opacity', 1);

        // Exit
        tiles.exit().remove();

        tiles
            .on('mousedown.user', this.config.get('onDown'))
            .on('mouseup.user', this.config.get('onUp'))
            .on('mouseleave.user', this.config.get('onLeave'))
            .on('mouseover.user', this.config.get('onHover'))
            .on('click.user', this.config.get('onClick'));
    }
}

export default TileSet;