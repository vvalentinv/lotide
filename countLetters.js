// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let passed = "✅✅✅ Passed";
  let failed = "🛑🛑🛑Failed";
  actual === expected ? console.log(`Assertion ${passed}: [${actual}] === [${expected}]`) : console.log(`Assertion ${failed}: [${actual}] !== [${expected}]`);
};

const countLetters = function(sentence) {
  const result = {};
  for (letter of sentence) {
    if (letter !== " ") {
      if (!result.hasOwnProperty(letter)) {
        result[letter] = 1;
      } else {
        result[letter] += 1;
      }
    }
  }
  return result;
};

const result1 = countLetters("lighthouse in the house");

assertEqual(result1["l"], 1);
assertEqual(result1["i"], 2);
assertEqual(result1["g"], 1);
assertEqual(result1["h"], 4);
assertEqual(result1["t"], 2);
assertEqual(result1["o"], 2);
assertEqual(result1["u"], 2);
assertEqual(result1["s"], 2);
assertEqual(result1["e"], 3);
assertEqual(result1["n"], 1);