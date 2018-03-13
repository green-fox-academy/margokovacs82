//  Create a function that takes a list of numbers as parameter
//  Returns a list where the elements are sorted in ascending numerical order
//  Make a second boolean parameter, if it's `True` sort that list descending
//  Example:
'use strict';

let myArray: number[] = [34, 12, 24, 9, 5];
let direction: true;

function bubble(arr: number[]) {
  if(!direction){
    arr=arr.sort(sortNum);
  } else {
    arr=arr.sort(sortNumRev);
  }
  function sortNum(a: number, b: number):number{
    return a - b;
  }
  function sortNumRev(a: number, b: number):number{
    return b - a;
  }
  return arr;
}
console.log(bubble(myArray));