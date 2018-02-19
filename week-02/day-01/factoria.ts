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
 
 let fNumber: number = 6;

function sum4(a: number): number {
    let total: number = 1;
    for (let i: number = 1; i <= a; i++) {
        total = i * total;
    }
    return total;
}
console.log(sum4(fNumber));