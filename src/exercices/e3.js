const better = require('./../toBetterExercice');

module.exports = better({
  expexted: {
    x: 20,
    y: 2,
  },
  startingCode: 'let x = 20',
  maxChars: 21,
  text: {
    fr: {
      title: 'Assignier a une varribale',
      text: 'Assigner la valleur de x divisé par 10 a y',
    },

    en: {
      title: 'Assignie to var',
      text: 'Assignie x divided by 10 to y',
    },
  },
});
