const better = require('./../toBetterExercice');

module.exports = better({
  expexted: {
    rev: f => [
      [f([1, 2, 3]), [3, 2, 1]],
      [f([1, 8, 12]), [12, 8, 1]],
    ],
  },
  startingCode: '',
  maxChars: 200,
  forbidenPattern: /\.reverce\(/,
  text: {
    en: {
      title: 'Reverce a table',
      text: 'Create a function rev that returns a new reversed a table. You can not use Array.reverce()',
    },
  },
});
