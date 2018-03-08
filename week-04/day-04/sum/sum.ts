'use strict';

export class Summa {
  
addNumbers(newArray: number[]): number {
  var sum = newArray.reduce((a, b) => a + b, 0);
    return sum;
  } 
} 
//let numbers = new Summa();
//console.log(numbers.addNumbers([12,12,12]));




