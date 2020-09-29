const CustomError = require("../extensions/custom-error");

function countCats(matrix) {
  reducer = (accumulator, currValue) => accumulator + currValue.filter(x => x === "^^").length;
  return matrix.reduce(reducer, 0);
};

module.exports = countCats;

console.log(countCats([ [0, 1, '^^'], [0, '^^', 2], ['^^', 1, 2] ]));