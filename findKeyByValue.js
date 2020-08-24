
const findKeyByValue = function(obj, value) {
  for (const prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      // if (obj.hasOwnProperty(prop)) { this line caused an error in eslint
      if (obj[prop] === value) {
        return prop;
      }
    }
  }
 
};

module.exports = findKeyByValue;


