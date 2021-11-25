
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

// ACTUAL FUNCTION
const middle = function(array) {
  //...
  const result = [];
  const arrLength = array.length;
  if (arrLength === 0 || arrLength === 1 || arrLength === 2) {
    return result;
  } else if (arrLength % 2 === 1) {
    result.push(Math.ceil(arrLength / 2));
  } else {
    result.push(arrLength / 2);
    result.push((arrLength / 2) + 1);
  }
  return result;
};

// TEST CODE
// middle([1]) // => []
// middle([1, 2]) // => []
// middle([1, 2, 3]) // => [2]
// middle([1, 2, 3, 4, 5]) // => [3]
// middle([1, 2, 3, 4]) // => [2, 3]
// middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

assertArraysEqual(middle([1]), []); // => should PASS
assertArraysEqual(middle([1, 2]), []); // => should PASS
assertArraysEqual(middle([1, 2, 3]), [2]); // => should PASS
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);// => should PASS
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);// => should PASS
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);// => should PASS
