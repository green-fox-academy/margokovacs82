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

  progress() {
    let counter = 0;
    if(counter % 2 === 1) {
      this.animals.eat();
      this.animals.drink();
      this.animals.Play();
    }
    this.breed();
    this.slaughter();

    console.log(`We have ${this.animals.length} sheeps`);

    if(this.animals.length >= this.slots) {
      console.log('Full');
    }
    if(this.animals.length === 0) {
      console.log('We are bankrupt');
    } 
    if(this.animals.length > 0 && this.animals.length < this.slots) {
      console.log('Okay');
    }
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
console.log(SheepFarm.animals.length);
SheepFarm.slaughter();
console.log(SheepFarm.animals.length);
console.log('---------------------');
console.log(SheepFarm.animals);
SheepFarm.progress();
console.log(SheepFarm.animals.length);
//const button = document.querySelector('button');
// Add a click event to the button and call 'progress'
// The progress function should log the following to the console:
//  -  The farm has 20 living animals, we are full
