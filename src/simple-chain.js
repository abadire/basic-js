const CustomError = require("../extensions/custom-error");

const chainMaker = {
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    let str = '( ' + String(value) + ' )';
    this.chain.push(str);
    return this;
  },
  removeLink(position) {
    if (Number.isInteger(position) && parseInt(position) <= this.getLength() && parseInt(position) > 0)
    {
      const positionInt = parseInt(position) - 1;
      this.chain.splice(positionInt, 1);
      return this;
    }
    else
    {
      this.chain = [];
      throw new Error();
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let ret = '';
    for (let i = 0; i < this.chain.length; ++i)
    {
      if (i !== 0) ret += '~~';
      ret += this.chain[i];
    }
    this.chain = [];
    return ret;
  },
  
  chain: []
};

module.exports = chainMaker;

// console.log(chainMaker.addLink(1).addLink(2).addLink(3).finishChain());
// console.log(chainMaker.addLink(1).addLink(2).removeLink(1).addLink(3).finishChain());
// console.log(chainMaker.addLink(1).addLink(2).reverseChain().addLink(3).finishChain());