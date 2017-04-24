import * as charts from '../charts/';
import * as colors from './colors';
import * as defaults from './defaults/';


export function isArray(d: any) {
  return d && d.constructor === Array && d instanceof Array;
}

export function isObject(d: any) {
  return d && d.constructor === Object && d instanceof Object;
}

export function isFunction(func: any) {
  return func && {}.toString.call(func) === '[object Function]';
}

export function isNumeric(n: any) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

export function isEven(n: number) {
  return n % 2 === 0;
}

export function isPercentage(n: any) {
  let split = null;
  let number = null;
  if (!n || typeof n !== 'string') {
    return false;
  }
  split = n.split('%');
  number = (+split[0]);
  return split.length === 2 &&
    (number >= 0) &&
    (number <= 100);
}

export function keys(array: Array<any>, field: string): Set<any> {
  var keys = new Set();
  var element = null;

  if (!array || !array.length) {
    return new Set();
  }

  for (let i = 0; i < array.length; i++) {
    element = field ? array[i][field] : array[i];
    if (element) {
      keys.add(element);
    }
  }
  return keys;
}


export function sortBy(array: Array<any>, o: any) {
  let _toString = Object.prototype.toString;
  let _parser = (x: any) => x;
  let _getItem = (x: any) => {
    return _parser((x !== null && typeof x === 'object' && x[o.prop]) || x);
  };

  if (!(array instanceof Array) || !array.length) {
    return [];
  }
  if (_toString.call(o) !== '[object Object]') {
    o = {};
  }
  if (typeof o.parser !== 'function') {
    o.parser = _parser;
  }
  o.desc = o.desc ? -1 : 1;
  return array.sort((a, b) => {
    a = _getItem.call(o, a);
    b = _getItem.call(o, b);
    return o.desc * (a < b ? -1 : +(a > b));
  });
}

export function findElement(arr: Array<any>, propName: string, propValue: any) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i][propName] === propValue) {
      return arr[i];
    }
  }
  return null;
}

export function copy(object: {}) {
  return object != null ? JSON.parse(JSON.stringify(object)) : null;
}

export function deg2rad(deg: number) {
  return deg * Math.PI / 180;
}

/**
 * This is intended as a test function for a filter. It returns a function that is true when any of the`keys`
 *  of the tested object contains any of the`values`
 *
 * @param values
 * @param keys
 * @returns {(obj:any)=>boolean}
 */
export function isValuesInObjectKeys(values: Array<any>, keys: Array<string>): Function {
  return function (obj: any): boolean {
    return !hasValuesWithKeys(obj, values, keys);
  }
}

export function hasValuesWithKeys(obj: any, values: Array<any>, keys: Array<any>) {
  for (let key of keys) {
    let value: any = obj[key];
    if (values.indexOf(value) != -1) {
      return true;
    }
  }
  return false;
}

export function arrayDiff(a: Array<string>, b: Array<string>) {
  return b.filter((i) => a.indexOf(i) < 0);
};

export function filterKeys(datum: any, keys: any[]) {
    let anemicDatum: any = {};

    for (let k of keys) {
        anemicDatum[k] = datum[k];
    }

    return anemicDatum;
}

// /** 
//  * Get the list of visualizations available in Proteic.js
//  */
export function getAvailableVisualizations(): String[] {
  let visualizations = new Set<String>();

  for (let property in charts) {
    if (typeof property == 'string' && property !== charts.Chart.prototype.constructor.name) {
      visualizations.add(property);
    }
  }

  return Array.from(visualizations);
}

export function getDefaultOptions(visualization: string) {
  if (visualization in defaults) {
    return (<any>defaults)[visualization];
  } else {
    throw new Error('Unrecognised visualization.');
  }
}

export function getColorScales() {
  let colorScales = new Set<String>();

  for (let property in colors) {
    if (typeof property == 'string') {
      colorScales.add(property);
    }
  }

  return Array.from(colorScales);
}

export function getColorScale(name: string) {
  if (name in colors) {
    return (<any>colors)[name]
  } else {
    throw new Error('Unrecognised color scale.');
  }
}
