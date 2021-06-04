'use strict';

/*
  environment: Firefox

  name: ReferenceError
  message: can't access lexical declaration 'isValidUserName' before initialization

  callstack:
     <anonymous> about:blank line 56 > injectedScript line 2 > eval:22
    <anonymous> about:blank line 56 > injectedScript:2
    onload http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:56
    studyWithEval http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:33
    studyWith http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:462
    initJsUi http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:289
    blank line 56 > injec

  life cycle: execution phase (not sure)

  the mistake: the variable isValidUserName is initialized before to be declared

  the fix(es): first declare isValidUserName globally then being called 
*/

const userName = 'chiobin';
console.log('userName:', typeof userName, userName);

let isValidUserName; 

if (userName.length > 3) {
  isValidUserName = true;
}


if (userName.length <= 3) {
  isValidUserName = false;
}

console.log('isValidUserName:', typeof isValidUserName, isValidUserName);
