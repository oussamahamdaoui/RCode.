const better = require('./../toBetterExercice');

module.exports = better({
  expexted: {
    x: 20,
    y: 2,
  },
  startingCode: 'let x = 20',
  maxChars: 21,
  text: {
    en: {
      title: 'Assignie to var',
      text: `Given a list of non negative integers, arrange them such that they form the largest number.
      For example, given [3, 39, 34, 5, 9], the largest formed number is 9539343.`,
    },
  },
});
