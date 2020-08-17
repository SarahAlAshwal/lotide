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

const head = function(array) {
  let headOfArray = array[0];
  return headOfArray;
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([7]), 7);
assertEqual(head([]), undefined);