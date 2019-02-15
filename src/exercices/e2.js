const better = require('./../toBetterExercice');

module.exports = better({
  expexted: {
    order: f => [
      [f([30, 15, 13], (a, b) => a - b), [13, 15, 30]],
      [f([1, 2, 3], (a, b) => b - a), [3, 2, 1]],
    ],
  },
  startingCode: '',
  text: {
    en: {
      title: 'Order list',
      text: `Create a function order that reterns a new orderd list. The function takes as argument a list and a comarason function 
      which compares two elements of the list and returns a positive number if the first element is greater than the second, 
      a negative number if the first element is smaller than the second and 0 if they are equal. You can not use Array.sort()`,
    },
  },
});
