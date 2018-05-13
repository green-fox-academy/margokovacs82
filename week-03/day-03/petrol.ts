/*
Create a Station and a Car classes
Station
gasAmount
refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
Car
gasAmount
capacity
create constructor for Car where:
initialize gasAmount -> 0
initialize capacity -> 100
*/

class Car {
  gasStart: number = 0;
  capacity: number = 100;

}

class Station extends Car{
  gasAmount: number;

  constructor() {
    super();
    this.gasAmount = 1000;
  }

  refill(car){
    this.gasAmount -= this.capacity;
    this.gasStart += this.capacity;
  }

  status() {
    console.log(`The station has ${this.gasAmount} liter of benzin left, 
                the car has ${this.gasStart} liter of benzin in the tank.`);
  }
}

let ferrari = new Car();
let lidl = new Station();

lidl.refill(ferrari);
lidl.status();
lidl.refill(ferrari);
lidl.status();
