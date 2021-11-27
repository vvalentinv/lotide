// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let passed = "✅✅✅ Passed";
  let failed = "🛑🛑🛑 Failed";
  let isEqual = true;
  for (let i = 1; i < actual.length; i++) {
    if (actual[i] !== expected[i])
      isEqual = false;
  }
  
  isEqual ? console.log(`Assertion ${passed}: [${actual}] === [${expected}]`) : console.log(`Assertion ${failed}: [${actual}] !== [${expected}]`);
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

const tail = function(arr) {
  return arr.slice(1);
};

assertEqual(tail([5,6,7]), [6,7]);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
console.log(tail([]));