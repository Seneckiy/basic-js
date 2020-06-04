const CustomError = require("../extensions/custom-error");



function UserException(message) {
   this.message = message;
   this.name = "User Defined Exception";
}

const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length
  },
  addLink(value = ' ') {
    this.arr.push(value);
    return this
  },
  removeLink(position) {
    let index = position - 1;
    if (this.arr[index] !== undefined){
      this.arr.splice(index, 1);
      return this
    }
    else{
      this.arr = [];
      throw new UserException(`Unexpected position: ${position}`);
    }
  },
  reverseChain() {
    this.arr.reverse();
    return this
  },
  finishChain() {
    let str = '';
    for (ind in this.arr){
      if (ind == 0){
        str = `( ${this.arr[ind]} )`
      }
      else {
        str = `${str}~~( ${this.arr[ind]} )`
      }
    }
    this.arr = [];
    return str
  }
};

module.exports = chainMaker;
