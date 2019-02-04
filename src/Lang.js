const { isFunction } = require('./util');

class Lang {
  constructor(obj) {
    this.obj = obj;
  }

  toString(params, lang) {
    let l = lang || navigator.language || navigator.userLanguage;
    l = l.substr(0, 2);
    const ret = this.obj[l] ? this.obj[l] : this.obj.en;
    if (isFunction(ret)) {
      return ret([...params]);
    }
    return ret;
  }
}

module.exports = Lang;
