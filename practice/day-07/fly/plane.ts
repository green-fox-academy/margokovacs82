'use strict';
import { Vehicle } from './vehicle'

export class Plane extends Vehicle {
  type = "plane";
  max: number;
  min: number;

  constructor(type, color){
    super(type, color);
    this.max = 20;
    this.min = 10;
  }
}