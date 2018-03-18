'use strict';
// The crash-incidents.csv file contains data of road crash-incidents.
// (id; location; surface type; surface condition; light condition; weather condition; crash date; year)
// Your task will be to count how many crash-incidents happened at good/bad
// weather conditions.
// Good weather conditions are CLOUDY and CLEAR.
// Bad weather conditions are RAIN, FREEZING RAIN, SNOW, FOG and SEVERE CROSSWINDS.
// So create the necessary method(s) that returns with the amount of crash-incidents.
// And print the return value to the console:
// The amount of crashes at good weather conditions: {amount}
// The amount of crashes at bad weather conditions: {amount}
const fs = require('fs');

class Crashes {
  bad: number = 0;
  good: number = 0;
  
  constructor() {
    this.good = this.good;
    this.bad = this.bad;
  }

   getCrash () {
    let fileC: string = fs.readFileSync('crashes.txt', 'utf-8').split('\r\n');
    for (let i:number = 0; i < fileC.length; i++) {
      if (fileC[i].indexOf('CLOUDY') !== -1 || fileC[i].indexOf('CLEAR') !== -1 ) {
        this.bad ++;
      } else {
        this.good ++
      } 
    } return this.good, this.bad
  }
      
  print() {
    console.log(`The amount of crashes at good weather conditions: ${this.good}.\r\n The amount of crashes at bad weather conditions: ${this.bad}`)
  }
}

let conditions = new Crashes();
conditions.getCrash();
conditions.print(); 