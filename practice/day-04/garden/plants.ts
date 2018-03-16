'use strict';
import { Garden } from './garden';
import { Flower } from './flower';
import { Tree } from './tree';

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