// Create a function that takes 3 parameters: a path, a word and a number,
// than it should write to a file.
// The path parameter should be a string, that describes the location of the file.
// The word parameter should be a string, that will be written to the file as lines
// The number paramter should describe how many lines the file should have.
// So if the word is 'apple' and the number is 5, than it should write 5 lines
// to the file and each line should be 'apple'
// The function should not raise any error if it could not write the file.



'use strict';

const fs = require('fs');
function writeF(path: string, word: string, times: number) {
  let writeIn: string = '';
  for (let i: number = 0; i <= times; i++) {
    writeIn += word + ('\r\n'); 
  } try {
      fs.writeFileSync(path, writeIn, 'utf-8');
  } catch(error) {
      console.log('no files found.')
    }
}    

writeF('./text.txt', 'apple', 5);