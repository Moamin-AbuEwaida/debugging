'use strict';
console.log('-- begin --');

let a = 'y';
let b = 'x';
let temp;

// write some code, be sure to use temp!
temp = a
a = b;
b = temp;

// fill in the _ to pass the assertions

const isTrue1 = a === 'x';
console.assert(isTrue1, 'Test 1');

const isTrue2 = b === 'y';
console.assert(isTrue2, 'Test 2');

const isTrue3 = temp === 'y';
console.assert(isTrue3, 'Test 3');


console.log('-- end --');