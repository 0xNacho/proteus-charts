var utils = utils || {
  isArray(d) {
    return d && d.constructor === Array && d instanceof Array;
  },

  isObject(d) {
    return d && d.constructor === Object && d instanceof Object;
  },

  isFunction(func) {
    return func && {}.toString.call(func) === '[object Function]';
  },

  isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  },

  isPercentage(n) {
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

  },

  keys(array, field) {
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
  },

  getNumberOfDifferentArrayKeys(array, field) {
    var keys = [];
    var element = null;

    if (!array || !array.length) {
      return 0;
    }

    for (let i = 0; i < array.length; i++) {
      element = field ? array[i][field] : array[i];
      if (element) {
        keys.push(element);
      }
    }
    return d3.set(keys).size();
  },

  sortBy(array, o) {
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
  },
  findElement(arr, propName, propValue) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i][propName] === propValue) {
        return arr[i];
      }
    }
    return null;
    // will return null if not found; you could return a default instead
  },
  deg2rad(deg) {
    return deg * Math.PI / 180;
  }
};


//Extends Set functionality
Set.prototype.equals = function (as) {
  if (as.size !== this.size) return false;
  for (var a of as) if (!this.has(a)) return false;
  return true;
}