'use strict';

/*
  environment: firefox

  name: ReferenceError
  message: can't access lexical declaration 'tomatoes' before initialization

  callstack: 
    <anonymous> about:blank line 56 > injectedScript line 2 > eval:18
    <anonymous> about:blank line 56 > injectedScript:2
    onload http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:56
    studyWithEval http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:33
    studyWith http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:462
    initJsUi http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:289

  life cycle: creaation stage/phase

  the mistake:

  the fix(es):
*/



let tomatoes = 'fresh';
console.log(tomatoes);
