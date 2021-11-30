const map = function(arr, action) {
  const results = [];
  for (const elem of arr) {
    results.push(action(elem));
  }
  return results;
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



const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

module.exports = map;
