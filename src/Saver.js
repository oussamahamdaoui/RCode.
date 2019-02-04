const STORAGE_KEY = 'ex';
class Saver {
  constructor() {
    this.localStorage = localStorage;
    const storage = this.localStorage.getItem(STORAGE_KEY);
    if (!storage) {
      this.localStorage.setItem(STORAGE_KEY, '[]');
    }
  }

  save(arr) {
    const clean = arr.map(e => ({
      solved: e.solved,
      startingCode: e.codeMirror.getValue(),
    }));
    this.localStorage.setItem(STORAGE_KEY, JSON.stringify(clean));
  }

  get(i) {
    const res = JSON.parse(this.localStorage.getItem(STORAGE_KEY));
    return i !== undefined ? res[i] : res;
  }
}

module.exports = Saver;
