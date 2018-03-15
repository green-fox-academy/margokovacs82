'use strict';

import {Station } from './petrol'

export class Car {
  gasAmount: number;
  capacity: number;

  constructor(gasAmount: number, capacity: number) {
    this.gasAmount = 0;
    this.capacity = 100;
  }
  addGas () {
    this.gasAmount += this.capacity;
  }
}
