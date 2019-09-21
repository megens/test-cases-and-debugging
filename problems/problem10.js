let verifyEquals = require('./verify-equals.js');

// we need 5 test cases.
let inputs = ["AC DC", "quid pro quo", "WHAT IS THE MATTER?", "robert megens", "rOB"];

let outputs = ["Ac Dc", "Quid Pro Quo", "What Is The Matter?", "Robert Megens", "Rob"];

/*
Make this function return the input string, capitalized. You must use a for loop. For example:

f("hello world"); // Hello World
f("ALL YOUR BASE ARE BELONG"); // All Your Base Are Belong

HINT:
   - Use a for loop to capitalize the words one by one
   - Use the toUpperCase string method
*/
function f(str) {
  let phrase = str.split(" ");
  let newPhrase = [];
  for (i=0; i < phrase.length; i++) {
    let word = phrase[i];
    let newWord = [];
    for (j=0; j < word.length; j++) {
      if (j === 0) newWord.push(word[j].toUpperCase());
      if (j !== 0) newWord.push(word[j].toLowerCase());
    };
    newWord = newWord.join('');
    newPhrase.push(newWord);
  };
  console.log(newPhrase.join(' '));
  return newPhrase.join(' ');
};


/* FAR MORE ELEGANT SOLUTION using SLICE ...

  function f(str) {
  const words = str.split(' ');
  let capitalizedWords = [];
  for (let i = 0; i < words.length; i++) {
    const capitalizedWord = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    capitalizedWords.push(capitalizedWord);
  }
  return capitalizedWords.join(' ');
}

// Shorter

function g(str) {
  const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  return str
    .split(' ')
    .map(capitalize)
    .join(' ');
}
*/


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
