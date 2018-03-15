'use strict';
//CAB game

//Create a class what is capable of playing exactly one game of Cows and Bulls (CAB). 
//The player have to guess a 4 digit number. For every digit that the player guessed correctly in the correct place, 
//they have a “cow”. For every digit the player guessed correctly in the wrong place is a “bull.”

//The CAB object should have a random 4 digit number, which is the goal to guess.
//The CAB object should have a state where the game state is stored (playing, finished).
//The CAB object should have a counter where it counts the guesses.
//The CAB object should have a guess method, which returns a string of the guess result
//All methods, including constructor should be tested


export class Bull {
  bulls: number = 0;
  cows: number = 0;
  nums: number [] = [];
  
  checkNums (num) {
    if(this.nums.length) {
      for (let l: number = 0; l < this.nums.length; l++) {
        if(num === this.nums[l]) {
          return false;
        } else {
          this.nums.push(num);
          this.cows++;
          return true;
        }
      } 
    }
  }

  getHint (secret, guess) {
    if(guess) {                                            // iterate over the secret to compare it to the guess
      for (let i: number = 0; i < secret.length; i++) {    // compare the related location to check for bulls
        if(secret[i] === guess[i]) {
          this.bulls++;
          this.nums.push(guess[i]);
        } else {                                           // We didnt find a bull, lets check the /guess/ for cows  
          for(let j: number = 0; j < guess.length; j++) {  // We have a match, what should we do with it?
            if (secret[i] === guess[j]) {
                this.checkNums(guess[j]);
            }
          }
        }
      } return this.bulls + " BULL " + this.cows + " COW ";
    };
  }
}

let game = new Bull();
console.log(game.getHint("2347","2345"));


//code without class
/*
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
*/