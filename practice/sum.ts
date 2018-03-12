// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result
'use strict';

let parameter: number = 5;

function sumElements(summ: number) {
  let base: number = 0;
  for (let i: number = 0; i < parameter; i++) {
    base += i;
  }
  return base
}
console.log(sumElements(parameter));



// -  Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements in `ai` to the console

let myNums: number [] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var sum = myNums.reduce((a, b) => a + b);
console.log(sum); 