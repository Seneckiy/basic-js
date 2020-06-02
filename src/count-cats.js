const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
  const cat = '^^';
  for (elem of matrix){
    let kittensFound = elem.filter(ears => ears===cat).length;
    if (kittensFound > 0){count = count + kittensFound}
  }
  return count
};
