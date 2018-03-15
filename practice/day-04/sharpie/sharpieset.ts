//Reuse your Sharpie class
//Create SharpieSet class
//it contains a list of Sharpie
//countUsable() -> sharpie is usable if it has ink in it
//removeTrash() -> removes all unusable sharpies
'use strict';
import { Sharpie } from './sharpie';

class SharpieSet {
  sharpies: Sharpie [] = [];
  
  add(newItem: Sharpie) {
    this.sharpies.push(newItem);
  }
  countUsable() {
    for (let i: number = 0; i < this.sharpies.length; i++) {
      if (this.sharpies[i].inkAmount <= 0) {
        this.sharpies[i].usable = false;
       }
    }
  }
  removeTrash() {
    for (let i:number = 0; i < this.sharpies.length; i++) {
      if(this.sharpies[i].usable === false) {
        this.sharpies.splice(i, 1);
      }
    }
  }
}

let sharpie1: Sharpie = new Sharpie("blue", 20);
let sharpie2: Sharpie = new Sharpie("red", 40);
let sharpie3: Sharpie = new Sharpie("green", 10);
let sharpie4: Sharpie = new Sharpie("yellow", 200);

let moreSharpies = new SharpieSet;
moreSharpies.add(sharpie1);
moreSharpies.add(sharpie2);
moreSharpies.add(sharpie3);
moreSharpies.add(sharpie4);


sharpie4.use(200);
console.log(sharpie4.inkAmount);
moreSharpies.countUsable();
console.log(moreSharpies);
moreSharpies.removeTrash();
console.log(moreSharpies);
 
