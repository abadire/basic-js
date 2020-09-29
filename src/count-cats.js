const CustomError = require("../extensions/custom-error");

function countCats(matrix) {
  let count = 0;
  for (let row of matrix)
  {
    for (let el of row) {
      if (el === '^^')
      {
        count++;
      }
    }
  }
  return count;
};

module.exports = countCats;

// console.log(countCats([ [0, 1, '^^'], [0, '^^', 2], ['^^', 1, 2] ]));