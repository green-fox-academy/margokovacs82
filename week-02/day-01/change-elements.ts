// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 
// -  Print the fourth element as a test

let numberList: number [] = [1, 2, 3, 8, 5, 6];

numberList.splice(3, 1, 4);

console.log(numberList);
console.log(numberList[3]);
