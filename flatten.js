const eqArrays = require ('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


const flatten = function(array) {
  let output = [];
  for (let element of array) {
    if (Array.isArray(element)) {
      for (let i = 0; i < element.length; i++) {
        output.push(element[i]);
      }
    } else {
      output.push(element);
    }
  }
  return output;
};


module.exports = flatten; 

