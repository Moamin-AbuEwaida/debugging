'use strict';
let userNumer = NaN;
const userInput = prompt ('Please enter a number');
if (userInput === null || userInput === ''){
  alert ('Please make sure to enter a number');
}
else {
  userNumer = Number (userInput)
if (userInput != userNumer){
  alert (userInput + ' is not a number');
  
}
else if  (userNumer % 2 === 0) {
  alert (userNumer +' is even') ;
  
} else {
  alert (userNumer + ' is odd');
}

}


