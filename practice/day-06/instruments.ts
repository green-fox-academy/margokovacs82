'use strict';

export abstract class Instrument {
  protected name: string;
  abstract play() 
}

export abstract class Stringed extends Instrument {
  protected numberOfStrings: number;
  play(): string {
    return (`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`)
  }
  abstract sound() 
}

export class ElectricGuitar extends Stringed {
  name = 'Elctric Guitar';
  constructor (numberOfStrings: number = 6) {
    super()
    this.numberOfStrings = numberOfStrings;
  }
  sound(): string {
    return 'Twangg';
  };
}

export class BassGuitar extends Stringed {
  name = 'Bass Guitar';
  constructor (numberOfStrings: number = 4) {
    super()
    this.numberOfStrings = numberOfStrings;
  }
  sound(): string {
    return 'Duum-duum-duum';
  };
}

export class Violin extends Stringed {
  name = 'Violin';
  constructor (numberOfStrings: number = 4) {
    super()
    this.numberOfStrings = numberOfStrings;
  }
  sound(): string {
    return 'Screech';
  };
}

console.log('Test 1, create Electric Guitar, Bass Guitar and Violin with default strings.');
let guitar = new ElectricGuitar();
let bassGuitar = new BassGuitar();
let violin = new Violin();

console.log('Test 1 Play');
console.log(guitar.play());
console.log(bassGuitar.play());
console.log(violin.play());

//Electric Guitar, a 6-stringed instrument that goes Twang
//Bass Guitar, a 4-stringed instrument that goes Duum-duum-duum
//Violin, a 4-stringed instrument that goes Screech

console.log('Test 2, create Electric Guitar, Bass Guitar with 7 and 5 strings .');
let guitar2 = new ElectricGuitar(7);
let bassGuitar2 = new BassGuitar(5);

console.log('Test 2 Play');
console.log(guitar2.play());
console.log(bassGuitar2.play());

//Electric Guitar, a 7-stringed instrument that goes Twangg
//Bass Guitar, a 5-stringed instrument that goes Duum-duum-duum