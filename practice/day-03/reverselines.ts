'use strict';
const fs = require('fs');

//simple:
let fileConten = fs.readFileSync('./reverse.txt', 'utf-8').split('');
console.log(fileConten.reverse().join(''));

// if i want to write it to an other file: 
let fileContent2 = fs.readFileSync('./reverselines.txt', 'utf-8').split('\r\n');
let newFile = fileContent2.reverse().join('\r\n');
fs.writeFileSync('./newlines.txt', newFile);

// with error handling: 
try{
let fileContent3 = fs.readFileSync('./reve.txt', 'utf-8').split('\r\n');
let newFile = fileContent3.reverse().join('\r\n');
fs.writeFileSync('./newlines.txt', newFile);
} catch(err) {
  console.log('sorry')
}