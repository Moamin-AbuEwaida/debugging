'use strict';

/*
  environment: FireFox

  name: Uncaught ReferenceError
  message: assignment to undeclared variable welf

  callstack: 
    <anonymous> about:blank line 56 > injectedScript line 2 > eval:18
    <anonymous> about:blank line 56 > injectedScript:2
    onload http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:56
    studyWithEval http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:33
    studyWith http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:462
    initJsUi http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:289

  life cycle: creation phase

  the mistake: the variable welf was not declared

  the fix(es):we need to declare it with "let" or "const" etc.
*/

 let welf = 'ingrad'; // mistake

console.log(welf);
