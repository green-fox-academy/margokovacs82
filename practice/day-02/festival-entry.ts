'use strict';
const queue: any[] = [
  { name: 'Amanda', alcohol: 10, guns: 1 },
  { name: 'Tibi', alcohol: 0, guns: 0 },
  { name: 'Dolores', alcohol: 0, guns: 1 },
  { name: 'Wade', alcohol: 1, guns: 1 },
  { name: 'Anna', alcohol: 10, guns: 0 },
  { name: 'Rob', alcohol: 2, guns: 0 },
  { name: 'Joerg', alcohol: 20, guns: 0 }
];

// Queue of festivalgoers at entry
// no. of alcohol units
// no. of guns

let alco: number = 0;
let pist: number = 0; 
queue.forEach(function(item) {
  alco += item.alcohol;
  pist += item.guns;
})
console.log("so much alcohol: " + alco);
console.log("so much guns: " + pist);


let watchlist: string [] = [];
let securityAlcoholLoot: number = 0;
let canGoIn: number [] = [];

queue.forEach(function(item) {
  if (item.guns > 0) {
    watchlist.push(item.name);
    
  } else if (item.alcohol > 0) {
    securityAlcoholLoot += item.alcohol;
    item.alcohol = 0;
    canGoIn = canGoIn.concat(item.name);
  }
})
console.log('Persons with guns: ' + watchlist);
console.log('Confiscated alcohol loot: ' + securityAlcoholLoot);
console.log('They can go in: ' + canGoIn);



// Create a securityCheck function that takes the queue as a parameter and returns a list of festivalgoers who can enter the festival
// If guns are found, remove them and put them on the watchlist (only the names)
// If alcohol is found confiscate it (set it to zero and add it to security_alchol_loot) and let them enter the festival
//export = securityCheck;