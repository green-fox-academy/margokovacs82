'use strict';
// I would like to replace "dishwasher" with "galaxy" in this example
// Please fix it for me!
// Expected ouput: In a galaxy far far away
let example: string = 'In a dishwasher far far away';
example = example.replace('dishwasher', 'galaxy');
console.log(example);


// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!
let reversed: string = '.eslaf eb t\'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI';
function reverse(x: string) {
  let splitString = reversed.split('').reverse().join(''); 
  return splitString;
}
console.log(reverse(reversed));


// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!
let url: string = 'https//www.reddit.com/r/nevertellmethebots';
url = url.replace('nevertellmethebots', 'nevertellmetheodds');
url = url.replace('https//', 'https://');
console.log(url);

// b-version:
url = url
  .replace('bots','odds')
  .replace('/',':/');

  
// When saving this quote a disk error has occured. Please fix it.
// Add "always takes longer than" to between the words "It" and "you"
let quote: string = 'Hofstadter\'s Law: It you expect, even when you take into account Hofstadter\'s Law.'
quote = quote.replace('you', 'always takes longer than you');
console.log(quote);

//b-version
let sideString: string = '';
quote = sideString.concat(quote.slice(0, quote.indexOf('you')),'always takes longer than ', quote.slice(quote.indexOf('you'), quote.length));
console.log(quote);


// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention
// Expected outpt:
// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

let todoText: string = 'My todo: \n\r - Buy milk\n - Download games\n\r -\t Diablo';
console.log(todoText);


// Things are a little bit messed up
// Your job is to decode the notSoCrypticMessage by using the hashmap as a look up table
// Assemble the fragments into the out variable

let notSoCrypticMessage: number[] = [1, 12, 1, 2, 11, 1, 7, 11, 1, 49, 1, 3, 11, 1, 50, 11];

let hashmap = {
  7: 'run around and desert you',
  50: 'tell a lie and hurt you ',
  49: 'make you cry, ',
  2: 'let you down',
  12: 'give you up, ',
  1: 'Never gonna ',
  11: '\n',
  3: 'say goodbye '
};

let out: string = '';
for (let i:number = 0; i < notSoCrypticMessage.length; i++) {
  let position: number = notSoCrypticMessage[i];
  out += hashmap[position];
}

console.log(out)
