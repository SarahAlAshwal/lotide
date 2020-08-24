const letterPositions = require ('../letterPositions');
const chai = require ('chai');  
const assert = chai.assert;


describe("#letterPositions", () => {
  it("returns [4,12] for letterPositions('my lotide project')['o']", () => {
    
    assert.deepEqual(letterPositions('my lotide project')['o'], [4,12]);
  });

  it("returns [2] for letterPositions('my lotide project')['g']", () => {
    
    assert.deepEqual(letterPositions('my lotide project')['l'], [3]);
  });

  it("returns undefined for letterPositions('my lotide project')['z']", () => {
    
    assert.deepEqual(letterPositions('my lotide project')['z'], undefined);
  });

});
