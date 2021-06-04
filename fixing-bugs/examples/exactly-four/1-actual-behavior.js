'use strict';

/* actual behavior

  before looking too closely at the code, take some time to understand what it DOES do

  a good way to explain what the code DOES do is to see which test cases fail
  so run the program a few times trying out each test case

*/

/* exactly 4

  a user can enter a number and know if it is 4 characters long
  - given the input is null, they canceled :(
  - given the input is sorter than 4, it is too short
  - given the input is longer than 4, it is too long
  - given the input is exactly 4 characters, it's perfect

  test cases:
    null -> 'you canceled :('
    '' -> 'too short'
    'ab' -> 'too short'
    'abc' -> 'too short'
    'abcd' -> 'perfect!'
    'abcde' -> 'too long'
    'abcdef' -> 'too long'

  --- experiments ---

  1. FAILING: 'abcd' -> 'too short'. it should output 'perfect!'
    TRY:
    PREDICT:
    IT DID:
    EXPLAIN:

  --- lessons learned ---

*/

const input = prompt('enter anything with 4 characters');

let message;
if (input === null) {
  message = 'you canceled :(';
} else {
  if (input.length <= 4) {
    message = 'too short';
  } else if (input.length >= 4) {
    message = 'too long';
  } else {
    message = 'perfect!';
  }
}

alert(message);
