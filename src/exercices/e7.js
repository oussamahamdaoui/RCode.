const better = require('./../toBetterExercice');

module.exports = better({
  expexted: {
    sum: f => [[f(123, 1, 2, 3, 5), 134]],
  },
  startingCode: '',
  text: {
    fr: {
      title: 'Ecrire une fonction',
      text: 'Créer la fontion sum qui retourne la somme de N nombres',
    },

    en: {
      title: 'Iterate array list',
      text: 'Create a function sum witch returns the sum of N numbers',
    },
  },
});
