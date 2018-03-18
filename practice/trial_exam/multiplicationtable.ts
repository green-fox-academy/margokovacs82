'use strict';
// Create a function that prints the multiplication table of a given base number.
// It should take the base number as a parameter and prints the output to the
// console.

function multi(base: number) {
  let result: number = 0;
  let table: string = '';
  for (let j: number = 1; j <= 10; j++) {
    table += (j + ' * ' + base + ' = ' + (result = j * base) + '\r\n');  
  } return table;
}
console.log(multi(5));
// The output should look like this for 5 as base:
//  1 * 5 = 5
//  2 * 5 = 10
//  3 * 5 = 15
//  4 * 5 = 20
//  5 * 5 = 25
//  6 * 5 = 30
//  7 * 5 = 35
//  8 * 5 = 40
//  9 * 5 = 45
//  10 * 5 = 50