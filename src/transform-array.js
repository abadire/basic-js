const CustomError = require("../extensions/custom-error");

function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('Arg is not an array!');
  
  const controls = [
    '--discard-next',
    '--discard-prev',
    '--double-next',
    '--double-prev'
  ];
  
  const ret = [];
  for (let i = 0; i < arr.length; ++i)
  {
    if (controls.includes(arr[i]))
    {
      if (arr[i] === '--discard-next' && i + 1 < arr.length && !controls.includes(arr[i + 1]))
      {
        ++i;
        if (i + 1 < arr.length && typeof arr[i + 1] === 'string' && arr[i + 1].endsWith('-prev')) ++i;
      }
      else if (arr[i] === '--discard-prev' && ret.length > 0) ret.pop();
      else if (arr[i] === '--double-next' && i + 1 < arr.length) ret.push(arr[i + 1]);
      else if (arr[i] === '--double-prev' && ret.length > 0) ret.push(arr[i - 1]);
    }
    else
    {
      ret.push(arr[i]);
    }
  }
  return ret;
};

module.exports = transform;

// console.log(transform(['--discard-next', "abs", '--discard-prev', '--double-next', 6, '--double-prev']));