// Create a function that takes a list as a parameter,
// and returns a new list with every second element from the orignal list
// example: [1, 2, 3, 4, 5] should produce [2, 4] - print this result

'use strict'
let oldArr: any [] = [0,1,2,3,4,5,6,7,8,9,10]
let newArray: any [] = [];
let maxVal: number = 5;
let delta: number = Math.floor(oldArr.length / maxVal);

function copyList (newList: number[]){
for (let i: number = 0; i < oldArr.length; i = i + delta) {
  newArray.push(oldArr[i]);
  } return newList;
}
console.log(copyList(newArray));