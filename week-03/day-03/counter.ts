//Create a Counter class which has an integer property
//when creating it should have a default value 0 or we can specify it when creating
//we can add(number) to increase the counter's value by a whole number
//or we can add() without parameters just increasing the counter's value by one
//and we can get() the current value as string
//also we can reset() the value to the initial value
'use strict';

class Counter {
  num: number;
  initValue: number;

  constructor(number?: number) {
    this.num = number || 0;
    this.initValue = number || 0;
  }
  add(numb?: number) {
    this.num += Math.floor(numb) || 1; 
  }
  get() {
    let str = this.num.toString();
    return str;
  }
  reset() {
    this.num = this.initValue;
  }
}
let counter = new Counter;
console.log(counter.get());
counter.add(10);
console.log(counter.get());
counter.reset();
console.log(counter.get());