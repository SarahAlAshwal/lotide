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

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (const key of Object.keys(object1)) {
      if (Array.isArray(object1[key])) {
        if (! eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else {
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
  } else {
    return false;
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

const e = {a: "1", b: [2]};
const f = {a: "1", b: [2]};

assertEqual(eqObjects(ab, ba),true);
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);
assertEqual(eqObjects(e, f), true);