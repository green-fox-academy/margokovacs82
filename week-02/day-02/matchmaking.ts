'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]
let girls: string[] = ['Eve', 'Ashley', 'Bözsi', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Béla', 'Todd', 'Neef', 'Jeff'];

function makingMatches (girls: string[], boys: string[]) {
  let everybody: any [] = [];
  let length: number = 0;
  if (boys.length < girls.length) {
    length = boys.length;
  } else {
    length = girls.length;
  }
  for (var i = 0; i < length; i++) {
    everybody = everybody.concat([girls[i], boys[i]]);
  }
  return everybody;
}

console.log(makingMatches(girls, boys));

export = makingMatches;