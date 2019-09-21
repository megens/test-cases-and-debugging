let verifyEquals = require('./verify-equals.js');

// we need 5 test cases.
let inputs = ["how bloody are you","i am fine", "super glad to hear", "why are you asking","no reason to reply to you"];

let outputs = ["bloody","fine", "super", "asking","reason"];

/*
Make this function return the longest word in the input string. If the input string is empty then return an empty string.
If multiple words have the same length, return the last one that matches.

Example
  f("hey hello morning") returns "morning"

HINTS: 
   - You'll need to use the split string method
   - A for loop might be helpful
*/
function f(str) {
  str_array = str.split(" ");
  let longest = '';
  for (i=0; i < str_array.length; i++) {
    if (str_array[i].length >= longest.length) longest = str_array[i];
  };
  return longest;
};


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
