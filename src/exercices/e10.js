const better = require('./../toBetterExercice');

module.exports = better({
  expexted: {
    animal: Obj => [
      [Object.prototype.hasOwnProperty.call(new Obj(), 'name'), true],
      [Object.prototype.hasOwnProperty.call(new Obj(), 'type'), true],
    ],
  },
  startingCode: '',
  text: {
    en: {
      title: 'Create a class',
      text: 'Create the class animal which has the proprietys name and type',
    },
  },
});
