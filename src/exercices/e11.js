const better = require('./../toBetterExercice');

module.exports = better({
  expexted: {
    animal: F => [
      [new F('me', 'me').toString(), 'My name is me and I am me'],
      [new F('z', 'me').toString(), 'My name is z and I am me'],
    ],
  },
  startingCode: '',
  text: {
    fr: {
      title: 'Cree une class 2',
      text: 'Cree la class animal qui a les propriétés name et type et une methode toString qui retourne  `My name is (le nom) and I am (le type)`',
    },

    en: {
      title: 'Create a class 2',
      text: 'Create the class animal which has the proprietys name and type and a methode toSreing which returns `My name is (the name) and I am (the type) `',
    },
  },
});
