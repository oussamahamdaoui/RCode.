const better = require('./../toBetterExercice');

module.exports = better({
  expexted: {
    animal: obj => [[Object.prototype.hasOwnProperty.call(obj, 'name'), true], [Object.prototype.hasOwnProperty.call(obj, 'type'), true]],
  },
  startingCode: '',
  text: {
    en: {
      title: 'Create an object',
      text: 'Create the oject animal which has the proprietys name and type',
    },
  },
});
