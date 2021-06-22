'use strict';
const instruction =  
  'calculate the average of many numbers:\n\n' +
  '- you must input something\n' +
  '- input a number and it will be added to the sum\n' +
  '- input "done" and the program will finish (case insensitive)\n' +
  '- input anything else and it will be ignored\n\n' +
  'when you have finished inputting numbers, the average will be displayed';

  alert (instruction);

  let sum = 0;
  let inputCount = 0;
  let isDone = true;
  while (isDone){
    let userInput = prompt ('enter a number to add, or "done" to finish');
  if (userInput === null || userInput === '') {
    alert ('nothing is not allowed');
     continue;
  } else if (userInput.toLowerCase() === 'done'){
    isDone = false;
    continue;
  }

  let inputNumber = Number(userInput);
  if (Number.isNaN(inputNumber)){
    alert ('"' + userInput + '" is not a number, it has been ignored');
    continue;
  }
  else {
    sum = sum + inputNumber;
    inputCount ++;
    
    }
  }
  const average = sum / inputCount;
  
  const averageMessage = 'the average of your numbers is: ' + average;
alert(averageMessage);
 