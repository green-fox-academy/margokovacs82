'use strict';


// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

let lineC: number = 4;
let star: string = "*";
let space: string = " ";


for(let i: number = 1; i <=lineC; i++){
let printOut: string = '';

    for(let j: number = (lineC - i); j > 0; j-- ){
    printOut += space
    }    

    for(let k: number = 1; k <=((2*i) - 1); (k++) ){
    printOut += star
    }

    console.log(printOut);

}




   


 
// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

let line1: string = "   *   ";
let line2: string = "  ***  ";
let line3: string = " ***** ";
let line4: string = "*******";

console.log(line1)
console.log(line2)
console.log(line3)
console.log(line4)