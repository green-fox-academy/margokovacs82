// Write a recursive function that takes one parameter: n and counts down from n.
'use strict';
function factorialN(n: number) {
  if (n <= 1) {return 1;
  } else {
    return n * factorialN(n - 1);
    }
  }
console.log('5! is', factorialN(5));