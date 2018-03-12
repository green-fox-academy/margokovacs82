// -  Create a string variable named `typo` and assign the value `kuty` to it
// -  Write a function called `appendA` that gets a string as an input,
//    appends an 'a' character to its end and returns with a string
// -  Print the result of `appendAFunc(typo)`

'use strict';

let typo: string = 'kuty';

function appendA(app: string): string {
  return (app + 'a');
}
console.log(appendA(typo));

// -  Create an array variable named `nimals`
//    with the following content: `["kuty", "macsk", "cic"]`
// -  Add all elements an `"a"` at the end

let nimals: string [] = ["kuty", "macsk", "cic"];
let newNimals: string [] = [];

function appendAFun(append: string []) {
  for (let i:number = 0; i < nimals.length; i++) {
    append.push(nimals[i] + 'a');
  }
  return append
}
console.log(appendAFun(newNimals));