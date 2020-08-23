const assertArraysEqual = require ('../assertArraysEqual');
const middle = require ('../middle');

assertArraysEqual(middle([1,2,3]),[2]);
assertArraysEqual(middle([1,2,3,4]),[2,3]);
assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1,2]),[]);
assertArraysEqual(middle([]),[]);
assertArraysEqual(middle(["1","Hello","Lighthouse"]),["Hello"]);
assertArraysEqual(middle([1,2,3,4,5,6,7,8,9]),[5]);
assertArraysEqual(middle([1,2,3,4,5,6,7,8,9,10]),[5,6 ]);
assertArraysEqual(middle([1,2,3,4,5,6]),[3,4]);
