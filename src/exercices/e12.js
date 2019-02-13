const better = require('./../toBetterExercice');

module.exports = better({
  expexted: {
    bounded: f => [
      [f(5, 10, 11), 10],
      [f(5, 10, 6), 6],
      [f(5, 10, 4), 5],
    ],
  },
  startingCode: '',
  maxChars: 70,
  text: {
    en: {
      title: 'Create a function LVL 2',
      text: `Create the function 'bounded(lowerBound, upperBound, value)' which returns the bounded value ex:
      bounded(5, 10, 15) = 10, bounded(5, 10, 1) = 5, bounded(5, 10, 7) = 7
      `,
    },
  },
});
