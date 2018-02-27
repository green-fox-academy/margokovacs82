// Open a file called 'my-file.txt'
// Write your name in it as a single line
// If the program is unable to write the file,
// then it should print an error message like: 'Unable to write file: my-file.txt'

'use strict';

const fs = require('fs');
try {
  let fileContent = fs.readFileSync('./my-file.txt', 'utf-8');
  let fileCont = 'I can write';
  fs.writeFileSync('my-file.txt', fileContent);
  console.log(fileContent);
}
catch(error) {
  console.log('Unable to write file: my-file.txt');
}

