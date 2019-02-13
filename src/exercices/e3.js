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
      text: 'Assignie x divided by 10 to y',
    },
  },
});
