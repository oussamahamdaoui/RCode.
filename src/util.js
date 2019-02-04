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

function scrollIt(destination, duration = 200, easing = 'linear', callback) {
  const easings = {
    linear(t) {
      return t;
    },
    easeInQuad(t) {
      return t * t;
    },
    easeOutQuad(t) {
      return t * (2 - t);
    },
    easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    },
    easeInCubic(t) {
      return t * t * t;
    },
    easeOutCubic(t) {
      return (--t) * t * t + 1; // eslint-disable-line
    },
    easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    },
    easeInQuart(t) {
      return t * t * t * t;
    },
    easeOutQuart(t) {
      return 1 - (--t) * t * t * t; // eslint-disable-line
    },
    easeInOutQuart(t) {
      return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t; // eslint-disable-line
    },
    easeInQuint(t) {
      return t * t * t * t * t;
    },
    easeOutQuint(t) {
      return 1 + (--t) * t * t * t * t; // eslint-disable-line
    },
    easeInOutQuint(t) {
      return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t; // eslint-disable-line
    },
  };

  const start = window.pageYOffset;
  const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

  const documentHeight = Math.max(document.body.scrollHeight,
    document.body.offsetHeight, document.documentElement.clientHeight,
    document.documentElement.scrollHeight, document.documentElement.offsetHeight);
  const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
  const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
  const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight
    ? documentHeight - windowHeight : destinationOffset);

  if ('requestAnimationFrame' in window === false) {
    window.scroll(0, destinationOffsetToScroll);
    if (callback) {
      callback();
    }
    return;
  }

  function scroll() {
    const now = 'now' in window.performance ? performance.now() : new Date().getTime();
    const time = Math.min(1, ((now - startTime) / duration));
    const timeFunction = easings[easing](time);
    window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

    if (Math.abs(window.pageYOffset - destinationOffsetToScroll) < 2) {
      if (callback) {
        callback();
      }
      return;
    }

    requestAnimationFrame(scroll);
  }

  scroll();
}

const $ = (selector) => {
  const res = document.querySelectorAll(selector);
  return res.length === 1 ? res[0] : res;
};

module.exports = {
  looseEqual,
  isArray,
  isInt,
  isFunction,
  isString,
  $,
  scrollIt,
};
