const assertEqual = require("./assertEqual");

const findKey = function(obj, action) {
  for (const key in obj)
    if (action(obj[key]))
      return key;
}

const first = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2) // => "noma"
assertEqual(first, "noma");
module.exports = findKey;
