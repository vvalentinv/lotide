
# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @vvalentinv/lotide`

**Require it:**

`const _ = require('@vvalentinv/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `  head(array)`: returns the first element of the array
* `  tail(array)`: returns a copy of the array without the first element
* `  middle(array)`: returns the middle value of an array that has at least three elements, if the length is an odd number it will return an array with two elements
* `  without(array1,array2)`: returns a copy of the first array without elements in the second array
* `  takeUntil(array,action)`: returns an array containing all elements for which the callback returns false.
* `  map(arr, action)`: returns an array for which the action transformed each element
* `  letterPositions(sentence)`: returns an object with the unique letters and their indices in the sentence.
* `  findKeyByValue(object, value)`: returns the first key that matches the value
* `  findKey(object,action)`: returns the first key for which the action returns true
* `  eqObjects(object1,object2)`: returns true if the objects are equal
* `  eqArrays(array1,array2)`: returns true if the arrays are equal
* `  countOnly(object1,object2)`: returns an object containg keys from the first object and their number of occurences only if in the second object their value is true
* `  countLetters(sentence)`: returns an object listing all unique letters and their number of occurrences 
* `  assertEqual(value1,value2)`: returns an nice formated message if the values are equal
* `  assertObjectsEqual(object1,object2)`: returns an nice formated message if the objects are equal
* `  assertArraysEqual(array1,array2)`: returns an nice formated message if the arrays are equal
