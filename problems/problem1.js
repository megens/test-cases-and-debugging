let verifyEquals = require('./verify-equals.js'); // this line imports the verifyEquals function from the verify-equals.js file

// we need 5 test cases. I provided 1 input
let inputs = ['max','','colleen','charlotte','issyboo'];

let outputs = ['m',undefined,'c','c','i'];

// Make this function return the first character of the string that is passed to it. If the string does not have a first character, return undefined
function f(str) {
  if (str.charAt(0)==='') return undefined;
  return str.charAt(0);
}

//This function runs a test. You do not need to change any code under here
function runTest(i) {
  if (i >= inputs.length) throw new Error('You do not have enough test cases');
  let expected = outputs[i];
  let actual = f(inputs[i]);
  verifyEquals(expected, actual); // verifyEquals is imported above
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
console.log('All tests passed for ' + __filename);
