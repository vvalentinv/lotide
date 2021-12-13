const flatten = (arr) => {
  const result = [];
  for (const elem of arr) {
    if (Array.isArray(elem)) {
      for (const e of elem) {
        result.push(e);
      }
    } else {
      result.push(elem);
    }
  }
  return result;
}


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

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
