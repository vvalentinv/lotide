// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let msg = "Assertion ";
  actual === expected ? msg += "✅✅✅ Passed: [" + actual + "] === [" + expected + "]" : msg += "🛑🛑🛑Failed: [" + actual + "] !== [" + expected + "]";
  console.log(msg);
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);