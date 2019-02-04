
function toString(e) {
  if (typeof e === 'object') {
    return JSON.stringify(e, 4);
  }
  return e.toString();
}

class Console {
  constructor() {
    this.logs = [];
    this.emit = () => {};
  }

  _addToLogs(type, log) {
    this.logs.push({ type, log });
  }


  log(...e) {
    const string = [...e].map(param => toString(param)).join(' ');
    this._addToLogs('log', string); // eslint-disable-line
    this.emit(this.logs);
  }

  error(e) {
    const string = [...e].map(param => toString(param)).join(' ');
    this._addToLogs('error', string); // eslint-disable-line
    this.emit(this.logs);
  }

  on(f) {
    this.emit = f;
  }

  empty() {
    this.logs = [];
  }
}


module.exports = Console;
