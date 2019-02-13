const better = require('./../toBetterExercice');

module.exports = better({
  expexted: {
    i: 6,
  },
  maxChars: 85,
  startingCode: 'const table = [1,9,8,13,19,27,-1,38,6,22];',
  text: {
    en: {
      title: 'Iterate over arrays 2',
      text: 'Find the index of the minimal value of table and store it in a variable called i',
    },
  },
});
