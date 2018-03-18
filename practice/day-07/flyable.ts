'use strict';
//Create a Flyable interface
//it should have land, fly and takeOff methods (TakeOff in C#)
//Create an abstract Vehicle class
//it should have at least 3 fields
//Extend Helicopter class from Vehicle
//implement your Flyable interface
//Extend Bird from your abstract Animal class (zoo exercise)
//implement yourˇFlyable interface

interface Flyable {
  land();
  fly(km: number);
  takeOff();
}

abstract class Vehicle {
  type: string;
  color: string;
  petrol: number;
  miles: number;

  constructor(type, color) {
    this.type = type;
    this.color = color;
    this.petrol = 0;
    this.miles = 0;
  }
  abstract tanking(amount);
  abstract getStatus();
}

class Helicopter extends Vehicle implements Flyable{
  type = "helicopter";
  max: number;

  constructor(type, color){
    super(type, color);
    this.max = 15;
  }

  getStatus() {
    console.log(`The ${this.color} ${this.type} has ${this.petrol} liter fuel in his tank.`)
  }
  
  tanking(amount) {
    if (this.petrol < 5) {
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
      //console.log(`The ${this.color} ${this.type} can take off and travel ${this.miles} km.`);
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

class Plane extends Vehicle implements Flyable{
  type = "plane";
  max: number;

  constructor(type, color){
    super(type, color);
    this.max = 10;
  }

  getStatus() {
    console.log(`The ${this.color} ${this.type} has ${this.petrol} liter fuel in his tank.`)
  }

  tanking(amount) {
    if (this.petrol < 5) {
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
      //console.log(`The ${this.color} ${this.type} can take off and travel ${this.miles} km.`);
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

let heli = new Helicopter('helicopter', 'yellow');
let plani = new Plane('plane', 'red');

plani.getStatus();
plani.takeOff();
plani.tanking(6);
plani.fly(10);
plani.getStatus();

heli.getStatus();
heli.takeOff();
heli.tanking(20);
heli.fly(20);
heli.getStatus();
heli.land();