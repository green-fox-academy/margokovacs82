'use strict';

import { ParkingLot } from './main'

export class Vehicle extends ParkingLot{
  type: string;
  color: string;
  petrol: number;
  miles: number;
  max: number;
  min: number;

  constructor(type, color) {
    super()
    this.type = type;
    this.color = color;
    this.petrol = 0;
    this.miles = 0;
  }

  getStatus() {
    console.log(`The ${this.color} ${this.type} has ${this.petrol} liter fuel in his tank.`)
  }

  tanking(amount: number) {
    if (this.petrol < this.min) {
      for (let i: number = 0; i < amount; i++) {
        if (this.petrol < this.max) {
          this.petrol += amount / amount;
          this.miles += amount / amount;
        } 
      }
    } console.log(`You tanked ${this.petrol} liter of benzin and there is ${amount - this.petrol} liter benzin left. You can travel ${this.miles} km.`)
  }

  takeOff() {
    if (this.petrol >= 1) {
      return true;
    } else {
      console.log(`Sorry, your tank is empty, get fuel first!`)
    }
  }

  fly(km: number) {
    if (this.takeOff() && km < this.petrol) {
      this.petrol -= km;
      console.log(`The ${this.color} ${this.type} took off and can travel ${km} km.`)
    } else if (km > this.petrol) {
        km -= this.petrol;
    } console.log(`You traveled ${this.petrol} km with the ${this.color} ${this.type} and you have ${km} km left til your goal.`);
        this.petrol = 0;
  }

  land() {
    if (this.petrol < 2) {
      console.log(`You only have ${this.petrol} liters of fuel, go land with the ${this.color} ${this.type}!`)
    } else {
      console.log(`You have ${this.petrol} liters of fuel, go further with the ${this.color} ${this.type}!`)
    }
  }
}