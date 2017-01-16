
export function isArray(d) {
  return d && d.constructor === Array && d instanceof Array;
}

export function isObject(d) {
  return d && d.constructor === Object && d instanceof Object;
}

export function isFunction(func) {
  return func && {}.toString.call(func) === '[object Function]';
}

export function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

export function isEven(n) {
  return n % 2 === 0;
}

export function isPercentage(n) {
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

export function keys(array, field) {
  var keys = new Set();
  var element = null;

  if (!array || !array.length) {
    return [];
  }

  for (let i = 0; i < array.length; i++) {
    element = field ? array[i][field] : array[i];
    if (element) {
      keys.add(element);
    }
  }
  return keys;
}


export function sortBy(array, o) {
  var _toString = Object.prototype.toString;
  var _parser = (x) => { return x; };
  var _getItem = (x) => {
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

export function findElement(arr, propName, propValue) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i][propName] === propValue) {
      return arr[i];
    }
  }
  return null;
}

export function copy(object){
  return object != null ? JSON.parse(JSON.stringify(object)) : null;
}

export function deg2rad(deg) {
  return deg * Math.PI / 180;
}