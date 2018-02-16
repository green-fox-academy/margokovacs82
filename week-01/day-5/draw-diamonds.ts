'use strict';

let lineCount: number = 7;
let Star: string = "*";
let Space: string = " ";

for(let i: number = 1; i <= (lineCount/2 + 1); i++){
        let printOut: string = '';
        
            for(let j: number = ((lineCount/2) - i); j > 0; j--){
                printOut += Space
                }
            
            for(let l: number = 1; l <=((2*i) -1); l++){
                printOut += Star
                }
                console.log(printOut);
            }


for(let i: number = 6; i >= (lineCount/2); i--){
let printOut: string = '';
                
        for(let j: number = ((lineCount) - i); j > 0; j--){
                        printOut += Space
                        }
                    
         for(let l: number = 1; l <=((2*i) -7); l++){
                            printOut += Star
                            }
        
                        console.log(printOut);
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
