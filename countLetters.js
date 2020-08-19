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
// This function consider small letters equal to capital letter if we want to consider them different entities
// We can delete toLowerCase() function
const countLetters = function(sentence) {
  let letterCounter = {};
  sentence = sentence.toLowerCase();
  for (let char of sentence) {
    if (char !== ' ') {
      if (letterCounter[char]) {
        letterCounter[char] += 1;
      } else {
        letterCounter[char] = 1;
      }
    }
  }
  return letterCounter;
};

console.log(countLetters(" lighthouse in the House"));
const test = countLetters("My name is Sarah !");
assertEqual(test['a'],3);
assertEqual(test['s'],2);
assertEqual(test['z'],undefined);