const CustomError = require("../extensions/custom-error");

function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = Math.pow(2, disksNumber) - 1;
  const seconds = Math.floor(60 * 60/ turnsSpeed * turns);
  return {turns, seconds};
};

module.exports = calculateHanoi;

console.log(calculateHanoi(9, 4308));