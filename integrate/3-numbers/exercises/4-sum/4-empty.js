'use strict';
const instruction = 'calculate the sum of many numbers:\n\n' +
  '- you must input something\n' +
  '- input a number and it will be added to the sum\n' +
  '- input "done" and the program will finish (case insensitive)\n' +
  '- input anything else and it will be ignored';
alert(instruction);

let sum = 0;
let userInput = '';
let isDone = false;

while (!isDone) {

  userInput = prompt ('enter a number to add, or "done" to finish');

if (userInput === null || userInput === ''){
  alert ('Please re-entre a number');
} else if (userInput.toLowerCase()=== 'done'){
isDone = true;
}
else {
const nextNumber = Number(userInput);

if (Number.isNaN(nextNumber)){
  alert ('"' + userInput + '" is not a number, it has been ignored');
}
else {
  sum = sum + nextNumber
    }
  }
}

const sumMessage = 'the sum of your numbers is: ' + sum;
alert (sumMessage);




