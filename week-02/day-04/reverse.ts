// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`

//built in:
let numList = [3, 4, 5, 6, 7].reverse();
console.log("Reversed array is : " + numList);

//loop
let numList2: number [] = [3, 4, 5, 6, 7];
for (let index: number = numList2.length-1; index >= 0; index--){
    console.log(numList2[index]);}