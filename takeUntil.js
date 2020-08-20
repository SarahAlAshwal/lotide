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

const takeUntil = function(array, callback) {
  let result = [];
  for (let element of array) {
    if (! callback(element)) {
      result.push(element);
    } else {
      break;
    }
  }
  return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1,[1,2,5,7,2]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2,["I've", "been", "to", "Hollywood"]);

const data3 = [0,1,2,3];
const results3 = takeUntil(data3, x => x === 0);
assertArraysEqual(results3,[]);

const data4 = ["h", "3", 2, "w"];
const results4 = takeUntil(data4, x => typeof(x) === 'number');
assertArraysEqual(results4, ["h", "3"]);

const data5 = [1, 2, 3];
const results5 = takeUntil(data5, x => x <= 0);
assertArraysEqual(results5, [1,2,3]);