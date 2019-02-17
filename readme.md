# RCode.
![Alt text](doc/rcode.gif?raw=true "Rcode")
See it live : [Rcode.](https://oussamahamdaoui.github.io/RCode./)

## How to add exercices:

If you want to add an exercice just make a pull request with the exercie in it

1. Clone the project with `git clone https://github.com/oussamahamdaoui/RCode..git`
2. Run `npm install` to get the dependencies
3. Create an exercice in the folder `src/exercices`
4. Import the exercice in `src/exercices.js`
5. Try it out by running `npm run dev`
6. Once you are happy run `npm run buid`
6. Make a pull request

This is whant an exercice looks like:

```javascript 
const better = require('./../toBetterExercice'); // import the helper function

module.exports = better({
  expexted: {
    x:10, // you are expecting a variable named x containing 10
    y: [1,2,3], // you are expecting a variable named y containing a table [1,2,3]
    rev: f => [ // you are expecting a function named rev
      [f([1, 2, 3]), [3, 2, 1]], // you expect rev([1,2,3]) to be [3,2,1]
      [f([1, 8, 12]), [12, 8, 1]], // you expect rev([1,8,12]) to be [12,8,1]
    ],
  },
  startingCode: 'const x = 0', // your exercice sarts with const x = 0
  maxChars: 200, // your exercice should be solved with 200 chars maximum 
  forbidenPattern: /\.reverce\(/, // the responce can not contain .reverce( 
  text: {
    en: { // the language of the exercice you can add more if you want
      title: 'Reverce a table', // the title of your exercice
      text: 'Create a function rev that returns a new reversed a table. You can not use Array.reverce()', // your exercice 
    },
  },
});
```

See the folder `src/exercices` for more exepmes
