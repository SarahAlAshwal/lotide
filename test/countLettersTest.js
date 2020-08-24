const countLetters = require ('../countLetters');
const chai = require ('chai');  
const assert = chai.assert;

describe("#countLetters", () => {
  it("returns 3 for countLetters( 'My name is Sarah') for letter a", () => {
    assert.strictEqual(countLetters('My name is Sarah')['a'], 3);
  });

  it("returns 2 for countLetters( 'My name is Sarah') for letter s", () => {
    assert.strictEqual(countLetters( 'My name is Sarah')['s'], 2); 
  });

  it("returns undefined for countLetters( 'My name is Sarah') for letter z", () => {
    assert.strictEqual(countLetters( 'My name is Sarah')['z'], undefined);
  });

  it("returns { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 } for countLetters('lighthouse in the House') ", () => {
    assert.deepEqual(countLetters('lighthouse in the House'), { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 } ); 
  });

});