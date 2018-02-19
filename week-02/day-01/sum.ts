// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result
'use strict';

let one: number = 1;
let two: number = 2;
let three: number = 3;
let four: number = 4;
let five: number = 5;

function sum(a, b, c, d, e) {
    return (a + b + c + d + e);
}
console.log(sum(one, two, three, four, five));


function sum2(firstNumber: number, ...restOfNumber: number[]){
    let total: number = firstNumber;
    restOfNumber.forEach(function (item){
        total += item;
    });
    return total;
}
console.log(sum2(5, 2, 3, 4, 5));


function sum3(numArray: number[]) {
    let total: number = 0;
    numArray.forEach(function (value) {
        total += value;
    });
    return total;
}
console.log(sum3([3,4,5,6,7]));