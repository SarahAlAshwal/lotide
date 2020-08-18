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

assertArraysEqual(without([1,2,3],["1","2",3]),[1,2]);
assertArraysEqual(without([1,2,3],[1,2,3]),[]);
assertArraysEqual(without([3,3,3],[3]),[]);
assertArraysEqual(without(["Hello","Lighthouse"],["hello"]),["Hello","Lighthouse"]);
assertArraysEqual(without([1,2,3],[]),[1,2,3]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);