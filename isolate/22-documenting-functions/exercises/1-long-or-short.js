'use strict';
console.log('-- begin --');

/**
 * The program is checking the length of the string we enters according to the number we enter at the 2nd parameter
 * @param {String} text - the string we want to check the length of (default value)
 * @param {Number} cutoff - the number that decides if string is short or long
 * @returns {String} _ - the final result, long or short
 */
const longOrShort = (text = '', cutoff = 0) => {
  if (text.length < cutoff) {
    return 'short';
  } else {
    return 'long';
  }
};

const _1_expect = 'long';
const _1_actual = longOrShort('qwerty', 5);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = 'long';
const _2_actual = longOrShort('qwerty', 6);
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = 'short';
const _3_actual = longOrShort('qwerty', 7);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = 'long';
const _4_actual = longOrShort('', -1);
console.assert(_4_actual === _4_expect, 'Test 4');

// test the default parameters
const _5_expect = 'long';
const _5_actual = longOrShort('hello');
console.assert(_5_actual === _5_expect, 'Test 5: second default parameter');

const _6_expect = 'long';
const _6_actual = longOrShort();
console.assert(_6_actual === _6_expect, 'Test 6: both default parameters');


console.log('-- end --');