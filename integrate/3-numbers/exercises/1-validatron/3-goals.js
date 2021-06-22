'use strict';

const userString = prompt('enter a number:');

/* -- BEGIN: check if input is a number -- */
if (userString === null || userString === ''){
  alert ('Please entre a number ');

}
const inputIsANumber = Number(userString); 
/* -- END -- */

/* -- BEGIN: ask the user if they think their input is a number -- */
const confirmMsg = confirm ('did you really enter a number?\n\n' + 'yes -> "ok"\n' + 'no  -> "cancel"');
const userThinksItsANumber = !Number.isNaN(inputIsANumber);
/* -- END -- */

const userIsCorrect = userThinksItsANumber == inputIsANumber;

if (userIsCorrect) {
  alert('correct!');
} else {
  alert('nope :(');
}
