'use strict';

//import { Printable } from './printable';

interface Comparable {
  compareTo(other: Comparable): number; 
}
  
class Domino implements Comparable {
  values: number[];
  constructor(valueA: number, valueB: number) {
    this.values = [valueA, valueB];
  }
  compareTo(x: Domino) {
    return this.values[0] - x.values[0];
  }
  //printAllFields() {
    //return this.values;
 // }
}

let dominoes: Domino [] = [];
dominoes.push(new Domino(5, 2));
dominoes.push(new Domino(4, 6));
dominoes.push(new Domino(1, 5));
dominoes.push(new Domino(6, 7));
dominoes.push(new Domino(2 ,4));
dominoes.push(new Domino(7, 1));

let newlist = dominoes.sort(function (a: Domino , b: Domino): number {
  return a.compareTo(b);
});

console.log(newlist);

//for (let domino of dominoes) {
  //domino.printAllFields();
//}


  /*
  * returns negative number if this is smaller than other
  * returns 0 if they are the same
  * returns positive number if this is greater than other
  */

// the order of your dominoes should look like this: [[1,5], [2,4], [4,6], [5,2], [6,7], [7,1]]
