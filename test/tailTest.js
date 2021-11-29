const tail = require('../tail');
const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

assertEqual(eqArrays(tail([5, 6, 7]), [6, 7]), true);
assertEqual(eqArrays(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]), true);
