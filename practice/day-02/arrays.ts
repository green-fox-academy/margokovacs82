'use strict';
// Saturn is missing from the planetList
// Insert it into the correct position
// Create a function called putSaturn() which has list parameter and returns the correct list.
// bonus for using some built in methods
let planetList: string[] = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Uranus', 'Neptune'];
// Expected output: "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Uranus", "Neptune", "Saturn"
function putSaturn (list: string []) {
  list.push('Saturn')
  return list;
}
console.log(putSaturn(planetList));

//

function putSaturn2 (list: string []) {
  return '"' + list.concat('Saturn').join('","') + '"' ;
}
console.log(putSaturn(planetList));


// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]
let girls: string[] = ['Eve', 'Ashley', 'Bözsi', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Béla', 'Todd', 'Neef', 'Jeff'];

function match (girls: string[], boys: string[]) {
let matches: string [] = [];
let length = 0;
if (girls.length > boys.length) {
  length = boys.length;
} else {
  length = girls.length;
}
for (let i:number = 0; i < length; i++) {
    matches = matches.concat(girls[i], boys[i])
   }
   return matches;
  }
console.log(match(girls, boys));


// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.
let far: string[] = ['kuty', 'macsk', 'kacs', 'rók', 'halacsk'];

function appendA(x:string[]) {
  x.forEach(function(item, index) {
  x[index] = (item + 'a');
  })
  return x;
}
console.log(appendA(far));


// Accidentally we added "2" and "false" to the array.
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)
// Create a function called sweets() which takes the list as a parameter.
// Expected output: "Cupcake", "Croissant", "Brownie", "Ice cream"
let shopItems: any[] = ['Cupcake', 2, 'Brownie', false];

shopItems.forEach(function(item, i) { if (item == 2) shopItems[i] = 'Croissant'; });
shopItems.forEach(function(item, i) { if (item == false) shopItems[i] = 'Ice cream'; });
console.log(shopItems);

//b-version:

function sweets(x: string[]) {
  for (let i: number = 0; i < shopItems.length; i++) {
    if (shopItems[i] === 2) {
      shopItems[i] = "Croissant"
    } else if (shopItems[i] === false) {
      shopItems[i] = "Ice ream"
    }
    return x;
  }
}
console.log(sweets(shopItems));


// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"
let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];
let check = [4, 8, 12, 16];
let found = false;

function checkNums(x: number[], y: number []) {
    if (0 === check.length) {
      return false;
    }
    return check.every(function (value) {
      return (listOfNumbers.indexOf(value) >= 0);
    });
  }
console.log(checkNums(listOfNumbers, check));

//b-version
let listOfNumbers2: number[] = [2, 4, 6, 8, 10, 12, 14, 16];
function checkNums2(x: number[]) {
  if (x.indexOf(4 && 8 && 12 && 13) !== -1) {
    return true;
  } else {
      return false;
    }
}
console.log(checkNums2(listOfNumbers2));

// Accidentally I messed up this quote from Richard Feynman.
// Two words are out of place
// Your task is to fix it by swapping the right words with code
// Also, log the sentence to the console with spaces in between.
// Create a function called quoteSwap().
// Expected output: "What I cannot create I do not understand."
let words: string[] = ['What', 'I', 'do', 'create,', 'I', 'cannot', 'not', 'understand.'];

function quoteSwap(theArray: string []) {
  theArray.splice(2, 1, 'cannot');
  theArray.splice(5, 1, 'do');
    return theArray.join(' ');
}

console.log(quoteSwap(words));
