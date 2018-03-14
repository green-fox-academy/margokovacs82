// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.
'use strict';

const fs = require('fs');
let ips: string [] = [];

function uniqueIP (fileN: string, newArray: string[]) {
  let fileC: string = fs.readFileSync(fileN, 'utf-8');
  let line = fileC.split('\r\n');
  
  for (let i:number = 0; i < line.length; i++) {
    ips.push(line[i].slice(27,38));
  }
  return ips;
}
uniqueIP('logs.txt', ips);

let unique = ips.filter((v, i, a) => a.indexOf(v) === i); 
console.log(unique);



  let getPost: any [] = []; 
  let get: number = 0;
  let post: number = 0;
  let fileC: string = fs.readFileSync('logs.txt', 'utf-8').split('\r\n');

function getRatio () {
  for (let i:number = 0; i < fileC.length; i++) {
    getPost.push(fileC[i].slice(41,45));
  }
  for (let i:number = 0; i < getPost.length; i++) {
    if (getPost[i] === 'POST') {
      post ++
    } else {
      get ++;
    }
  }
  return (get / post);
}
console.log(getRatio()); 