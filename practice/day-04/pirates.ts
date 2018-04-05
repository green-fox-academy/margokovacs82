'use strict';

class PirateCrew {
  pirates: Pirate [] = [];

  add(newPirate: Pirate) {
    this.pirates.push(newPirate);
  }

  howsGoingMate() {
    return this.pirates.map(newPirate => newPirate.howsItGoingMate()).join('\n');
  }

  drinkRum(many) {
    return this.pirates.map(newPirate => newPirate.drinkSomeRum(many));
  }

  die(name?: string) {
    this.pirates.map((e, i, a) => {
      if (e.name === name) {
        a.splice(i, 1);
      }
    })
       console.log(`R.I.P ${name}`); 
  }

  /*brawl(x, y) {
    for (let i: number = 0; i < this.pirates.length; i++) {
      let x = this.pirates[i];
      let y = this.pirates[i + 1];

      //random szám 0-1-2, és ha 0 ez, ...

    console.log(`R.I.P ${this.pirates[i].name}`)
     } else {
      console.log(`R.I.P ${this.pirates[i + 1].name}`)
     }
    }
  }
*/

}

class Pirate extends PirateCrew {
  name: string;
  intox: number;

  constructor(name: string, intox: number){
    super();
    this.name = name;
    this.intox = intox;
  }

  drinkSomeRum(num: number) {
  this.intox = this.intox + num;
  }

  howsItGoingMate() {
    if (this.intox <= 4) {
      console.log(` ${this.name} says: '"Pour me anudder!"`)
     } else if (this.intox > 4 && this.intox < 7) {
       console.log(` ${this.name} says: Arghh, I'/ma Pirate. How d'/ya d'/ink its goin?`)
     } if (this.intox > 7) {
      console.log(` ${this.name} is dead`);
     }
  }
}

let jani = new PirateCrew;
let lara = new PirateCrew;
let laci = new PirateCrew;

laci.add(new Pirate('Laci', 3));
laci.drinkRum(1);
laci.howsGoingMate();

lara.add(new Pirate('Lara', 3));
lara.drinkRum(1);
lara.howsGoingMate();

jani.add(new Pirate('Jani', 2));
jani.drinkRum(3);
jani.howsGoingMate();

laci.die('laci');
laci.drinkRum(1)

//laci.brawl(jani, lara);

let pirate = new PirateCrew();
console.log(pirate);