
const eqObjects = require('./eqObjects');


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let passEmoji = String.fromCodePoint(0x1F44C);
  let failEmoji = String.fromCodePoint(0x1F4A5);

  if (eqObjects(actual, expected)) {
    console.log(`${passEmoji} Assertion passed: ${inspect(actual)} == ${inspect(expected)}`);
  } else {
    console.log(`${failEmoji} Assertion failed: ${inspect(actual)} != ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;


