'use strict';

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

let lineCount: number = 4;
let triangle: string = "*"

for(let i: number = 1; i <=4; i++){

    console.log(triangle);
    triangle += "*"

}

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// B-megoldás:

let line1: string = "*";
let line2: string = "**";
let line3: string = "***";
let line4: string = "****";

console.log(line1)
console.log(line2)
console.log(line3)
console.log(line4)