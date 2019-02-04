const better = require('./../toBetterExercice');

module.exports = better({
  expexted: {
    x: 1,
  },
  startingCode: '',
  maxChars: 10,
  text: {
    fr: {
      title: 'Cree une variable',
      text: 'Cree la variable x egale a 1',
      useOnly: 'Utiliser seulement:',
    },

    en: {
      title: 'Create a variable',
      text: 'crate the variable x equals 1',
      useOnly: 'Use only :',
    },
  },
});
