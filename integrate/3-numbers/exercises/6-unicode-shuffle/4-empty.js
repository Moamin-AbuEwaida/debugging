'use strict';
let userInput = '';
let unicode = NaN;
let letsGo = true ;
while (letsGo){
  userInput = prompt ('Please entre something you would like to recode');
  if (userInput === null || userInput === ''){
    alert ("nothing is not allowed, Please re-enter something");
    continue;
  }
  const userCodeInput = prompt ('please entre the unicode number');
  if (userCodeInput === null || userCodeInput === ''){
    alert (' noting is not allowed, please entre a number');
    
  }else { 
    const userCodeNumber = Number(userCodeInput);
    if (Number.isNaN(userCodeNumber)){
      alert (userCodeInput + " is not a number");
      continue;
    }
  }
 const confrimMessage = 'please confirm your entries \n\n' + '\n\n - ' + userInput  + '\n\n - '+ userCodeInput;
    // 'is this correct?\n\n' + '- "' + userInput + '"\n' + '- ' + unicodeShift
    const callConfirmation = confirm (confrimMessage);
    if (callConfirmation){
      letsGo = false;
    } 
    
    let newCharsCode = '';  
      
      for (const charcater of userInput){
        const codedChar = charcater.charCodeAt();
        const charNewString = codedChar + unicode;
        const lastCode = String.fromCharCode(charNewString);        
        newCharsCode += lastCode;
      }
    

    
const finalMessage =  ` user new code \n\n "${userInput}" -> "${newCharsCode}"`     // "user new code \n\n" +  userInput + '->' + newCharCode ;
alert (finalMessage);

// let encodedString = '';

// /* -- BEGIN: create the encoded string -- */
// for (const character of userInput){
// const codeCharacter = character.charCodeAt();
// const newCharacterCode = codeCharacter + unicodeShift; 
// const encodedCharacter = String.fromCharCode(newCharacterCode);
// encodedString += encodedCharacter;
// }


// /* -- END -- */

// const finalMessage = `"${userInput}" -> "${encodedString}"`;
// alert(finalMessage);




}