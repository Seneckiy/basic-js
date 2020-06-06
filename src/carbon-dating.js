const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const REACTION_RATE = 0.693/HALF_LIFE_PERIOD;

function isString (value) {
  return typeof value === 'string' || value instanceof String;
}
function isValid (value){
  if(value.match(/^[+]?\d+(\.\d+)?$/)){
    if (Number(value) < 15 && Number(value) > 0){
      return true
    }
  }
  else
    return false
}

module.exports = function dateSample(sampleActivity) {
  if (isString(sampleActivity)){
    if (isValid(sampleActivity)){
      return Math.ceil(
          Math.log(MODERN_ACTIVITY/Number(sampleActivity)) / REACTION_RATE
      )
    }
    else
      return false
  }
  else
    return false
};
