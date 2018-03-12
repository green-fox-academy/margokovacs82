// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`
'use strict';

let numerList: number [] = [3, 4, 5, 6, 7];

function reverse(x: number[]) {
  let tempList: number[] = [];
  for (let i: number = numerList.length -1; i >= 0; i --) {
    let tempIndex = numerList.length -1 -i;
    tempList[tempIndex] = x[i];
  }
  return tempList
}
console.log(reverse(numerList));

//-  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method

let numerList2: number [] = [3, 4, 5, 6, 7];
let reversed = numerList2.reverse(); 
console.log(reversed);