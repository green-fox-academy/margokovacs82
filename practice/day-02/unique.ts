//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once
'use strict';

function uniqueArr(value, index, self) { 
  return self.indexOf(value) === index;
}
let coolArray: number [] = [1, 11, 34, 11, 52, 61, 1, 34]
console.log(coolArray.filter(uniqueArr));

//B-version:

var myArray = [1, 11, 34, 11, 52, 61, 1, 34];
var unique = myArray.filter((v, i, a) => a.indexOf(v) === i); 
console.log(unique);