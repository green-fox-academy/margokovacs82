'use strict';
//my way, it doesn't work properly:

const fs = require('fs');
let fileCon = fs.readFileSync('./doubled.txt', 'utf-8').split('');
let halflines: string [] = [];

function halfIt (x: string) {
  for (let i: number = 0; i < fileCon.length; i++) {
    if (i % 2 === 0) {
      halflines.push(fileCon[i])
    } 
  } return halflines.join('');
} 

console.log(halfIt(fileCon))


// a beautier way, it works:

const fs = require('fs');

function half(source: string){
  return fs.readFileSync(source, 'UTF-8').split('').map((e, i, a) => {
  if (e === a[i+1]) {
    a.splice(i+1, 1);
  }
  return e;
}).join('')
}
console.log(half('./doubled.txt'));



