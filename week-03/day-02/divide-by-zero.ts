// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

'use strict';

let num: number = 0;

function divideTen (x: number): any {
   if (x === 0) {
    return "fail";
} else {
    return 10 / x;
}
}
console.log(divideTen(num));