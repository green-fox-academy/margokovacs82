class Animal {

  constructor() {
    this.hunger = 5;
    this.thirst = 5;
  }

  eat() {
    this.hunger --;
  }

  drink() {
    this.thirst --;
  }

  play() {
    this.thirst ++;
    this.hunger ++;
  }
}

class Farm {

  constructor(slots) {
    this.slots = slots;
    this.animals = [];
    
  }

  breed() {
    if (this.animals.length <= this.slots) {
      this.animals.push(new Animal());
    }
  }

  slaughter() {
    this.animals.sort(function (a, b) {
      return a.hunger - b.hunger
     })
     this.animals.pop();
     return this.animals;
  }

  info () {
    console.log(`The farm has ${this.animals.length} living animals we are bankrupt`)
  }

  progress() {
   // All animals should have their methods called randomly with 50% chance
//The farm should call its breed and slaughter method at the end of each day
//The farm should print report at the end of each day
//Print the number of sheeps
//Print "bankrupt" if no animals left
//Print "okay" if the number of animals is above zero and under the slot number
//Print "full" if the number of animals are at the maximum allowed
  }
}

// Create a sheep farm with 20 slots
const SheepFarm = new Farm(20);
console.log(SheepFarm.animals.length);
console.log('---------------------');
SheepFarm.breed();
SheepFarm.breed();
SheepFarm.breed();
SheepFarm.breed();
SheepFarm.slaughter();
console.log(SheepFarm.animals.length);
console.log('---------------------');
//console.log(SheepFarm.animals);
SheepFarm.progress();
//const button = document.querySelector('button');

// Add a click event to the button and call 'progress'

// The progress function should log the following to the console:
//  -  The farm has 20 living animals, we are full
