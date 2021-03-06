const CustomError = require("../extensions/custom-error");

function repeater(str, options) {
  let addition = '';
  if ('addition' in options)
  {
    addition += options.addition;
    if ('additionRepeatTimes' in options)
    {
      for (let i = 1; i < options.additionRepeatTimes; ++i)
      {
        addition += options.additionSeparator || '|';
        addition += options.addition;
      }
    }
  }

  let ret = str + addition;
  if ('repeatTimes' in options)
  {
    for (let i = 1; i < options.repeatTimes; ++i)
    {
      ret += options.separator || '+';
      ret += str + addition;
    }
  }
  return ret;
};

module.exports = repeater;

// console.log(repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' }));