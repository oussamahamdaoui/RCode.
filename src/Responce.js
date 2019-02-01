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
        const arrayOfTests = this.expected[key](responce[key]);
        arrayOfTests.forEach((test) => {
          const resp = test[0];
          const exp = test[1];
          if (!looseEqual(resp, exp)) {
            ret = false;
          }
        });
      } else if (looseEqual(this.expected[key], responce[key]) === false) {
        ret = false;
      }
    });
    return ret;
  }
}

module.exports = Responce;
