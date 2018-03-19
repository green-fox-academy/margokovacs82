'use strict';
import { Plant } from './plants';
import { Flower } from './flower';
import { Tree } from './tree';

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