
const eqArrays = function(actual, expected) {
  let eqArr = true;
  let i = 0;
  while (i < actual.length) {
    if (actual[i] !== expected[i])
      return false;
    i++;
  }
  return eqArr;
};

const assertArraysEqual = function(actual, expected) {
  let passed = "Assertion ✅✅✅ Passed";
  let failed = "Assertion 🛑🛑🛑 Failed";
  let printAct = " First Array:";
  let printExp = "Second Array:";
  let isItEqual = eqArrays(actual, expected);
  for (let i = 0; i < actual.length; i++) {
    printAct += actual[i] + " " + typeof actual[i] + ", ";
    printExp += expected[i] + " " + typeof expected[i] + ", ";
  }
  isItEqual ? console.log(`${passed}:\n${printAct}\n${printExp}`) : console.log(`${failed}:\n${printAct}\n${printExp}`);
};

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

// eqArrays([1, 2, 3], [1, 2, 3]) // => true
// eqArrays([1, 2, 3], [3, 2, 1]) // => false

// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => should fail
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => should PASS
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => should fail