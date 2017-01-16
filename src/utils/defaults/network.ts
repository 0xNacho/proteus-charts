import * as Colors from '../colors';

export const defaults : any = {
    selector: '#chart',
    colorScale: Colors.category7(),
    //margins
    marginTop: 20,
    marginRight: 250,
    marginBottom: 130,
    marginLeft: 150,
    //Width & height
    width: '100%', // %, auto, or numeric
    height: 250,
    //Node
    nodeRadius: 8.5,
    legend: true,
    //Network
    linkWeight: 1,
    nodeWeight: 8,
    minLinkValue: 0,
    maxLinkValue: 10,
    minNodeWeight: 0,
    maxNodeWeight: 100,
    weighted: false,
    //Labels
    labelShow: true,
    labelField: 'id',
    //Events
    zoom: true,
    onDown(d: any) {
    },
    onHover(d: any) {
    },
    onLeave(d: any) {
    },
    onClick(d: any) {
    },
    onUp(d: any) {
    }
};