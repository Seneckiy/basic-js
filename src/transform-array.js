const CustomError = require("../extensions/custom-error");

const controlSequences  = {
  '--double-next': doubleNext,
  '--double-prev': doublePrev,
  '--discard-next': discardNext,
  '--discard-prev': discardPrev,
};


const sequences = [
    '--discard-next', '--discard-prev', '--double-next', '--double-prev'
];

function doubleNext(arr, index){
  if (arr.length - 1 > index){
    arr.splice(index + 1, 0,  arr[index]);
    return arr
  }
  return arr
}

function doublePrev(arr, index){
  index = index - 1;
  if (arr[index]){
    arr.splice(index, 0,  arr[index]);
  }
  return arr
}

function discardNext(arr, index){
  if (arr[index]){
    arr.splice(index, 1)
  }
  return arr
}

function discardPrev(arr, index){
  index = index - 1;
  if (arr[index - 1]){
    arr.splice(index, 1)
  }
  return arr
}

module.exports = function transform(arr) {
  try {
    if (arr.length === 0){
      return arr
    }
    if  (!sequences.some(v => arr.includes(v))){
      return arr
    }
    if (sequences.some(v => arr.includes(v))){
      for (elem of arr){
        if (controlSequences[elem]){
          let  array = Array.from(arr);
          let index = array.indexOf(elem);
          array.splice(index, 1);
          let  newArray = controlSequences[elem](array, index);
          return transform(newArray)
        }
      }
      return arr
    }
  }
  catch (e) {
    throw (e)
  }
};
