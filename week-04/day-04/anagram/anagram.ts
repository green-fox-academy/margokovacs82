//Write a function, that takes two strings and returns a boolean value based on if the two strings are Anagramms or not.
//Create a test for that.

'use strict';

/*export function anagram (a: string, b: string): boolean {
  let y = a.split("").sort();
  let z = b.split("").sort();
    if(y.length==z.length) {
    for (let i: number = 0; i < y.length; i++) {
      if (y[i]!==z[i]){
        return false;
      }
    }
      return true;
    } else { 
        return false;
      }
} */

//console.log(anagram('mary', 'arms'));


export let anagram = (x: string, y: string) => {
if (x.split('').sort().join('') === y.split('').sort().join('')) {
  return true;
} else {
  return false;
  }
}
console.log(anagram('mary', 'arms')); 
