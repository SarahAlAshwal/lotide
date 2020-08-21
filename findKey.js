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


const findKey = function(obj, callback) {

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (callback(obj[key])) {
        return key;
      }
    }
   
  }

};

const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);

assertEqual(result, "noma");

const result2 = findKey({
  "Monday": "Sunny",
  "Tuesday": "Cloudy",
  "Wednesday": "Rain",
  "Thursday": "Rain",
  "Friday": "Sunny",
  "Saturday": "Sunny",
  "Sunday": "Cloudy"
}, x => x === "Rain");

assertEqual(result2, "Wednesday");

const result3 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 5);

assertEqual(result3, undefined);