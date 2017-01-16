import { nest, timeParse } from 'd3';

export function simple2stacked (data) : [any] {
  return nest().key((d) => d.x).rollup((array) => {
    let r = {};
    for (let i = 0; i < array.length; i++) {
      let object = array[i];
      if (object) {
        r[object.key] = object.y;
      }
    }
    return r;
  }).entries(data);
}

export function simple2nested (data, key = 'key') : [any]{
  return nest().key((d) => d[key]).entries(data);
}

export function nested2simple(data) {
  let array = Array();
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].values.length; j++) {
      let key = data[i].key;
      let x = data[i].values[j].x;
      let y = data[i].values[j].y;
      array.push({ key: key, x: x, y: y });
    }
  }
  return array;
}

export function simple2Linked(data) {
  var linkedData = { links: [], nodes: [] };
  data.map((d) => d.class === 'link' ? linkedData.links.push(d) : linkedData.nodes.push(d));
  return linkedData;
}


export function convertPropretiesToTimeFormat(data, properties, format) {
  data.forEach((d) => {
    properties.map((p) => {
      d[p] = timeParse(format)(d[p]);
    });
  });
}

export function convertByXYFormat(data, xAxisFormat: string, xAxisType: string, yAxisFormat: string, yAxisType: string) {
  data.forEach((d) => {
    //parse x coordinate
    switch (xAxisType) {
      case 'time':
        d.x = timeParse(xAxisFormat)(d.x);
        break;
      case 'linear':
        d.x = +d.x;
        break;
    }
    //parse Y coordinate
    switch (yAxisType) {
      case 'time':
        d.y = timeParse(yAxisFormat)(d.y);
        break;
      case 'linear':
        d.y = +d.y;
        break;
    }
  });
  return data;
}