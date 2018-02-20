'use strict';

let students2: any[] = [
  {name: 'Rezso', age: 9.5, candies: 2},
  {name: 'Zsombor', age: 12, candies: 5},
  {name: 'Aurel', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'Gerzson', age: 10, candies: 1},
];
let names: string = '';
students2.forEach(function(item) {
    if(item.candies > 4) {
        names += item.name;
    } 
}); 
console.log(names);

let cand: number = 0;
students2.forEach(function(item) {
        cand += item.candies / 5;   
}); 
console.log(cand);

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies
// create a function that takes a list of students and logs: 
//  - how many candies they have on average