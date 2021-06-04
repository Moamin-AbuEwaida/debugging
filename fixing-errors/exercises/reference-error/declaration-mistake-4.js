'use strict';

/*
  environment: Firefox

  name: ReferenceError
  message: assignment to undeclared variable seven

  callstack:
    <anonymous> about:blank line 56 > injectedScript line 2 > eval:22
    <anonymous> about:blank line 56 > injectedScript:2
    onload http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:56
    studyWithEval http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:33
    studyWith http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:462
    initJsUi http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:289
    initJsUi http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:289
    JavaScriptFE http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:32
    <anonymous> http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/init.js:3

  life cycle: execution phase

  the mistake: variable "seven" wasn't declared

  the fix(es): declaring the varible "seven"
*/

const add = (x = 0, y = 0) => {
  return x + y;
};

let seven = add(3, 4);
console.log(seven);