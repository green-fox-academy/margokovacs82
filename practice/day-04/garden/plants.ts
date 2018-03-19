'use strict';
//import { Garden } from './garden';
//import { Flower } from './flower';
//import { Tree } from './tree';

export abstract class Plant {
  type: string;
  color: string;
  waterLevel: number;
  
  constructor(color: string) {
   
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
  abstract waterNeed();
}