const better = require('./../toBetterExercice');

module.exports = better({
  expexted: {
    x: 1,
  },
  startWith: 'let x = 0',
  text: {
    fr: {
      title: 'Ajouter a une varriable',
      text: 'ajouter 1 a x',
    },

    en: {
      title: 'Create a variable',
      text: 'crate the variable x equals 1',
    },
  },
});
