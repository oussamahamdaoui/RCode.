const better = require('./../toBetterExercice');

module.exports = better({
  expexted: {
    x: 1,
  },
  startingCode: 'let x = 0',
  text: {
    fr: {
      title: 'Modifier une varriable',
      text: 'Ajouter un a x',
    },

    en: {
      title: 'Change a variable',
      text: 'Add one to x',
    },
  },
});
