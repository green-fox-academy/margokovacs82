'use strict';
// There are 3 kind of fishes:
// - Clownfish, gains 1 gramm when feeded and has stripe color.
// - Tang, gains 1 gramms when feeded and can suffer short-term memory loss.
// - Koi, gains 2 gramms when feeded.
// Each fish has a name, weight, color and has a status and feed method.
// Create an aquarium and take care of your fishes.
// Create a method on the aquarium that feeds all the fishes in the aquarium:
// increases the weight of every fish with the amount of gramms they gain when feeded.
// Create a method on the aquarium that removes the big fishes.
// A big fish's weight is at least 11 gramms.
// The aquarium has a status method it should print the status for each fish.

export class Aquarium {
  fishes: Fish [];
  name: string;
  weight: number;
  color: string;
  fishstatus: boolean;
  gain: number;
 
  constructor() {
    this.fishes = [];
  }

  add(fis: Fish) {
    this.fishes.push(fis);
  }

  status() {
    for (let i: number = 0; i < this.fishes.length; i++) {
      console.log(`${this.fishes[i].name}, weight: ${this.fishes[i].weight}, color: ${this.fishes[i].color}, short-term memory loss: ${this.fishes[i].fishstatus}.`)
    }
  }

  feed() {
    for (let i: number = 0; i < this.fishes.length; i++) {
      this.fishes[i].weight += this.fishes[i].gain;
    }
  }

  removeOversizedFishes() {
    for (let i: number = 0; i < this.fishes.length; i++) {
      if (this.fishes[i].weight >= 11) {
        this.fishes.splice(i, 1);
      }
    }
  }
}

export class Fish extends Aquarium {
 
  constructor(name, weight, color, fishstatus?) {
    super();
  }
}

export class Clownfish extends Fish {
  name: string;
  weight: number;
  color: string;
  fishstatus: boolean;
  gain: number;

  constructor(name, weight, color, fishstatus?) {
    super(name, weight, color);
    this.name = name;
    this.weight = weight;
    this.color = 'striped';
    this.fishstatus = false;
    this.gain = 1;
  }
}

export class Tang extends Fish {
  name: string;
  weight: number;
  color: string;
  fishstatus: boolean;
  gain: number;

  constructor(name, weight, color, fishstatus?) {
    super(name, weight, color);
    this.name = name;
    this.weight = weight;
    this.color = color;
    this.fishstatus = true;
    this.gain = 1;
  } 
}

export class Koi extends Fish {
  name: string;
  weight: number;
  color: string;
  fishstatus: boolean;
  gain: number;

  constructor(name, weight, color, fishstatus?) {
    super(name, weight, color);
    this.name = name;
    this.weight = weight;
    this.color = color;
    this.fishstatus = false;
    this.gain = 2;
  }
}

const aquarium: Aquarium = new Aquarium();

aquarium.add(new Koi('Nami', 9, 'pink'));
aquarium.add(new Tang('Dory', 8, 'blue', true));
aquarium.add(new Tang('Bubbles', 10, 'yellow', false));
aquarium.add(new Clownfish('Nemo', 5, 'orange', 'white'));
console.log(aquarium.status());
// Nami, weight: 9, color: pink
// Dory, weight: 8, color: blue, short-term memory loss: true
// Bubbles, weight: 10, color: yellow, short-term memory loss: false
// Nemo, weight: 5, color: orange, stripe color: white
aquarium.feed();
console.log(aquarium.status());

aquarium.removeOversizedFishes();
console.log(aquarium.status());
// Dory, weight: 9, color: blue, short-term memory loss: true
// Nemo, weight: 6, color: orange, stripe color: white
