const eqArrays = function(arr1, arr2) {
  let n1 = arr1.length;
  let n2 = arr2.length;
  if (n1 !== n2) {
    return false;
  } else {
    for (let i = 0; i < n1; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};

const assertArraysEqual = function(firstArray, secondArray) {
  let passEmoji = String.fromCodePoint(0x1F44C);
  let failEmoji = String.fromCodePoint(0x1F4A5);

  if (eqArrays(firstArray, secondArray)) {
    console.log(`${passEmoji} Assertion passed: [${firstArray}] == [${secondArray}]`);
  } else {
    console.log(`${failEmoji} Assertion failed: [${firstArray}] != [${secondArray}]`);
  }

};

const letterPositions = function(sentence) {
  let letterPosition = {};
  sentence = sentence.toLowerCase();
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (letterPosition[sentence[i]]) {
        letterPosition[sentence[i]].push(i);
      } else {
        letterPosition[sentence[i]] = [i];
      }
    }
  }
  return letterPosition;
};

console.log(letterPositions("Sarah"));
console.log(letterPositions("lighthouse in the house"));
const test = letterPositions("my lotide project");
assertArraysEqual(test["o"],[4,12]);