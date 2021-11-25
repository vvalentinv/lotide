// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let passed = "✅✅✅ Passed";
  let failed = "🛑🛑🛑Failed";
  actual === expected ? console.log(`Assertion ${passed}: [${actual}] === [${expected}]`) : console.log(`Assertion ${failed}: [${actual}] !== [${expected}]`);
};

const eqArrays = function(actual, expected) {
  let eqArr = true;
  for (const index in actual) {
    if (actual[index] !== expected[index])
      return false;
  }
  return eqArr;
};

const findKeyByValue = function(obj, val) {
  for (const key in obj) {
    if (Array.isArray(obj[key])) {
      if (eqArrays(obj[key],val))
        return key;
    } else {
      if (obj[key] === val)
        return key;
    }
      
  }
  return undefined;
};
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);