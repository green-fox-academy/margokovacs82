'use strict';

// Swap the values of these variables
let a: number = 123;
let b: number = 526;
let temp: number = 0;

temp = a;
a = b;
b = temp;

console.log(a);
console.log(b);