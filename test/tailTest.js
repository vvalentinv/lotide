const tail = require('../tail');
const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe("#head", () => {
  it("returns [6, 7]for [5, 6, 7]", () => {
    assert.deepEqual(tail([5, 6, 7]), [6, 7]);
  });

  it("returns \"Hello\" for [\"Hello\", \"Lighthouse\", \"Labs\"]", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

});
