'use strict';
// Queue of festivalgoers at entry
// no. of alcohol units
// no. of guns
// Create a securityCheck function that takes the queue as a parameter and returns a list of festivalgoers who can enter the festival
// If guns are found, remove them and put them on the watchlist (only the names)
// If alcohol is found confiscate it (set it to zero and add it to security_alchol_loot) and let them enter the festival

const queue: any[] = [
  { name: 'Margo', alcohol: 10, guns: 1 },
  { name: 'Isti', alcohol: 0, guns: 0 },
  { name: 'Dia', alcohol: 0, guns: 1 },
  { name: 'Dorika', alcohol: 1, guns: 1 },
  { name: 'Adypapa', alcohol: 10, guns: 0 },
  { name: 'Alma', alcohol: 2, guns: 0 },
  { name: 'AradiPeti', alcohol: 20, guns: 0 }
];

let names: string = '';
queue.forEach(function(item) {
  names += item.name + ' ';
  }); 
console.log(names);

let alcohols: number = 0;
queue.forEach(function(item) {
  alcohols += item.alcohol;
  }); 
console.log(alcohols);

let gun: number = 0;
queue.forEach(function(item) {
  gun += item.guns;
  }); 
console.log(gun);

let watchlist: string[] = [];
let securityAlcoholLoot: number = 0;
let canGoIn: any [] = [];

function securityCheck(queue: any[]) {
  for (let i: number = 0; i < queue.length; i++) {
    if (queue[i].guns > 0) {
      watchlist = watchlist.concat(queue[i].name);
    } else if (queue[i].alcohol >= 0) {
      securityAlcoholLoot += queue[i].alcohol;
      queue[i].alcohol = 0;
      canGoIn = canGoIn.concat(queue[i].name);
    }
  }
console.log('Persons with guns: ' + watchlist);
console.log('Confiscated alcohol loot: ' + securityAlcoholLoot);
console.log('They can go in: ' + canGoIn);
}

securityCheck(queue);
export = securityCheck;