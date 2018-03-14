'use strict';
// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function divide (x: number) {
  if (x !== 0) {
    return 10 / x;
  } else {
  return 'fail';
  }
}
console.log(divide(0));

//

let num: number = 34;
function divideTen (x: number): any {
  if (x === 0) {
  return "fail";
} else {
  return 10 / x;
  }
}
console.log(divideTen(num));

// Write a function that copies a file to an other
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

const fs = require('fs');

let fileContent = fs.readFileSync('./text.txt', 'utf-8');
fs.writeFileSync('./copy.txt', fileContent);
console.log(fileContent);

// with a function

let file1: string = './text.txt';
let file2: string = './copy.txt';

function copy(f1: string, f2: string) {
  let f3 = fs.readFileSync(f1, 'utf-8');
  try {
  return f2 = fs.writeFileSync(f2, f3, 'utf-8');
  } catch(error) {
    return "Sorry, the file doesn't exist."
  }
}
copy(file1, file2);

// Write a program that opens a file called 'my-file.txt', then prints
// each of lines form the file.
// If the program is unable to read the file (for example it does not exists),
// then it should print an error message like: 'Unable to read file: my-file.txt'

const fs = require('fs');

let fileContent2 = fs.readFileSync('./text.txt', 'utf-8');

function read(x: string) {
  for (let i: number = 0; i <= fileContent2.length; i++) {
    fileContent2 = x;
  } 
  try {
    return x
  }
  catch(error) {
    console.log('No file found.')
  }
}
console.log(read(fileContent2));
