const findKeyByValue = require('../findKeyByValue');
const chai = require ('chai');  
const assert = chai.assert;

describe("#findKeyByValue", () => {
  it("returns drama for findKeyByValue({ sci_fi: 'The Expanse', comedy: 'Brooklyn Nine-Nine', drama:  'The Wire'}, 'The Wire'))", () => {
    assert.strictEqual(findKeyByValue({ sci_fi: 'The Expanse', comedy: 'Brooklyn Nine-Nine', drama:  'The Wire'}, 'The Wire'), 'drama');
  });

  it("returns undefined for findKeyByValue({ sci_fi: 'The Expanse', comedy: 'Brooklyn Nine-Nine', drama:  'The Wire'}, 'The Wire'))", () => {
    assert.strictEqual(findKeyByValue({ sci_fi: 'The Expanse', comedy: 'Brooklyn Nine-Nine', drama:  'The Wire'}, 'That 70s Show'), undefined);
  });

});
