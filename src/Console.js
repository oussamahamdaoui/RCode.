const { isFunction } = require('./util');

function toString(e) {
  if (typeof e === 'object') {
    return JSON.stringify(e);
  }
  return e.toString();
}

class Console {
  constructor() {
    this.console = console;
  }

  log(e) {
    const string = toString(e);
    Console.emit('log', string);
    this.console.log(e);
  }

  error(e) {
    const string = toString(e);
    Console.emit('error', string);
    this.console.error(e);
  }
}


Console.on = (f) => {
  if (isFunction(f)) {
    throw (new Error('on parameter should be function'));
  }
  Console.emit = f;
};

module.exports = Console;
