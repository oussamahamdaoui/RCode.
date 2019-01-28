const Lang = require('./Lang');

function toBetterExercice(e) {
  const ret = {};
  const etx = e.text;
  const langs = Object.keys(etx);

  // cree les clefs;
  const texts = Object.keys(etx[langs[0]]);

  texts.forEach((key) => {
    ret[key] = {};
  });

  langs.forEach((lang) => {
    texts.forEach((text) => {
      ret[text][lang] = etx[lang][text];
    });
  });

  texts.forEach((key) => {
    ret[key] = new Lang(ret[key]);
  });
  return { expexted: e.expexted, text: ret, startWith: e.startWith };
}

module.exports = toBetterExercice;
