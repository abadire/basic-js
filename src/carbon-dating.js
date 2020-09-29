const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

function dateSample(sampleActivity) {
  if (sampleActivity && typeof sampleActivity === 'string' && isFinite(sampleActivity) && parseInt(sampleActivity) > 0 && parseInt(sampleActivity) <=15)
  {
    let k = 0.693 / HALF_LIFE_PERIOD;
    return Math.ceil(Math.log(MODERN_ACTIVITY / parseInt(sampleActivity)) / k);
  }
  else return false;
};

module.exports = dateSample;