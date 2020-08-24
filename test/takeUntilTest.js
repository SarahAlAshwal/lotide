const takeUntil = require ('../takeUntil');
const chai = require ('chai');  
const assert = chai.assert;


describe("#takeUntil", () => {
  it("returns [1,2,5,7,2] for takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0)", () => {
    
    assert.deepEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0), [1,2,5,7,2]);
  });

  it("returns ['I've', 'been', 'to', 'Hollywood'] for takeUntil(['I've', 'been', 'to', 'Hollywood', ',', 'I've', 'been', 'to', 'Redwood'], x => x === ',')", () => {
    
    assert.deepEqual(takeUntil(["I've", 'been', 'to', 'Hollywood', ',', "I've", 'been', 'to', 'Redwood'], x => x === ','), ["I've", 'been', 'to', 'Hollywood']);
  });

  it("returns [] for takeUntil([0,1,2,3], x => x === 0)", () => {
    
    assert.deepEqual(takeUntil([0,1,2,3], x => x === 0), []);
  });

  it("returns ['h', '3'] for takeUntil(['h', '3', 2, 'w'], x => typeof(x) === 'number')", () => {
    
    assert.deepEqual(takeUntil(['h', '3', 2, 'w'], x => typeof(x) === 'number'), ['h', '3']);
  });

  it("returns [1,2,3] for takeUntil([1, 2, 3], x => x <= 0)", () => {
    
    assert.deepEqual(takeUntil([1, 2, 3], x => x <= 0), [1,2,3]);
  });


});

