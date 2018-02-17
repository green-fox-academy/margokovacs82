'use strict';

let lineCount: number = 7;
let Star: string = "*";
let Space: string = " ";

for(let i: number =1; i<=((lineCount/2)+1); i++){
let diamond = '';
    for(let j: number =((lineCount/2) - i); j> 0; j--){
        diamond += "d";
    }
    for(let k: number=1; k <=((i*2)-1); k++){
        diamond += "k";
    }
    console.log(diamond);
}

for(let i: number = (lineCount-1); i>=(lineCount/2); i--){
    let diamond2 = '';
    for(let j: number = (lineCount -i); j > 0; j--){
        diamond2 +="h";
    } 
    for(let k: number = 1; k <= ((i*2)- lineCount); k++){
        diamond2 += "g";
    }
    console.log(diamond2);
}

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is
