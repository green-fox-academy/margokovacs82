// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array
'use strict';

let matrix: any [] = [];
let numberOfLines: number = 5;

for (let i:number = 0; i <= numberOfLines; i++) {
  matrix[i] = [];
    for (let j: number = 0; j <= numberOfLines; j++) {
      if (i + j === numberOfLines) {
        matrix[i][j] = '1';
      } else {
        matrix[i][j] = '0';
        }
    }
}
console.log(matrix);