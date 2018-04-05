'use strict';

// first try
export function addNum (a: number, b: number): number {
  return a + b;
}

// sum-test

export class Sum {
  sumarray: any = [];

  constructor(sumarray: any) {
    this.sumarray = sumarray
  }

  sum() {
    let sum = 0;
    this.sumarray.forEach(item => {
    if (typeof item === 'number')
    sum += item;
    });
    return sum;
  }  
}

//let summa = new Sum([1,2,3,4,5]);
//console.log(summa.sum());

