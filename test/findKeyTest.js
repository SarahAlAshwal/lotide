const findKey = require ('../findKey');
const chai = require ('chai');  
const assert = chai.assert;

const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);


const result3 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 5);



describe("#findKey", () => {
  it("returns noma for findKey({'Blue Hill': { stars: 1 },'Akaleri': { stars: 3 },'noma' : { stars: 2 }, 'elBulli': { stars: 3 }, 'Ora': { stars: 2 }, 'Akelarre':  { stars: 3 } }, x => x.stars === 2)", () => {
    assert.strictEqual(findKey({'Blue Hill': { stars: 1 },'Akaleri': { stars: 3 },'noma' : { stars: 2 }, 'elBulli': { stars: 3 }, 'Ora': { stars: 2 }, 'Akelarre':  { stars: 3 } }, x => x.stars === 2), "noma");
  });

  it("returns undefined for findKey({'Blue Hill': { stars: 1 },'Akaleri': { stars: 3 },'noma' : { stars: 2 }, 'elBulli': { stars: 3 }, 'Ora': { stars: 2 }, 'Akelarre':  { stars: 3 } }, x => x.stars === 2)", () => {
    assert.strictEqual(findKey({'Blue Hill': { stars: 1 },'Akaleri': { stars: 3 },'noma' : { stars: 2 }, 'elBulli': { stars: 3 }, 'Ora': { stars: 2 }, 'Akelarre':  { stars: 3 } }, x => x.stars === 5), undefined);
  });


});