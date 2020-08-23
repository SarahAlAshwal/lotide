const eqArrays = require ('./eqArrays');
const assertArraysEqual = require ('./assertArraysEqual');

const middle = function(array) {
  let mid = [];
  const length = array.length;
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      mid.push(array[(length / 2) - 1]);
      mid.push(array[length / 2]);
    } else {
      mid.push(array[Math.floor(length / 2)]);
    }
  }
  return mid;
};

module.exports = middle;

