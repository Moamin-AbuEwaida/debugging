'use strict';

let userNumber = NaN;
while (true) {
  const userInput = prompt('enter a number');
console.log('userInput:', typeof userInput, userInput);  
  if (userInput === null || userInput === ''){
    alert ('Please re-entre a number');
    continue;
  }
  else {
  userNumber = Number(userInput);
console.log('userNumber:', typeof userNumber, userNumber);  

  if (userInput != userNumber){
    alert (''+userInput+ ' is not a number')
    break;
  }
  
  /* -- END -- */
}

const message = userNumber % 2 === 0 ? ' is even' : ' is odd';
alert(userNumber + message);
break;
}
