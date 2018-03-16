'use strict';
import { Garden } from './garden';
import { Plant } from './plants';

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