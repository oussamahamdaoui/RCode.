require('codemirror/mode/javascript/javascript');
require('codemirror/addon/edit/closebrackets');
require('codemirror/addon/edit/matchbrackets');

const codeMirror = require('codemirror');
const Responce = require('./Responce');


const createExerciceNode = (text, startingCode) => {
  const div = document.createElement('div');
  const textHtml = `
  <div class="exercice">
    <h1>${text.title} <span></span></h1>
    <p>${text.text}</p>
    <textarea>${startingCode}</textarea>
  </div>
  `;
  div.innerHTML = textHtml.trim();
  return div.firstChild;
};


class Exercice {
  constructor(parentNode, renderObject, startingCode, expected) {
    this.expected = expected;
    this.parentNode = parentNode;
    this.me = createExerciceNode(renderObject, startingCode);
    this.expectedResponce = new Responce(this.expected);
    this.solved = false;
    // append stuf
    this.parentNode.appendChild(this.me);
    this.codeMirror = codeMirror.fromTextArea(this.me.querySelector('textarea'), {
      lineNumbers: true,
      mode: 'javascript',
      theme: 'one-dark',
    });
    this.codeMirror.on('cursorActivity', this._mirrorChange.bind(this)); // eslint-disable-line
  }

  // / available events

  any() {
    return this;
  }

  solve() {
    return this;
  }

  unsolve() {
    return this;
  }


  // ////

  emit(func) {
    const underscorised = `_${func}`;
    this[underscorised]();
    this[func].bind(this)(this);
    this.any();
  }

  _solve() {
    this.me.querySelector('h1>span').classList.add('solved');
    this.solved = true;
  }

  _unsolve() {
    this.me.querySelector('h1>span').classList.remove('solved');
    this.solved = false;
  }

  _mirrorChange(e) {
    const codeToExecute = `
    'use strict'
    ${e.getValue()}
    return {
      ${Object.keys(this.expected).join(',')}
    }`;
    let res = {};
    try {
      res = Function('Rule', codeToExecute)(); // eslint-disable-line
    } catch (_) {} // eslint-disable-line
    if (this.expectedResponce.equqls(res)) {
      this.emit('solve');
    } else if (this.solved) {
      this.emit('unsolve');
    }
  }

  on(str, f) {
    if (this[str]) {
      this[str] = f.bind(this, [this]);
    }
  }
}

module.exports = Exercice;
