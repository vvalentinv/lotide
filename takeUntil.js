const takeUntil = function(arr, action) {
  // ...
  const results = [];
  for (const elem of arr) {
    if(!action(elem))
      results.push(elem);
    if(action(elem))
      return results;
  }
  return results;
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
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ]);