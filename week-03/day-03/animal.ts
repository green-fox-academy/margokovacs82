//Create an Animal class
//Every animal has a hunger value, which is a whole number
//Every animal has a thirst value, which is a whole number
//when creating a new animal object these values are created with the default 50 value
//Every animal can eat() which decreases their hunger by one
//Every animal can drink() which decreases their thirst by one
//Every animal can play() which increases both by one
'use strict';

class Animals {
  hunger: number = 50;
  thirst: number = 50;
 
  constructor() {
    this.hunger = 50;
    this.thirst = 50;
  }
  kill() {
    this.hunger++;
    this.thirst++;
  }
  eat() {
    this.hunger--;
  }
  drink() {
    this.thirst--;
  }
}
let satan = new Animals();
while (satan.hunger !== 100) {
satan.kill();
}
console.log(satan.hunger);