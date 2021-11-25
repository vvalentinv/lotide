const assertEqual = function(actual, expected) {
  let passed = "✅✅✅ Passed";
  let failed = "🛑🛑🛑Failed";
  actual === expected ? console.log(`Assertion ${passed}: [${actual}] === [${expected}]`) : console.log(`Assertion ${failed}: [${actual}] !== [${expected}]`);
};

const eqArrays = function(actual, expected) {
  let eqArr = true;
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i])
      return false;
  }
  return eqArr;
};

const letterPositions = function(sentence) {
  const result = {};
  for (letter of sentence) {
    //console.log(letter);
  
    let arr = [];
    for (let i = 0; i < sentence.length; i++) {
      
      if (letter === sentence[i])
        arr.push(i);
    }
    if (letter !== " ")
      result[letter] = arr;
  }
  console.log(result);
  return result;
};

const result1 = letterPositions("lighthouse in the house");
// lighthouse   in t h e h o u s e
// 01234567891011121415161819202122

assertEqual(eqArrays(result1["l"], [0]), true);
assertEqual(eqArrays(result1["i"], [1, 11]), true);
assertEqual(eqArrays(result1["g"], [2]), true);
assertEqual(eqArrays(result1["h"], [3, 5, 15, 18]), true);
assertEqual(eqArrays(result1["t"], [4, 14]), true);
assertEqual(eqArrays(result1["o"], [6, 19]), true);
assertEqual(eqArrays(result1["u"], [7, 20]), true);
assertEqual(eqArrays(result1["s"], [8, 21]), true);
assertEqual(eqArrays(result1["e"], [9, 16, 22]), true);
assertEqual(eqArrays(result1["n"], [12]), true);