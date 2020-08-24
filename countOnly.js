const assertEqual = require ('./assertEqual');

const countOnly = function(allItems, itemsToCount) {
  let result = {};

  for (let item of allItems) {
    if (itemsToCount[item] === true) {
      if (result[item]) {
        result[item] += 1;
      } else {
        result[item] = 1;
      }
    
    }
  }
  return result;
};

module.exports = countOnly;


