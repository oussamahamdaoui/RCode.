const { $ } = require('./util');

class Timer {
  constructor(startTime = 100) {
    this.left = startTime;
    this.doneAction = () => {};
    this.interval = null;
  }

  start() {
    if (this.interval) return;
    this.interval = setInterval(() => {
      this.updateTimer();
    }, 1000);
  }

  add(x) {
    this.left += x;
  }


  stop() {
    clearInterval(this.interval);
  }

  done(f) {
    this.doneAction = f;
  }

  updateTimer() {
    $('.timer').innerText = `${this.left}s`;
    if (this.left > 0) {
      this.left -= 1;
    } else {
      this.doneAction();
    }
  }
}

module.exports = Timer;
