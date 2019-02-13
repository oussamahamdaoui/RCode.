const better = require('./../toBetterExercice');

module.exports = better({
  expexted: {
    max: 38,
  },
  maxChars: 69,
  startingCode: 'const table = [1,9,8,13,19,27,38,6,22];',
  text: {
    en: {
      title: 'Iterate array over arrays',
      text: 'Find the max value of table table and store it in a variable called max',
    },
  },
});
