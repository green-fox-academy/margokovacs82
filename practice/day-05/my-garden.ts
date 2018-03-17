'use strict';
'use strict';

export class Garden {
  plants: Plant [];

  constructor() {
    this.plants = [];
  }

  addPlants (pl: Plant) {
    this.plants.push(pl);
  }

  waterThem (amount) {
    let thirsty: number = 0;
    for (let i: number = 0; i < this.plants.length; i++) {
      if (this.plants[i].waterneed()) {
        thirsty ++;
      }
    } 
    for (let i: number = 0; i < this.plants.length; i++) {
      if (this.plants[i].waterneed()) {
      this.plants[i].absorb(amount / thirsty);
      } 
    }
  }
}

export class Plant extends Garden {
  type: string;
  color: string;
  waterLevel: number;

  constructor (color) {
    super();
    this.color = color;
    this.waterLevel = 0;
  }

  absorb (more) {
    this.waterLevel += more;
  }
  
  waterneed () {} 
}

export class Tree extends Plant {
  type: string;

  constructor (color?: string, type?: string) {
    super(color);
    this.type = 'tree';
  }
  waterneed () {
    if (this.waterLevel < 10) {
      return true;
    }
  }
  absorb (more) {
    this.waterLevel += more * 0.4;
  }
  returnWlevel () {
    if (this.waterLevel < 5) {
      console.log(`The ${this.color} ${this.type} needs water.`)
    } else {
      console.log(`The ${this.color} ${this.type} doesn\'t need water.`)
    }
  }
}

export class Flower extends Plant {
  type: string;

  constructor (color?: string, type?: string) {
    super(color);
    this.type = 'flower';
  }
  waterneed () {
    if (this.waterLevel < 5) {
      return true;
    }
  }
  absorb (more) {
    this.waterLevel += more * 0.75;
  }
  returnWlevel () {
    if (this.waterLevel < 5) {
      console.log(`The ${this.color} ${this.type} needs water.`)
    } else {
      console.log(`The ${this.color} ${this.type} doesn\'t need water.`)
    }
  }
}

let park = new Garden();
let jurgen = new Tree('yellow', 'tree');
let flora = new Flower('pink', 'flower');
let todd = new Tree('green', 'tree');
let emi = new Flower('red', 'flower');
park.addPlants(jurgen);
park.addPlants(flora);
park.addPlants(todd);
park.addPlants(emi);
console.log(park);
console.log(flora.returnWlevel());
console.log(jurgen.returnWlevel());
park.waterThem(40);
console.log(park);
console.log(flora.returnWlevel());
console.log(jurgen.returnWlevel());
park.waterThem(40);
console.log(park);
console.log(flora.returnWlevel());
console.log(jurgen.returnWlevel());
park.waterThem(40);
console.log(park);