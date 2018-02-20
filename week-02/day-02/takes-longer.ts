'use strict';
// When saving this quote a disk error has occured. Please fix it.
// Add "always takes longer than" to between the words "It" and "you"
let quote: string = 'Hofstadter\'s Law: It you expect, even when you take into account Hofstadter\'s Law.';
let addon: string = "";


quote = addon.concat(quote.slice(0, 18), "always takes longer than ",(quote.slice(21, 82))); 

console.log(quote);

