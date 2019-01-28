const isArray = arr => Array.isArray(arr);

const isString = str => typeof str === 'string' || str instanceof String;

const isInt = val => Number.isInteger(val);

const isFunction = func => func !== null && typeof func === 'function';

const isObject = obj => obj !== null && typeof obj === 'object';

const looseEqual = (a, b) => {
  if (a === b) return true;

  const isObjectA = isObject(a);
  const isObjectB = isObject(b);
  const isArrayA = isArray(a);
  const isArrayB = isArray(b);
  let ret = false;

  if (isArrayA && isArrayB) {
    ret = a.length === b.length && a.every((e, i) => looseEqual(e, b[i]));
  }

  if (a instanceof Date && b instanceof Date) {
    ret = a.getTime() === b.getTime();
  }

  if (isObjectA && isObjectB) {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    ret = keysA.length === keysB.length && keysA.every(key => looseEqual(a[key], b[key]));
  }

  return ret;
};

module.exports = {
  looseEqual,
  isArray,
  isInt,
  isFunction,
  isString,
};
