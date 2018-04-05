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


console.log('------------------') 

function copyList2 (oldArray) {
  let newArray: number[] = [];
  for (let i: number = 0; i < oldArray.length; i += 2) {
    if (i % 2 == 0) {
      newArray.push(oldArray[i]);
    }
  }
  return newArray;
}

let origArray = [0,1,2,3,4,5,6,7,8,9,10];
console.log(copyList2(origArray));

