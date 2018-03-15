'use strict';
//Create a Station and a Car classes
//Station
    //gasAmount
     //refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
//Car
    //gasAmount
    //capacity

//create constructor for Car where:
//initialize gasAmount -> 0
//initialize capacity -> 100

import { Car } from './car'

export class Station {
  gasAmount :number;
  capacity: number;

  constructor(gasAmount: number) {
    this.gasAmount = gasAmount;
    
  }
  refill(car) {
    this.gasAmount -= car.capacity - car.gasAmount;
    car.addGas();
  }
}



let lukoil = new Station(200);
let bmw = new Car(0, 100);
lukoil.refill(bmw);
console.log(bmw);
console.log(lukoil);

