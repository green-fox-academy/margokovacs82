'use strict';
//import { Plant } from './plants';
//import { Flower } from './flower';
//import { Tree } from './tree';

export class Garden {
  plants: Plant[];

  constructor() {
    this.plants = [];
  }

  addPlant(p: Plant) {
    this.plants.push(p);
  }

  waterPlants(water: number) {
    let thirstyplants: number = 0; 
    for (let i: number = 0; i < garden.plants.length; i++) {
      if (garden.plants[i].waterNeed()) {
        thirstyplants++;
      }
    }
    for (let i: number = 0; i < garden.plants.length; i++) {
      if (garden.plants[i].waterNeed()) {
        this.plants[i].waterIt(water / thirstyplants);
      }
    }
  }
}

export class Plant extends Garden {
  type: string;
  color: string;
  waterLevel: number;
  
  constructor(color: string) {
    super()
    this.color = color;
    this.waterLevel = 0;
  }

  get plantType() {
    return this.type;
  }

  get plantColor() {
    return this.color;
  }

  waterIt (amount) { 
  this.waterLevel += amount;
  }
}

export class Tree extends Plant {
  type: string;
  
  constructor(color) {
    super(color);
    this.type = 'tree'; 
  }

  waterNeed() {
    if (this.waterLevel < 10) {
      return true;
    }
  }
  
  waterIt (amount) { 
    this.waterLevel += amount * 0.4;
  }
}


export class Flower extends Plant {
  type: string;

  constructor(color) {
    super(color);
    this.type = 'flower'; 
  }
  
  waterNeed() {
    if (this.waterLevel < 5) {
      return true;
    }
  }

  waterIt (amount) { 
    this.waterLevel += amount * 0.75;
  }
}

let garden = new Garden();
garden.addPlant(new Flower('blue'));
garden.addPlant(new Tree('green',));
garden.addPlant(new Flower('purple'));
garden.addPlant(new Tree('orange'));
console.log(garden);
console.log('-----------------');
garden.waterPlants(40);
console.log(garden);
garden.waterPlants(70);
console.log(garden);