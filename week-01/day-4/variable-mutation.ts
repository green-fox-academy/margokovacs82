'use strict';

let a: number = 3;
// make it bigger by 10
a += 10
console.log(a);

let b: number = 100;
b -= 7
// make it smaller by 7
console.log(b);

let c: number = 44;
c *= 2
// double c's value
console.log(c);

let d: number = 125;
d /= 5
// divide d's value by 5
console.log(d);


let e: number = 8;

// what's the cube of e's value?
console.log(Math.pow(e, 3));

let f1: number = 123;
let f2: number = 345;
let yes: boolean = f1 > f2;
console.log(yes);
// tell if f1 is bigger than f2 (as a boolean)
let g1: number = 350;
let g2: number = 200;
let mondd: boolean = (g2 * 2) > g1;
console.log(mondd);
// tell if the double of g2 is bigger than g1 (pras a boolean)
let h: number = 1357988018575474;
let gnu: boolean = (h % 11) == 0;
console.log(gnu);
// tell if h has 11 as a divisor (as a boolean)

let i1: number = 10;
let i2: number = 3;
let henk: boolean = (i1 > (i2 ** 2) && i1 < (i2 ** 3));
// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)
console.log(henk);

let j: number = 1521;
let gem: boolean = ((j % 3) || (j % 5)) == 0;
console.log(gem);
// tell if j is dividable by 3 or 5 (as a boolean)
let k: string = 'Apple';
for(let i: number = 1; i <=4; i++){
// fill the k variable with its content 4 times
console.log(k);}


