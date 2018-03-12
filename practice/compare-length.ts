// -  Create a variable named `firstList`
//    with the following content: `[1, 2, 3]`
// -  Create a variable named `secondList`
//    with the following content: `[4, 5]`
// -  Log to the console if `secondList` has more elements than `firstList`
'use strict';

let firstList: number [] = [1, 2, 3];
let secondList: number [] = [4, 5];

if (firstList.length > secondList.length) {
  console.log('firstList has more elements than secondList')
} else {
  console.log('secondtList has more elements than firstList')
}

// -  Log to the console if `secondList` has more elements than `firstList`

console.log(firstList.length < secondList.length);


// -  Create a function called `factorio`
//    that returns it's input's factorial

function factorio(num: number) {
  if (num === 0) {
    return 1;
  } else {
    return num * factorio(num - 1);
  }
}
console.log(factorio(3));