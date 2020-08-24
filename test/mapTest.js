const map = require ('../map');
const chai = require ('chai');  
const assert = chai.assert;


describe("#map", () => {
  it("returns ['g','c','t','m','t'] for map(['ground', 'control', 'to', 'major', 'tom'], word => word[0])", () => {
    
    assert.deepEqual(map(['ground', 'control', 'to', 'major', 'tom'], word => word[0]), ['g','c','t','m','t']);
  });

  it("returns ['GROUND','CONTROL','TO','MAJOR','TOM'] for map(['ground', 'control', 'to', 'major', 'tom'], word => word.toUpperCase()", () => {
    
    assert.deepEqual(map(['ground', 'control', 'to', 'major', 'tom'], word =>word.toUpperCase()), ['GROUND','CONTROL','TO','MAJOR','TOM']);

  });
    it("returns [4,25,36,64] for map([2, 5, 6, 8], number => number * number)", () => {
    
    assert.deepEqual(map([2, 5, 6, 8],  number => number * number), [4,25,36,64]);
  });

});

