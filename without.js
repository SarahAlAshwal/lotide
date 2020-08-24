const eqArrays = require ('./eqArrays');
const assertArraysEqual = require ("./assertArraysEqual");

const without = function(source, itemsToRemove) {
  let output = [];
  let foundFlag = false;
  for (let element of source) {
    for (let item of itemsToRemove) {
      if (item === element){
        foundFlag = true;
        break;
      } 
    }
    if (foundFlag === false){
      output.push(element);
    }
    foundFlag = false;
  }
  return output;
};

module.exports = without;
