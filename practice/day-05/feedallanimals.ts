'use strict';

export class Animal {
  animals: Mammal[];
  constructor() {
    this.animals = [];
  }

  addMammal(animal: Mammal) {
    this.animals.push(animal);
  }
  
  feedEveryOne(amount: number) {
    let zsuzsiehes = 0;
    for (let i: number = 0; i < zoo.animals.length; i++) {
      if (zoo.animals[i].hungry()) {
        zsuzsiehes ++
      }
    } for (let i:number = 0; i < zoo.animals.length; i++) {
      if (zoo.animals[i].hungry()) {
      zoo.animals[i].feedIt(amount / zsuzsiehes);
      } 
    }
  } 

  listAnim() {
    for(let i = 0; i < this.animals.length; i++) {
    console.log(this.animals[i].animalName);
    }
  }
}

export class Mammal extends Animal {
  name: string;
  age: number;
  gender: string;
  type: string;
  fullness: number;
  
  constructor(name, age, gender) {
    super();
    this.name = name;
    this.age = age;
    this.gender = gender; 
    this.fullness = 0;
  }
  get animalType() {
    return this.type;
  }
  get animalAge() {
    return this.age;
  }
  get animalGender() {
    return this.gender;
  }
  get animalName() {
    return this.name;
  }

  hungry(): boolean { 
    return this.fullness < 10;
  }

  feedIt(amount){
    this.fullness += amount;
  }
}

export class Dog extends Mammal {
  type: string;
  constructor(name, age, gender) {
    super(name, age, gender);
    this.type = 'dog';
  }
  feedIt(amount){
    this.fullness += amount * 0.5;
  }
}

export class Cat extends Mammal {
  type: string;
  constructor(name, age, gender) {
    super(name, age, gender);
    this.type = 'cat'
  }
  feedIt(amount){
    this.fullness += amount * 0.8;
  }
}

let zoo = new Animal();
let mici = new Cat('Mici', 3, 'female');
let jozsi = new Cat('Jozsi', 7, 'male');
let dikk = new Dog('Dik', 5, 'female');
zoo.addMammal(mici);
zoo.addMammal(jozsi);
zoo.addMammal(dikk);
console.log(dikk.animalName);
console.log(zoo.listAnim());
zoo.feedEveryOne(30);
console.log(zoo);
zoo.feedEveryOne(30);
console.log(zoo);
zoo.feedEveryOne(30);
console.log(zoo);




