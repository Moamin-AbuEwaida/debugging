'use strict';
console.log('-- begin --');

// write the expected values

// Boolean then Number 
const _1_expect = 0; // 0
const _1_boolean = Boolean(undefined); // false
const _1_number = Number(_1_boolean); // number 0
console.assert(_1_number === _1_expect, 'Test 1');

const _2_expect = 0 ; // 0
const _2_boolean = Boolean(null); // false
const _2_number = Number(_2_boolean); // number 0 
console.assert(_2_number === _2_expect, 'Test 2');

const _3_expect = 1; // 1 
const _3_boolean = Boolean('false'); // true
const _3_number = Number(_3_boolean); // number 1
console.assert(_3_number === _3_expect, 'Test 3');

// Number then Boolean
const _4_expect = false;
const _4_number = Number(''); // number 0
const _4_boolean = Boolean(_4_number); // boolean false
console.assert(_4_boolean === _4_expect, 'Test 4');

const _5_expect = false;
const _5_number = Number(null); // number 0
const _5_boolean = Boolean(_5_number); // boolean false
console.assert(_5_boolean === _5_expect, 'Test 5');

const _6_expect = false;
const _6_number = Number('  '); // number 0
const _6_boolean = Boolean(_6_number); // boolean false
console.assert(_6_boolean === _6_expect, 'Test 6');

// String then Number
const _7_expect = -1;
const _7_string = String(-1); // string "-1"
const _7_number = Number(_7_string); // number 1
console.assert(_7_number === _7_expect, 'Test 7');

const _8_expect = NaN;
const _8_string = String('true'); // string "true"
const _8_number = Number(_8_string); // number NaN
console.assert(Object.is(_8_number, _8_expect), 'Test 8');
// 04-comparing-and-asserting/examples/object-is.js

const _9_expect = Infinity;
const _9_string = String(Infinity); // string "Infinitiy"
const _9_number = Number(_9_string); //number Infinity
console.assert(_9_number === _9_expect, 'Test 9');


console.log('-- end --');