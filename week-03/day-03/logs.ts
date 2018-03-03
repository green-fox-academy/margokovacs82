// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.
'use strict';
const fs = require('fs');

let address: string [] = fs.readFileSync('logs.txt', 'utf-8').split('\r\n');

let ipAd: any[] = address.map(function (fullResult) {
  let a: string[] = fullResult.split(' ')
  return a[8];
});
console.log(ipAd);

function ratio() {
  let datas: string = fs.readFileSync('./logs.txt', 'utf-8').split('\r\n');
  let post: any[] = [];
  let p: number = 0;
  let g: number = 0;

  for (let i:number = 0; i < datas.length; i++) {
    post.push(datas[i].slice(41,45));
  }
  for (let i:number = 0; i < post.length; i++) {
    if (post[i] === 'POST') {
      p++
    } else {
      g ++
    }
  }
  return (g / p);
}
console.log(ratio());


//function ratio(logFile: string): number {
  //return (fs.readFileSync(logFile).toString().split('GET').length - 1) / (fs.readFileSync(logFile).toString().split('POST').length - 1);
//}

//console.log(ratio('logs.txt'));