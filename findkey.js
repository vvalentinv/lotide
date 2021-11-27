const assertEqual = function(actual, expected) {
  const inspect = require('util').inspect;
    actual === expected ? console.log(`✅✅✅ Assertion Passed:\n[ ${inspect(actual)}] === [ ${inspect(expected)}]`)
    : console.log(`🛑🛑🛑 Assertion Failed:\n[ ${inspect(actual)}] !== [${inspect(expected)}]`);
};

const findKey = function(obj, action) {
  for (const key in obj) {
    if(action(obj[key]))
      return key;
  }
  return undefined;
}

const firstKey = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);
assertEqual(firstKey, "noma"); // => "noma"
