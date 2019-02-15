const better = require('./../toBetterExercice');

module.exports = better({
  expexted: {
    arrange: f => [
      [f([1, 2, 3]), 321],
      [f([11, 20, 3]), 32011],
    ],
  },
  startingCode: '',
  maxChars: 21,
  text: {
    en: {
      title: 'Assignie to var',
      text: `Write a function arrange that returns a number given a list of non negative integers, arranged such that they form the largest number.
      For example, given [3, 39, 34, 5, 9], the largest formed number is 9539343.`,
    },
  },
});
