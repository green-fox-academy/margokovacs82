//Create a Flyable interface
//it should have land, fly and takeOff methods (TakeOff in C#)
//Create an abstract Vehicle class
//it should have at least 3 fields
//Extend Helicopter class from Vehicle
//implement your Flyable interface
//Extend Bird from your abstract Animal class (zoo exercise)
//implement yourˇFlyable interface
'use strict';

import {Animal} from './zoo';

interface Flyable {
  land();
  fly();
  takeOff();
}

abstract class Vehicle {
  velocity: number;
  color: string;
  size: number;

  constructor(velocity: number, color: string, size: number){
    this.velocity = velocity;
    this.color = color;
    this.size = size;
  }
}

class Helicopter extends Vehicle implements Flyable{ 

  land() {
    return "without engines"
  }
  fly() {
    return "oh my gosh, reaaaaly fast"
  }
  takeOff() {
    return "with a great noise"
  }
}

class Birds extends Animal implements Flyable {
  getName() {
    return this.name;
  }
  doDailyRoutine() {
    return this.play;
  }
  breed(){
    return "laying eggs";
  }
  land() {
    return "fast"
  }
  fly() {
    return "faster"
  }
  takeOff() {
    return "silently"
  }
}
let parrot = new Birds("Juci", 10, 'Female', 'play')
let helico = new Helicopter(120, 'red', 10)
console.log("A " + parrot.getName() + " is breeding by " + parrot.breed() + " and takes off " + parrot.takeOff()); 
console.log("A helicopter lands " + helico.land() + " flys " + helico.fly() + " and takes off " + helico.takeOff()); 
