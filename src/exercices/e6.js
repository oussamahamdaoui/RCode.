const better = require('./../toBetterExercice');

module.exports = better({
  expexted: {
    i: 6,
  },
  startingCode: 'const table = [1,9,8,13,19,27,-1,38,6,22];',
  text: {
    fr: {
      title: 'Parcourir un tableau 2',
      text: 'Trouver l\'index i de la valeur minimale',
    },

    en: {
      title: 'Iterate over arrays 2',
      text: 'Find the index of the minimal value of table and store it in a variable called i',
    },
  },
});
