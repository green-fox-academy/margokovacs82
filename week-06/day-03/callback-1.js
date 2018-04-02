/* SOME HELP: 
    const useCallback = callback => {
    callback('Chewing out a rhythm on my bubble gum');
    callback('The sun is out and I want some');
    callback('It\'s not hard, not far to reach, we can hitch a ride to Rockaway Beach');
 }
 
 const printSentence(sentence) {
   console.log(sentence);
 }
 
 useCallback(printSentence); */

'use strict';

  // The mapWith() function should iterate over the given array and call the callback function on every element.
  // It stores the callback return values in the output.
  // The mapWith() should return with the output array.

  const mapWith = (array, callback) => {
    let output = [];
    array.forEach(element => {
      output.push(callback(element))
    });
    return output;
}

//same with for loop
  const mapWith2 = (array, callback) => {
    let output2 = [];
    for (let i = 0; i < array.length; i++) {
      output2.push(callback(array[i]));
    }
  return output2;
}

const addOne = (number) => {
  return number + 1;
}

// Exercise 1:

console.log(mapWith([1, 2, 3], addOne));
//expected result: [2, 3, 4]

// Exercise 2:
// Create a callback function which remove every second letter from a string

const words = ['map', 'reduce', 'filter'];

const removeSecondLetter = callback => {
    let newArray = callback.split('');
    let returnString = ''
    newArray.forEach((e, i) => {
      if (i%2 === 0) {
        returnString += e
      }
    })
    return returnString;
}

console.log(mapWith(words, removeSecondLetter));
// expected result: ['mp','rdc', 'fle']