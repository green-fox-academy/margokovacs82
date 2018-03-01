// We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies
// (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we'll say
// have 3 ears, because they each have a raised foot. Recursively return the
// number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).
'use strict';

function bunnies (n:number) {
  let ear1: number = 3;
  let ear2: number = 2;

  if (n <= 1) {return ear2;
  } else if (n%2 === 0){
    n -= 1;
    return ear1 += bunnies(n)
    
  } else if (n%2 === 1) {
    n -= 1;
   return ear2 += bunnies(n)
    }
  }
console.log(bunnies(5));