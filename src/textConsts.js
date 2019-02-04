const Lang = require('./Lang');

const USE_ONLY = new Lang({
  fr: maxChars => `Utiliser seulment ${maxChars} characteres`,
  en: maxChars => `Use only ${maxChars} characters`,
});

module.exports = {
  USE_ONLY,
};
