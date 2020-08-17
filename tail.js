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

const tail = function(array) {
  let result = array.slice(1);
  return result;
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

const test = tail(["Hello"]);
assertEqual(test.length, 0);

const test2 = tail([]);
assertEqual(test2.length, 0);

