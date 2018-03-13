'use strict';
//  Create a function that takes a number and a list of numbers as a parameter
//  Returns the indeces of the numbers in the list where the first number is part of
//  Returns an empty list if the number is not part any of the numbers in the list
// Example

function subint(myNumber: number, myList: number []) {
  let newArr: number [] = [];
  for (let i: number = 0; i < myList.length; i++) {
    if (myList[i].toString().indexOf(myNumber.toString()) !== -1) {
      newArr.push(i);
    }
  }
  return newArr;
}
console.log(subint(1, [1, 11, 34, 52, 61]));
// should print: `[0, 1, 4]`
console.log(subint(9, [1, 11, 34, 52, 61]));
// should print: '[]'