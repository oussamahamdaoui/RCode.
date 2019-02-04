const better = require('./../toBetterExercice');

module.exports = better({
  expexted: {
    animal: obj => [[Object.prototype.hasOwnProperty.call(obj, 'name'), true], [Object.prototype.hasOwnProperty.call(obj, 'type'), true]],
  },
  startingCode: '',
  text: {
    fr: {
      title: 'Cree un objet',
      text: 'Cree l\'objet animal qui a les propriétés name et type',
    },

    en: {
      title: 'Create an object',
      text: 'Create the oject animal which has the proprietys name and type',
    },
  },
});
