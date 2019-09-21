// pro tip: use nodemon instead of node
let verifyEquals = require('./verify-equals.js');

// we need 6 test cases.
let inputs = [['add', 10, 20], ['chair', 20, 10],['add', 1, 5], ['sub', 2, 8],['mult', 7, 3], ['mutt', 2, 9]];

let outputs = [30, undefined, 6, -6, 21, undefined];

/*
The function takes an array. The array has 3 elements. The first element of the array is a string that 
represents an operation.
If the operation is "add", return the sum of the two other elements of the array. "sub" return their difference. 
"mult" return their product.  
Anything else return undefined. 
For example:
f(["add", 10, 20]); // 30
f(["mult", 2, 3]); // 6
f(["spoof", 10, 10]); // undefined

*/
function f(arr) {
  if (arr.length !== 3 ||
      typeof arr[1] !== 'number' ||
      typeof arr[2] !== 'number' ||
      (arr[0]!=="add" &&
       arr[0]!=="sub" &&
       arr[0]!=="mult"
      )
     )
    {
      return undefined;
    }
    if (arr[0] === "add") return arr[1] + arr[2];
    if (arr[0] === "sub") return arr[1] - arr[2];
    if (arr[0] === "mult") return arr[1] * arr[2];
  }

/*
much more elegant solution provided 
  function f(arr) {
    const operation = arr[0];
    switch (operation) {
      case 'add':
        return arr.slice(1).reduce((prev, next) => prev + next);
      case 'sub':
        return arr.slice(1).reduce((prev, next) => prev - next);
      case 'mult':
        return arr.slice(1).reduce((prev, next) => prev * next);
      default:
        return undefined;
    }
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
runTest(5);
console.log('All tests passed for ' + __filename);
