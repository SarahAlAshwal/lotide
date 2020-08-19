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

console.log(flatten([1,2,[4,4,],3,5]));
assertArraysEqual(flatten([[1,2],[3,4,0],8]),[1,2,3,4,0,8]);
assertArraysEqual(flatten([1,2,[],3]),[1,2,3]);
assertArraysEqual(flatten([[1,2]]),[1,2]);