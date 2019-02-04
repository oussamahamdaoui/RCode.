require('codemirror/mode/javascript/javascript');
require('codemirror/addon/edit/closebrackets');
require('codemirror/addon/edit/matchbrackets');

const codeMirror = require('codemirror');
const Responce = require('./Responce');
const Console = require('./Console');
const { looseEqual } = require('./util');


const createExerciceNode = (text, startingCode = '', startingHtml = '') => {
  const div = document.createElement('div');
  const textHtml = `
  <div class="exercice">
    <h1>${text.title} <span></span></h1>
    <p>${text.text}</p>
    <div class="document">${startingHtml}</div>
    <div class="console"></div>
    <textarea>${startingCode}</textarea>
  </div>
  `;
  div.innerHTML = textHtml.trim();
  return div.firstChild;
};


class Exercice {
  constructor(obj) {
    this.expected = obj.expected;
    this.parentNode = obj.parentNode;
    this.me = createExerciceNode(obj.renderObject, obj.startingCode, obj.startingHtml);
    this.expectedResponce = new Responce(obj.expected);
    this.solved = false;

    // console stuf

    this.console = new Console();
    this.consoleElement = this.me.querySelector('.console');
    this.prevLogs = [];
    this.fakeDocument = this.me.querySelector('.document');
    // append stuf
    this.parentNode.appendChild(this.me);
    this.console.on(this._renderLogs.bind(this)); // eslint-disable-line
    this.codeMirror = codeMirror.fromTextArea(this.me.querySelector('textarea'), {
      lineNumbers: true,
      mode: 'javascript',
      theme: 'one-dark',
    });
    this.codeMirror.on('cursorActivity', this._mirrorChange.bind(this)); // eslint-disable-line
    this.codeMirror.setSize(null, 500);
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
      res = Function('console','document', codeToExecute)(this.console, this.fakeDocument); // eslint-disable-line
      if (this.expectedResponce.equqls(res)) {
        this.emit('solve');
      } else if (this.solved) {
        this.emit('unsolve');
      }
    } catch (_) {console.log(_)} // eslint-disable-line
    this.console.empty();
  }

  on(str, f) {
    if (this[str]) {
      this[str] = f.bind(this, [this]);
    }
  }

  _renderLogs(logs) {
    if (!looseEqual(logs)) {
      this.consoleElement.innerHTML = logs.map(log => `<div class=${log.type}>&gt; ${log.log}</div>`).join('');
    }
    this.prevLogs = [...logs];
  }

  renderState(state) {
    if (state) {
      this.me.querySelector('h1>span').classList.add('solved');
    } else {
      this.me.querySelector('h1>span').classList.remove('solved');
    }
  }
}

module.exports = Exercice;
