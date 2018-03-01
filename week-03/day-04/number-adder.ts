// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.
'use strict';
function addNum (n: number) {
  if (n <= 0) {return 0;
  } else {
  return n + addNum(n - 1);
  }
}
console.log(addNum(5))