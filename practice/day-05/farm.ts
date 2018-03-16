'use strict';
// Farm
// Reuse your Animal class
// Create a Farm class
// it has list of Animals
// it has slots which defines the number of free places for animals
// breed() -> creates a new animal if there's place for it
// slaughter() -> removes the least hungry animal

export class Farm {
  slots: 10;
  freeplace: number;
  animals: Animal [];

  constructor() {
    this.animals = [];
  }
  addAnimal(anim: Animal) {
    this.animals.push(anim);
  }
  returnSlots() {
    return this.slots;
  }
  returnFree() {
    console.log(`You have ${this.slots - this.animals.length} places left.`);
  }
  breed() {
    if (this.animals.length > 1 && this.slots > this.animals.length) {
     this.animals.push(new Animal);
    } if (this.slots <= this.animals.length) {
      console.log('You have reached your farm\'s maximum capacity.');
    }
  }
  slaughter() {
      this.animals.sort(function (a, b) {
          return a.hunger - b.hunger
      })
      this.animals.pop();
      return this.animals;
  };    
}
  

export class Animal extends Farm {
  name: string;
  gender: string;
  thirst: 50;
  hunger: 50;

  constructor(name?: string, gender?: string) {
    super()
    this.name = name;
    this.gender = gender;
    this.hunger = 50;
    this.thirst = 50;
  }
  getName() {
    return this.name;
  }
  getGender() {
    return this.gender;
  }
  play(amount: number) {
    if ((this.thirst > 100) || (this.hunger > 100)) {
      console.log(`Sorry, but ${this.name} is dead.`)} 
      else {
    return this.hunger += amount, this.thirst += amount;
    }
  }
  eat(amount: number) {
    return this.hunger -= amount;
  }
  drink(amount: number) {
    return this.thirst -= amount;
  }
}

let mici = new Animal('Mici', 'female');
let lali = new Animal('Lali', 'male');
let juci = new Animal('Juci', 'female');
let farm = new Farm();
farm.addAnimal(new Animal('Nemo', 'male'));
farm.addAnimal(lali);
farm.addAnimal(juci);
console.log(farm);

/*farm.breed();
farm.breed();
farm.breed();
console.log(farm.returnFree());
lali.play(40);
mici.play(60);
farm.slaughter();
console.log(farm);
farm.slaughter();
console.log(farm);*/


