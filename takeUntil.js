const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = function(array, callback) {
  let result = [];
  for (let element of array) {
    if (! callback(element)) {
      result.push(element);
    } else {
      break;
    }
  }
  return result;
};

module.exports = takeUntil;