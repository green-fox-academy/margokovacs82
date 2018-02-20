'use strict';
// I would like to replace "dishwasher" with "galaxy" in this example
// Please fix it for me!
// Expected ouput: In a galaxy far far away
//var re = /apples/gi; 

let re = /dishwasher/gi; 
let example: string = 'In a dishwasher far far away';
let newstr = example.replace(re, "galaxy"); 
console.log(newstr);
export = example;