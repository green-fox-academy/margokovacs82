// -  Create a function called `factorio`
//    that returns it's input's factorial

'use strict'
let factNumber: number = 5;

function factorio(a: number): number {
    if (a <= 0) {         
       return 1; 
    } else {     
       return (a * factorio(a - 1));     // function invokes itself
    } 
 }; 
 console.log(factorio(factNumber));      