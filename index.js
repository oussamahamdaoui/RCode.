
const Exercice = require('./src/Exercice');
const exercices = require('./src/exercices');

const e = [];
const $ = (selector) => {
  const res = document.querySelectorAll(selector);
  return res.length === 1 ? res[0] : res;
};


const exercieParent = $('#exercices');

const updateScore = () => {
  const score = Math.floor(e.filter(ex => ex.solved === true).length / e.length * 100);
  $('#score > .percent').innerText = score;
};

exercices.forEach((ex) => {
  const exercice = new Exercice(exercieParent, ex.text, ex.startWith, ex.expexted);
  exercice.on('solve', updateScore);
  exercice.on('unsolve', updateScore);

  e.push(exercice);
});
