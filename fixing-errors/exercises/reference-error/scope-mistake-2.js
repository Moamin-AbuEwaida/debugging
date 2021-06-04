'use strict';

/*
  environment: firefox

  name: ReferenceError
  message: isValidUserName is not defined

  callstack:
    <anonymous> about:blank line 56 > injectedScript line 2 > eval:27
    <anonymous> about:blank line 56 > injectedScript:2
    onload http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:56
    studyWithEval http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:33
    studyWith http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:462
    initJsUi http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:289

  life cycle:execution phase

  the mistake: isValidUserName varible is not declared

  the fix(es): declare isValidUserName in the global scope
*/

const userName = 'chiobin';
console.log('userName:', typeof userName, userName);


let isValidUserName;

if (userName.length > 4) {
   isValidUserName = true;
} else {
   isValidUserName = false;
}

console.log('isValidUserName:', typeof isValidUserName, isValidUserName);
