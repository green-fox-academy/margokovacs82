'use strict';
import { Vehicle } from './vehicle'

export class Helicopter extends Vehicle {
  type = "helicopter";
  max: number;
  min: number;

  constructor(type, color){
    super(type, color);
    this.max = 15;
    this.min = 5;
  }
}