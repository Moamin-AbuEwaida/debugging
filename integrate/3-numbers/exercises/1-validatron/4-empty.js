'use strict';
const userInput = prompt ("Please enter a number");
if (userInput === null || userInput === ''){
  alert ('Please re-entre a number');
} 

const userNumber = Number(userInput);
const isItANumber = !Number.isNaN(userNumber);
const confirmMsg = confirm ('did you really enter a number?\n\n' + 'yes -> "ok"\n' + 'no  -> "cancel"');

 const correctAnswer = isItANumber == userNumber;
 if (correctAnswer){
  alert ( ':D');
} else {
  alert (':(');
}
