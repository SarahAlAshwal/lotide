const flatten = require ('../flatten');
const chai = require ('chai');  
const assert = chai.assert;

describe("#flatten", () => {
  it("returns [1,2,3,4,0,8] for flatten ([[1,2],[3,4,0],8]) ", () => {
    assert.deepEqual(flatten([[1,2],[3,4,0],8]),[1,2,3,4,0,8]);
  });

  it("returns [1,2,3] for flatten([1,2,[],3]) ", () => {
    assert.deepEqual(flatten([1,2,[],3]),[1,2,3]);
  });

  it("returns [1,2] for flatten([[1,2]]) ", () => {
    assert.deepEqual(flatten([[1,2]]),[1,2]);
  });

});
