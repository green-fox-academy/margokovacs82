'use strict';

let students: any[] = [
  {name: 'Teodor', age: 3, candies: 2},
  {name: 'Rezso', age: 9.5, candies: 2},
  {name: 'Zsombor', age: 12, candies: 5},
  {name: 'Aurel', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'Gerzson', age: 10, candies: 1},
];

let sum: number = 0;
for (let i:number = 0; i < students.length; i++) {
    sum += students[i].candies;
}
console.log(sum);

//let sum: number = 0;
//students.forEach(function(item) {
  //  sum += item.candies;
//}); 
//console.log(sum);

let sum2: number = 0;
for (let i:number = 0; i < students.length; i++) {
    sum += students[i].candies;
    if(students[i].candies < 5) {
        sum2 += students[i].age;
    } 
} 
console.log(sum2);


//console.log(sum);
//let sum2: number = 0;
//students.forEach(function(item) {
  //  if(item.candies < 5) {
    //    sum2 += item.age;
    //} 
//}); 
//console.log(sum2);


// create a function that takes a list of students and logs: 
// - how many candies are owned by students
// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies