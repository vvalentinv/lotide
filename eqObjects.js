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
      console.log(object2[keyAtObject2]);
      if (eqArrays(object1[key1],object2[keyAtObject2]))
        isEqual = true;
    } else {
      if (object1[key1] === object2[keyAtObject2])
        isEqual = true;
      console.log(isEqual);
    }
    if (!isEqual)
      return false;
  }
  return isEqual;
};


//TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba),true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc),true); // => false

const cd = { c: "1", d: ["2", 3]};
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2),true); // => false