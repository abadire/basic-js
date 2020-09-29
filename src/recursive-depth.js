const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) return 0;
    let max = 0;
    for (let el of arr)
    {
      let temp = this.calculateDepth(el);
      if (max < temp) max = temp;
    }
    return 1 + max;
  }
};

class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) return 0;
    // if (arr.length === 0) return 1;
    let max = 0;
    for (let el of arr)
    {
      let temp = this.calculateDepth(el);
      if (max < temp) max = temp;
    }
    return 1 + max;
  }
};

// const depthCalc = new DepthCalculator();

// console.log(depthCalc.calculateDepth([[[]]]));
// console.log(depthCalc.calculateDepth([1, [4, 5]]));
// console.log(depthCalc.calculateDepth([[[]]]));