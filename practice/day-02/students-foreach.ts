// create a function that takes a list of students and logs: 
// - how many candies are owned by students

'use strict';

let students: any[] = [
  {name: 'Teodor', age: 3, candies: 2},
  {name: 'Rezso', age: 9.5, candies: 2},
  {name: 'Zsombor', age: 12, candies: 5},
  {name: 'Aurel', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'Gerzson', age: 10, candies: 1},
];

let sum = 0;
students.forEach(function(item) {
    sum += item.candies;
  })
console.log(sum);

// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies

let summ = 0;
for (let i:number = 0; i < students.length; i++) {
  if (students[i].candies < 5) {
    summ += students[i].age;
  }
}
console.log(summ);

//b-version: 

let summa = 0;
students.forEach(function(item) {
  if (item.candies > 5) {
    summa += item.age;
  }
})
console.log(summa);

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

let names: string [] = [];
students.forEach(function(item) {
  if (item.candies > 4) {
    names.push(item.name);
  }
})
console.log(names);

// create a function that takes a list of students and logs: 
//  - how many candies they have on average
  
let average: number = 0;
students.forEach(function(item) {
  average += item.candies / students.length;
})
console.log(average);
