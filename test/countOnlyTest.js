const countOnly = require ('../countOnly');
const chai = require ('chai');  
const assert = chai.assert;


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

describe("#countOnly", () => {
  it("returns 1 for countOnly(firstNames, { 'Jason': true, 'Karima': true, 'Fang': true })['Jason']", () => {
    assert.strictEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true })['Jason'], 1);
  });

  it("returns undefined for countOnly(firstNames, { 'Jason': true, 'Karima': true, 'Fang': true })['Karima']", () => {
    assert.strictEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true })['Karima'], undefined);
  });

  it("returns 2 for countOnly(firstNames, { 'Jason': true, 'Karima': true, 'Fang': true })['Karima']", () => {
    assert.strictEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true })['Fang'], 2);
  });

});

