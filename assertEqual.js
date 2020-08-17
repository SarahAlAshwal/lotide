const assertEqual = function(actual, expected) {

  let quotations = "\"";

  if (typeof actual === "string") {

    actual = quotations + actual + quotations;
    
  }

  if (typeof expected === 'string') {
    expected = quotations + expected + quotations;
  }

  if (actual === expected) {
    console.log(String.fromCodePoint(0x1F44C) + " Assertion passed: " + actual + " == " + expected);
  } else {
    console.log(String.fromCodePoint(0x1F4A5) + " Assertion failed: " + actual + " != " + expected);
  }

};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, "1");
assertEqual("bootcamp", "Bootcamp");
