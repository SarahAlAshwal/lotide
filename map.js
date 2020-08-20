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

const map = function(array, callback) {
  const result = [];

  for (let item of array) {
    result.push(callback(item));
  }
  return result;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);

assertArraysEqual(results1,['g','c','t','m','t']);

const results2 = map(words, word => word.toUpperCase());
assertArraysEqual(results2,["GROUND",'CONTROL','TO','MAJOR','TOM']);

const numbers = [2, 5, 6, 8];
const results3 = map(numbers, number => number * number);
assertArraysEqual(results3,[4,25,36,64]);