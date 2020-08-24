const without = require ('../without');
const chai = require ('chai');  
const assert = chai.assert;

describe("#without", () => {
  it("returns [1,2] for without([1,2,3],['1','2',3])", () => {
    
    assert.deepEqual(without([1,2,3],["1","2",3]), [1,2]);
  });

  it("returns [] for without([1,2,3],[1,2,3])", () => {
    
    assert.deepEqual(without([1,2,3],[1,2,3]), []);
  });

  it("returns [] for without([3,3,3],[3])", () => {
    
    assert.deepEqual(without([3,3,3],[3]), []);
  });

  it("returns ['Hello','Lighthouse'] for without(['Hello','Lighthouse'],['hello'])", () => {
    
    assert.deepEqual(without(['Hello','Lighthouse'],['hello']), ['Hello','Lighthouse']);
  });

  it("returns [1,2,3] for without([1,2,3],[])", () => {
    
    assert.deepEqual(without([1,2,3],[]), [1,2,3]);
  });

});
