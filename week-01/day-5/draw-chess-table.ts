'use strict';

let lineCo: number = 8;
let hash: string = "%";
let space: string = " ";

for(let i: number = 1; i <=lineCo; i++){
let printOut: string = '';
    
    for(let j: number = 1; j <=lineCo; j++){
        if ((i%2 === 0) && (j%2 ===1)){
           printOut += hash;            
        }
        else if ((i%2 === 1) && (j%2 ===0)){
            printOut += hash;
        }
            else {printOut += space;
            }   
    
    }    
    console.log(printOut);
}
