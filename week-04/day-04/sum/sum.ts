'use strict';

export class Summa {
  
addNumbers(newArray: number[]) {
  let numbers: number = 0;
  for (let i: number = 0; i < newArray.length; i++) {
    try{
    numbers += newArray[i];
  } catch (error){
    return 0;
  }}
  return numbers;
}
}
let sum = new Summa
console.log(sum.addNumbers([1,2,3,4])); 


  //let sum = newArray.reduce((a, b) => a + b, 0);
    //return sum;
  //} 
//} 
//let numbers = new Summa();
//console.log(numbers.addNumbers([12,12,12]));