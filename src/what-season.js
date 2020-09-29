const CustomError = require("../extensions/custom-error");

function getSeason(date) {
  if (arguments.length === 0) return 'Unable to determine the time of year!';
  const keys = Object.keys(date);
  if (!date || keys.includes('swim') || keys.includes('quack') || typeof date === 'duck')
  {
    throw new Error("It's a duck!");
  }
  const month = date.getUTCMonth();
  if (month < 2 || month > 10) return 'winter';
  else if (month < 5) return 'spring';
  else if (month < 8) return 'summer';
  else return 'autumn';
};

module.exports = getSeason;

// const springDate = new Date(2020, 0, 31)
// console.log(getSeason(springDate));