let verifyEquals = require('./verify-equals.js');

// we need 5 test cases.
let inputs = ['anna', 'otto', 'bear', 'abcde edcba', 'ann a'];

let outputs = [true, true, false, true, false];

/*
Make this function return true if the input string is a palindrome, and false otherwise. 
A palindrome is simply a string that is the same if you reverse it.

RADAR -> Yes
JAVASCRIPT -> No
*/
function f(str) {
// THIS DOESN'T WORK FOR STRINGS return (str === str.reverse());
  return (str === str.split('').reverse().join(''));

}

//This function runs a test. You do not need to change any code under here
function runTest(i) {
  if (i >= inputs.length) throw new Error('You do not have enough test cases');
  let expected = outputs[i];
  let actual = f(inputs[i]);
  verifyEquals(expected, actual);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);

console.log('All tests passed for ' + __filename);
