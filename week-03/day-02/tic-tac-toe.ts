// Write a function that takes a filename as string,
// open and read it. The file data represents a tic-tac-toe
// game result. Return 'X'/'O'/'draw' based on which player
// has winning situation.

'use strict';

const fs = require('fs');

function ticTacResult (fileName: string): string[][] {
  let g: string[][] = [];    
  try {
    let file = fs.readFileSync(fileName, 'utf-8');
    let lines = file.split('\r\n');
        
    for (let i:number = 0; i < lines.length; i++) {
      g[i] = lines[i].split('');
    }
  } catch (err) {
    console.log(err);
  }
  return g;
}

let game: string [][] = ticTacResult('win-x.txt');
let winner: string = '';

for (let i:number = 0; i < 3; i++) {
  if ((game[i][0] === game[i][1]) && (game[i][0] === game[i][2])) {
    winner = game[i][0];
  }
}
for (let i:number = 0; i < 3; i++) {
  if ((game[0][i] === game[1][i]) && (game[0][i] === game[2][i])) {
    winner = game[0][i];
  }
}

if ((game[0][0] === game[1][1]) && (game[0][0] === game[2][2])) {
  winner = game[0][0];
} else if ((game[0][2] === game[1][1]) && (game[0][2] === game[2][0])) { 
  winner = game[0][2];
}

if (winner === '') {
  console.log('draw')
} else {
  console.log(winner);
}