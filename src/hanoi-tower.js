const CustomError = require("../extensions/custom-error");

function convertHoursToSeconds(hours) {
  return Math.floor(hours * 60 * 60);
}

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {

  const turns = Math.pow(2, disksNumber) - 1;
  const seconds = Math.floor(
      convertHoursToSeconds(1) * turns / turnsSpeed
  );
  return {
    'turns': turns,
    'seconds': seconds
  }
};
