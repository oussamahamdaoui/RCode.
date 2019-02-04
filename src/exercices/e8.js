const better = require('./../toBetterExercice');

module.exports = better({
  expexted: {
    getMax: f => [[f([1, 2, 3]), 3], [f([0, 1]), 1]],
  },
  startingCode: 'const table = [1,9,8,13,19,27,38,6,22];',
  maxChars: 77,
  text: {
    fr: {
      title: 'Ecrire une fonction avec des parametres',
      text: 'Ecrivez la fonction getMax qui retourne la valeur maximale d\'un tableau',
    },

    en: {
      title: 'Write a function with parameters',
      text: 'Write the function getMax witch returns the maximum value of a list',
    },
  },
});
