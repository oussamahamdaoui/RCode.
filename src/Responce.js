const {
  looseEqual,
  isFunction,
} = require('./util');

class Responce {
  constructor(expected) {
    this.expected = expected;
  }

  equqls(responce) {
    const expectKeys = Object.keys(this.expected);
    let ret = true;
    expectKeys.forEach((key) => {
      if (isFunction(this.expected[key])) {
        const resArray = this.expected[key](responce[key]);
        if (looseEqual(resArray[0], resArray[1]) === false) {
          ret = false;
        }
      } else if (looseEqual(this.expected[key], responce[key]) === false) {
        ret = false;
      }
    });
    return ret;
  }
}

module.exports = Responce;
