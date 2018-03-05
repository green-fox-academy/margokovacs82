// Create a function that takes a filename as string parameter,
// counts the occurances of the letter "a", and returns it as a number.
// If the file does not exist, the function should return 0 and not break.

// example: on the input "afile.txt" the function should return 28 - print this result
// example: on the input "not-a-file" the function should return 0 - print this result
'use strict';
let fs = require('fs');

function aCounter(text: string) {
  let file = fs.readFileSync('./my-file.txt', 'utf-8');
  let lines: string[] = file.split('a');
    return lines.length - 1;
}
  try {
    console.log(aCounter('my-file.txt'));
  } catch (error) {
    console.log('0');
  }
