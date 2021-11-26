// FUNCTION IMPLEMENTATION


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


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;
  eqObjects(actual,expected) ? console.log(`✅✅✅ Assertion Passed:\n[object ${inspect(actual)}]\n[object ${inspect(expected)}]`)
    : console.log(`🛑🛑🛑 Assertion Failed:\n[object ${inspect(actual)}]\n[object ${inspect(expected)}]`);

};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let isEqual = false;
  if (Object.keys(object1).length !== Object.keys(object2).length)
    return false;
  for (const key1 in object1) {
    const keyAtObject2 = findKeyByValue(object2,object1[key1]);
    if (!keyAtObject2)
      return false;
    if (Array.isArray(object1[key1])) {
      if (eqArrays(object1[key1],object2[keyAtObject2]))
        isEqual = true;
    } else {
      if (object1[key1] === object2[keyAtObject2])
        isEqual = true;
    }
    if (!isEqual)
      return false;
  }
  return isEqual;
};


// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

const cd = { c: "1", d: ["2", 3]};
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false