'use strict';

let lineCount: number = 6;
let percent: string = "%";
let spacee: string = " ";

for(let i: number = 1; i <=lineCount; i++){
let printOut: string = '';
    
    for(let j: number = 1; j <=lineCount; j++){
        if (i === 1 || i === lineCount){
           printOut += percent;
        }    
            else if ((j === 1) || (j === 6)){
                printOut += percent;
            }
                else {printOut += spacee;
            }        
    }    
    console.log(printOut);
}

// Write a program that draws a square like this:
//
// %%%%%
// %   %
// %   %
// %   %
// %   %
// %%%%%
//
// The square should have as many lines as lineCount is