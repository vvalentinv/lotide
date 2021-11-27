// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let passed = "✅✅✅ Passed";
  let failed = "🛑🛑🛑Failed";
  actual === expected ? console.log(`Assertion ${passed}: [${actual}] === [${expected}]`) : console.log(`Assertion ${failed}: [${actual}] !== [${expected}]`);
};

const eqArrays = function(actual, expected) {
  let eqArr = false;
  for (const elem of actual) {
    for (const el of expected) {
      if (el === elem)
        eqArr = true;
    }
    if (!eqArr)
      return false;
  }
  return eqArr;
};

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

// eqArrays([1, 2, 3], [1, 2, 3]) // => true
// eqArrays([1, 2, 3], [3, 2, 1]) // => false

// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => should fail

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => should fail