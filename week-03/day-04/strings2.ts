// Given a string, compute recursively a new string where all the 'x' chars have been removed.
'use strict';
let psycho: string = "Why don't you take Xanax cos Xanax is great?";

function stringReplace(text1: string) {
  if (text1.indexOf('x') === -1) {
    return text1;
  }
  else {
    text1 = text1.replace('X', '');
    text1 = text1.replace('x', 'l');
    return stringReplace(text1); 
  }
}
console.log(stringReplace(psycho));
