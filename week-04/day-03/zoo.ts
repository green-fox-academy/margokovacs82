'use strict';

export abstract class Animal {
  name: string;
  age: number;
  gender: string;
  play: string;

  constructor(name: string, age: number, gender: string, play: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.play = play;
  }

  abstract doDailyRoutine()
  abstract breed()
  abstract getName()
}

class Mammal extends Animal {
  getName (){
    return this.name;
  }
  doDailyRoutine() {
    return this.play;
  }
  breed(){
    return "falling asleep";
  }
}

class Reptile extends Animal{
  getName (){
    return this.name;
  }
  doDailyRoutine() {
    return this.play;
  }
  breed(){
    return "laying eggs";
  }
} 

interface Flyable {
  land();
  fly();
  takeOff();
}

export class Birds extends Animal implements Flyable {
  getName (){
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

let reptile = new Reptile("Crocodile", 10, 'Female', 'playing');
let mammal = new Mammal("Koala", 10, 'Female', 'play');
let bird = new Birds("Parrot", 10, 'Female', 'play');

console.log("How do you breed?");
console.log("A " + reptile.age + " years old " + reptile.getName() + " is breeding by " + reptile.breed() + " and " + reptile.play);
console.log("A " + mammal.getName() + " is breeding by " + mammal.breed());
console.log("A " + bird.getName() + " is breeding by " + bird.breed()); 
console.log(bird.land());
