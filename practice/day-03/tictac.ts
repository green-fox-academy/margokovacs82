// Write a function that takes a filename as string,
// open and read it. The file data represents a tic-tac-toe
// game result. Return 'X'/'O'/'draw' based on which player
// has winning situation.
'use strict';
const fs = require('fs');

function splitter (fileName: string) {
  let fileArray: string [][] = [];
  let file: string = fs.readFileSync(fileName, 'utf-8');
  let lines = file.split('\r\n')

  for(let i: number = 0; i < lines.length; i++) {
    fileArray[i] = lines[i].split('');
  }
    return fileArray;
}

let winnerFun: string [][] = splitter('./win.txt');
let winner: string = '';

for (let i:number = 0; i <= 3; i++) {
  if (winnerFun[i][0] === winnerFun[i][1] && winnerFun[i][0] === winnerFun[i][2]) {
    winner = winnerFun[i][0];
  }
  if (winnerFun[0][i] === winnerFun[1][i] && winnerFun[0][i] === winnerFun[2][i]) {
    winner = winnerFun[0][i];
  }
  if (winnerFun[0][0] === winnerFun[1][1] && winnerFun[0][0] === winnerFun[2][2]) {
    winner = winnerFun[0][0];
  }
  if (winnerFun[2][0] === winnerFun[1][1] && winnerFun[2][0] === winnerFun[0][2]) {
    winner = winnerFun[0][0];
  }
  if (winner === '') {
    console.log('no one wins')
  }
}
console.log(winner);



