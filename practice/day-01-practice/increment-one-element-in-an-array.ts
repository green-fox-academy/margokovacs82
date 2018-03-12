// -  Create a variable named `numList` with the following content: `[1, 2, 3, 4, 5]`
// -  Increment the third element simply by accessing it
// -  Log the third element to the console
'use strict';

let numList: number[] = [1, 2, 3, 4, 5];

function increment(third: number[]) {
  for (let i: number = 0; i < numList.length; i++)
    if (numList[i] === 3) {
      numList[i] += 1;
    }
    return third;
}
console.log(increment(numList));
console.log(numList[2]);

// -  Increment the third element simply by accessing it
let numList2: number[] = [1, 2, 3, 4, 5];
numList2[2] += 1;
console.log(numList2[2]);
