// -  Create a variable named `magicNumbers`
//    with the following content: `[1, 3, 5, 7]`
// -  Print the third element of `magicNumbers`

'use strict';

let magicNumbers: number [] = [1, 3, 5, 7];
console.log(magicNumbers[2]);

// -  Create a variable named `magicNumbers2`
//    with the following content: `[1, 3, 5, 7, 8, 4, 2, 9, 3, 10]`
// -  Print every third element of `magicNumbers2`

let magicNumbers2: number [] = [1, 3, 5, 7, 8, 4, 2, 9, 3, 10];
let newA: number [] = [];

function newArray(x: number []) {
  for (let i: number = 0; i < magicNumbers2.length; i +=3) {
    x.push(magicNumbers2[i]);
  }
  return newA;
}
console.log(newArray(newA));

// -  Print every third element of `magicNumbers2`

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newArr = arr.filter((_,i) => i % 3 == 0); 
console.log(newArr);

