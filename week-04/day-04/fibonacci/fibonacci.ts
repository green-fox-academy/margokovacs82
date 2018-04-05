//Write a function that computes a member of the fibonacci sequence by a given index
//Create tests that covers all types of input (like in the previous workshop exercise)

//0, 1, 1, 2, 3, 5, 8, 13, 21

'use strict';

export function fibonacci(n: any) {
  if (isNaN(n)) { 
    return 0;
  }
  if (n < 1) { 
    return 0;
  } 
   else if (n <= 2) { 
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
//console.log(fibonacci(7)); 