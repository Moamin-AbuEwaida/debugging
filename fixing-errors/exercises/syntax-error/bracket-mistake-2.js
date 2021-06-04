'use strict';


/*
  environment: firefox

  name: SyntaxError
  message: expected expression, got '}'

  callstack:
    <anonymous> about:blank line 56 > injectedScript:2
    onload http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:56
    studyWithEval http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:33
    studyWith http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:462
    initJsUi http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:289

  life cycle: creation phase

  the mistake: there is an extra closing bracket 

  the fix(es): remove it
*/



for (let i = 0; i < 5; i++) { 
console.log(i);
}
