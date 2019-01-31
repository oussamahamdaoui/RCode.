const better = require('./../toBetterExercice');

module.exports = better({
  expexted: {
    animal: Obj => [
      [Object.prototype.hasOwnProperty.call(new Obj(), 'name'), true],
      [Object.prototype.hasOwnProperty.call(new Obj(), 'type'), true],
    ],
  },
  startWith: '',
  text: {
    fr: {
      title: 'Cree une class',
      text: 'Cree la animal qui a les propriétés name et type',
    },

    en: {
      title: 'Create a class',
      text: 'Create the class animal which has the proprietys name and type',
    },
  },
});
