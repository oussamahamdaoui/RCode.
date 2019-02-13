const Lang = require('./Lang');

const USE_ONLY = new Lang({
  en: maxChars => `Use only ${maxChars} characters`,
});

module.exports = {
  USE_ONLY,
};
