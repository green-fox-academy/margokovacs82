'use strict';
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