const assertEqual = function(actual, expected) {
  let passEmoji = String.fromCodePoint(0x1F44C);
  let failEmoji = String.fromCodePoint(0x1F4A5);

  if (typeof actual === "string") {

    actual = `"${actual}"`;
    
  }

  if (typeof expected === 'string') {
    expected = `"${expected}"`;
  }

  if (actual === expected) {
    console.log(`${passEmoji} Assertion passed: ${actual} == ${expected}`);
  } else {
    console.log(`${failEmoji} Assertion failed: ${actual} != ${expected}`);
  }

};

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



const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const studentRestuls = {
  Mary: 80,
  Suzan: 90,
  Micheal: 88,
  Adam: 100,
  Mike: 80
};

assertEqual(findKeyByValue(studentRestuls,100), "Adam");
assertEqual(findKeyByValue(studentRestuls,50), undefined);
assertEqual(findKeyByValue(studentRestuls,80), "Mary");
