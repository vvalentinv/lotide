const eqArrays = function(actual, expected) {
  let eqArr = true;
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i])
      return false;
  }
  return eqArr;
};

module.exports = eqArrays;
