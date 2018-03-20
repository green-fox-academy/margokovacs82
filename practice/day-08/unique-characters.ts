// Create a function called `unique_characters` that takes a string as parameter
// and returns a list with the unique letters of the given string
// Create basic unit tests for it with at least 3 different test cases
// print(unique_characters('anagram'))
// Should print out:
// ['n', 'g', 'r', 'm']

'use strict';

export function uniqueCharacters (word: string) {
  let result: string[] = [];
  for(let i: number = 0; i < word.length; i++) {
    if(result.indexOf(word[i]) < 0) {
      result.push(word[i]);
    }
  }
  return result;
}


console.log(uniqueCharacters('anagram'))
