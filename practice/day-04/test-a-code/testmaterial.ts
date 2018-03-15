'use strict';

// first try
export function addNum (a: number, b: number): number {
  return a + b;
}

// sum-test

export class Sum {
  sumarray: any = [];

  constructor(sumarray: any) {
    this.sumarray = sumarray
  }

  sum() {
    let sum = 0;
    this.sumarray.forEach(item => {
    if (typeof item === 'number')
    sum += item;
    });
    return sum;
  }  
}

//let summa = new Sum([1,2,3,4,5]);
//console.log(summa.sum());


let getHint = function(secret, guess) {
  let bulls: number = 0;
  let cows: number = 0;
  let nums: number [] = [];

  let checkNums = function(num) {
    if(nums.length) {
      for (let l: number = 0; l < nums.length; l++) {
        if(num === nums[l]) {
          return false;
        } else {
          nums.push(num);
          cows++;
          return true;
        }
      } 
    }
  };

  if(guess) {// iterate over the secret to compare it to the guess
    for (let i: number = 0; i < secret.length; i++) {
      // compare the related location to check for bulls
      if(secret[i] === guess[i]) {
        bulls++;
        nums.push(guess[i]);
      } else {
        // We didnt find a bull, lets check the /guess/ for cows
        for(let j: number = 0; j < guess.length; j++) {
          // We have a match, what should we do with it?
          if (secret[i] === guess[j]) {
              checkNums(guess[j]);
          }
        }
      }
    }
  }
  return bulls + " BULL " + cows + " COW ";
};
console.log(getHint("7820","7811"));