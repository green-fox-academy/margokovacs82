// Given a string, compute recursively (no loops) a new string where all the
// lowercase 'x' chars have been changed to 'y' chars.

'use strict';
let dream: string = "Why don't you take xanax when xanax is great?";

function stringReplace(text1: string) {
  if (text1.indexOf('x') === -1) {
    return text1;
  }
  else {
    text1 = text1.replace('x', 'y');
    return stringReplace(text1); 
  }
}
console.log(stringReplace(dream));
