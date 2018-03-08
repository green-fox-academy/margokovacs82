//Write a function, that takes a string as an argument and returns a dictionary with all letters in the string as keys, 
//and numbers as values that shows how many occurrences there are.
//Create a test for that.
'use strict';

//let mycopy: string = "";

export function countLetters(text: string) {
  let frequency = {};
  for (let i: number = 0; i < text.length; i++) {
    let character = text.charAt(i);
    if (frequency[character]) {
      frequency[character]++;
    } else {
      frequency[character] = 1;
      }
  }
  return frequency;
}

//console.log(countLetters(mycopy));