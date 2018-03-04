// Given a string, compute recursively a new string where all the
// adjacent chars are now separated by a '*'.
'use strict';

function changeAll (x: string) {
  x = x.match(/.{1}/g).join('*');
  return x;
}
console.log(changeAll("Why don't you take Xanax cos Xanax is great?"));

