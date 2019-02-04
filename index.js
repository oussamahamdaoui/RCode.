
const Exercice = require('./src/Exercice');
const exercices = require('./src/exercices');
const Saver = require('./src/Saver');

const e = [];
const saver = new Saver();
const $ = (selector) => {
  const res = document.querySelectorAll(selector);
  return res.length === 1 ? res[0] : res;
};


const exercieParent = $('#exercices');

const updateScore = () => {
  const score = Math.floor(e.filter(ex => ex.solved === true).length / e.length * 100);
  $('#score > .percent').innerText = score;
  saver.save(e);
};

exercices.forEach((ex, i) => {
  const savedValues = saver.get(i);
  let exercice;
  if (savedValues) {
    exercice = new Exercice({
      parentNode: exercieParent,
      renderObject: ex.text,
      startingCode: savedValues.startingCode || ex.startingCode,
      startithHtml: ex.startithHtml,
      expected: ex.expexted,
    });
    exercice.solved = savedValues.solved;
    exercice.renderState(savedValues.solved);
  } else {
    exercice = new Exercice({
      parentNode: exercieParent,
      renderObject: ex.text,
      startingCode: ex.startingCode,
      startithHtml: ex.startithHtml,
      expected: ex.expexted,
    });
  }
  exercice.on('solve', updateScore);
  exercice.on('unsolve', updateScore);
  e.push(exercice);
});
updateScore();
