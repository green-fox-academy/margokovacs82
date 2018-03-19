'use strict';
//import { Garden } from './garden';
import { Plant } from './plants';

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