const tail = require ('../tail');
const chai = require ('chai');  
const assert = chai.assert;

describe("#tail", () => {
  it("returns 3 length of the original array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.strictEqual(words.length, 3);
  });

  it("returns 2 the length of the return array", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"])
    assert.strictEqual(result.length, 2); 
  });

  it("returns ['Lighthouse','Labs'] of ['Hello, 'Lighthouse','Labs']", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"])
    assert.deepEqual(result, ['Lighthouse','Labs']); 
  });

});
