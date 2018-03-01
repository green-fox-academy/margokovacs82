// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).
'use strict';

function rabbit(numberOfRabbit: number) {
  let ears: number = 2;

  if (numberOfRabbit < 1) {return 0;
  } else {
    numberOfRabbit -= 1;
    ears += rabbit(numberOfRabbit)
    }
    return ears;
  }
console.log(rabbit(100));