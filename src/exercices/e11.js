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
    en: {
      title: 'Create a class 2',
      text: 'Create the class animal which has the proprietys name and type and a methode toSreing which returns `My name is (the name) and I am (the type) `',
    },
  },
});
