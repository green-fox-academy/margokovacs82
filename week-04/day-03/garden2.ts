class Plant1 {
  color: string;
  waterlevel: number;
  type: string;

  constructor(color: string) {
    this.color = color;
    this.waterlevel = 0;
  }

  get PlantColor(): string {
    return this.color;
  }

  get PlantType(): string{
    return this.type;
  }
  waterIt(amount: number) {
    this.waterlevel += amount;
  }
  needsWater(): boolean {
    if (this.waterlevel < 5) {
      return true; 
      } else { 
        return false
      }
    }
  }

class Flower1 extends Plant1 {
  color: string;
  waterlevel: number;

  constructor(color: string) {
    super(color);
    this.type = 'flower'; 
  }
  waterIt(amount: number) {
    this.waterlevel += amount * 0.75;
  }
}

class Tree1 extends Plant1 {
  color: string;
  waterlevel: number;

  constructor(color: string) {
    super(color);
    this.type = 'tree';
  }
  needsWater(): boolean {
    return this.waterlevel < 10;
  }
  waterIt(amount: number) {
    this.waterlevel += amount * 0.4;
  }
}

class Garden1 {
  plants: Plant1 [];

  constructor() {
    this.plants = [];
  }

  addPlant (p: Plant1) {
    this.plants.push(p);
  }

  listPlants() {
    for (let i:number = 0; i< this.plants.length; i++) {
      console.log(this.plants[i]);
    }
  }

  waterPlants(amount: number) { 
    if (amount === 0) {
      return;
    }
    const needWaterPlants: Plant1 [] = this.plants.filter(function(plant) {
      return plant.needsWater();
    }) 
   // needWaterPlants.forEach(element, index, array)
   needWaterPlants.forEach(function(plant) {
    plant.waterIt(amount / needWaterPlants.length)
   })

//same in english:

   this.plants.filter((e) => e.needsWater).forEach((e, i, a) => {
     e.waterIt(amount / a.length)
   });

      //just checking the plants:
    //let ThirstyPlants = 0;
    //for (let i:number = 0; i< this.plants.length; i++) {
      //if (this.plants[i].needsWater()) {
       // ThirstyPlants += 1;
      //}
   // }

    //if (needWaterPlants.length !== 0) {  //  no zero please
   // const dose = amount / needWaterPlants.length;

      //for (let i:number = 0; i< this.plants.length; i++) {  // start watering
    //    if (this.plants[i].needsWater()) {
      //  this.plants[i].waterIt(dose);
        //}
      //}
    //}
  }
}

let myGarden = new Garden1();
//let myFlower = new Flower1('blue');
//let myTree = new Tree1('green');
myGarden.addPlant(new Flower1('blue'));
myGarden.addPlant(new Tree1('green'));
console.log(myGarden);
console.log('-------')
myGarden.listPlants();
myGarden.waterPlants(40);
console.log(myGarden);