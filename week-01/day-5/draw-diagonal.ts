'use strict';

let lineCount: number = 8;
let percent: string = "%";
let Space: string = " ";

for(let i: number = 1; i <=lineCount; i++){
let printOut: string = '';
    
    for(let j: number = 1; j <=(lineCount-1); j++){
        if (i === 1 || i === lineCount){
           printOut += percent;
        }    
            
            else if ((j === i)||(j === 1)||(j===lineCount-1)){
                printOut += percent;
            }
                else {printOut += Space;
            }        
    }    
    console.log(printOut);
}

// Write a program that draws a
// square like this:
//
// %%%%%
// %%  %
// % % %
// %  %%
// %   %
// %%%%%
//
// The square should have as many lines as lineCount is