const better = require('./../toBetterExercice');

module.exports = better({
  expexted: {
    max: 38,
    table: [1, 9, 8, 13, 19, 27, 38, 6, 22],
  },
  startWith: 'const table = [1,9,8,13,19,27,38,6,22];',
  text: {
    fr: {
      title: 'Parcourir un tableau',
      text: 'Trouver la valeur max dans le tableau et la stoker dans une variable max',
    },

    en: {
      title: 'Iterate over arrays',
      text: 'Find the max value of table table and store it in a variable called max',
    },
  },
});
