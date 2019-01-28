class Lang {
  constructor(obj) {
    this.obj = obj;
  }

  toString(lang) {
    let l = lang || navigator.language || navigator.userLanguage;
    l = l.substr(0, 2);
    return this.obj[l] ? this.obj[l] : this.obj.en;
  }
}

module.exports = Lang;
