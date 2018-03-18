'use strict';

import { Vehicle } from './vehicle'
import { Plane } from './plane'
import { Helicopter } from './heli'

export class ParkingLot {
  flyingobjects: Vehicle[];

  constructor() {
    this.flyingobjects = [];
  }
  addThings(fl: Vehicle) {
    this.flyingobjects.push(fl);
  }
}

let carrie = new ParkingLot();
let heli = new Helicopter('helicopter', 'yellow');
let plani = new Plane('plane', 'red');
carrie.addThings(heli);
carrie.addThings(plani);
heli.tanking(20);
heli.getStatus();
console.log(carrie);
heli.fly(24);
heli.getStatus();
console.log(carrie);