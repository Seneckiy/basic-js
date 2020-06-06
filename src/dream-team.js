const CustomError = require("../extensions/custom-error");

function isString (value) {
  return typeof value === 'string' || value instanceof String;
}

function isValidArray (value) {
  if (value === null || value === undefined){
    return false
  }
  return value.length > 0 && value instanceof Array;
}

module.exports = function createDreamTeam(members) {

  if (!isValidArray(members)){
    return false
  }
  let firstLetters = [];
  for (member of members){
    if(isString(member)){
      firstLetters.push(member.split(' ').join('').toUpperCase()[0])
    }
  }
  return firstLetters.sort().join('')
};
