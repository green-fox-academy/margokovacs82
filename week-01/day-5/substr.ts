'use strict';

function substr(str: string, keyword: string) {

 let anyString = (str.indexOf(keyword));  
 return anyString;
 
}
console.log(substr("i know what you mean" , "you"));
// will print: `12`


//What the exercice was:

//  Create a function that takes two strings as a parameter
//  Returns the starting index where the second one is starting in the first one
//  Returns `-1` if the second string is not in the first one
//function substr(str: string, keyword: string) : number {
//  return -1;
//}

//  Example
//console.log(substr("this is what I'm searching in", "searching"));
// should print: `17`
//console.log(substr("this is what I'm searching in", "not"));
// should print: `-1`