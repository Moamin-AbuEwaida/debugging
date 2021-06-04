'use strict';

/*
  environment: firefox

  name: SyntaxError
  message:continue must be inside loop

  callstack:
    <anonymous> about:blank line 56 > injectedScript:2
    onload http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:56
    studyWithEval http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:33
    studyWith http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:462
    initJsUi http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:289
  blank li

  life cycle: creation phase

  the mistake: using the continoue statement with if 

  the fix(es):remove continoue statement 
*/

const userName = 'wingdoz';

if (userName.length > 3) {
  console.log(userName);
  
}
