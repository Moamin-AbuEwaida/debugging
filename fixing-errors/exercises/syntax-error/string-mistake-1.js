'use strict';

/*
  environment: Firefox

  name:SyntaxError
  message: '' string literal contains an unescaped line break

  callstack:
    <anonymous> about:blank line 56 > injectedScript:2
    onload http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:56
    studyWithEval http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:33
    studyWith http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:462
    initJsUi http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:289

  life cycle: creation phase

  the mistake: string shouldn't be in two lines

  the fix(es): make the string to be in one line
*/

const a = 'this is two lines '; 
console.log (a);
