'use strict';
// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"
let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];

function checkNums (list:number[]) {
    if (list.indexOf(4 && 8 && 12 && 16) !== -1) {
      return true
    } else {
      return false
    }
}
console.log(checkNums(listOfNumbers));
export = checkNums;



/*
 let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];
 
 function isBigEnough(list: number[]): boolean{
  for (let i:number = 4; i<=16; i+=4){
    let sum: number = listOfNumbers.indexOf(i);
       if (sum === -1){
       return false;
      }
    }
  return true;
}
console.log(isBigEnough(listOfNumbers));

//az every használata egy értékkel lehetséges:
 //function isEveryUnder(elements: number): boolean {
  //return (elements === 4); 
//}
//console.log(listOfNumbers.every(isEveryUnder));
*/