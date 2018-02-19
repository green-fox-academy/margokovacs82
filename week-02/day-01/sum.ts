// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result
'use strict';
let givenNumber: number = 7;

function sum4(a: number): number {
    let total: number = 0;
    for (let i: number = 1; i <= a; i++) {
        total += i;
    }
    return total;
}
console.log(sum4(givenNumber));


//ez nem a jó megoldás, de működik, csak máshogy 1.
let one: number = 1;
let two: number = 2;
let three: number = 3;
let four: number = 4;
let five: number = 5;

function sum(a, b, c, d, e) {
    return (a + b + c + d + e);
}
console.log(sum(one, two, three, four, five));

//ez nem a jó megoldás, de működik, csak máshogy 2.
function sum2(firstNumber: number, ...restOfNumber: number[]){
    let total: number = firstNumber;
    restOfNumber.forEach(function (item){
        total += item;
    });
    return total;
}
console.log(sum2(5, 2, 3, 4, 5));

//ez nem a jó megoldás, de működik, csak máshogy 3.
function sum3(numArray: number[]) {
    let total: number = 0;
    numArray.forEach(function (value) {
        total += value;
    });
    return total;
}
console.log(sum3([3,4,5,6,7]));


