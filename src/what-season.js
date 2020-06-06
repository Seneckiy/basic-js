const CustomError = require("../extensions/custom-error");

function isDate (value) {
  return value instanceof Date;
}

function season(month) {
    if (month >= 2  &&  month <= 4) {
        return 'spring';
    }
    if (month >= 5  &&  month <= 7) {
        return 'summer';
    }
    if (month >= 8  &&  month <= 10) {
        return 'fall';
    }
    return 'winter';
}

module.exports = function getSeason(date) {
  if (date === null || date === undefined) {
    return 'Unable to determine the time of year!'
  }
  if (isDate(date) && Object.getOwnPropertyNames(date).length === 0){
    return season(date.getMonth())
  }
  throw new Error('Exception message');

};
