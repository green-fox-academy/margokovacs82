'use strict';

export class CandyShop {
  inventory: string;
  sugarstorage: number;
  moneystorage: number;
  candies: Candie[];
  lollipops: Lollipop[];

  constructor(sugarstorage) {
    this.candies = [];
    this.lollipops = [];
    this.sugarstorage = sugarstorage;
    this.moneystorage = 0;
    this.inventory = ` ${this.candies.length} candies, ${this.lollipops.length} lollipops, income: ${this.moneystorage}, sugar: ${this.sugarstorage}`;
  }
  
  createSweets(type: string) {
    if (type === 'lollipop') {
      this.lollipops.push(new Lollipop);
      this.sugarstorage -= 5; 
    }
    if (type === 'candy') {
      this.candies.push(new Candie);
      this.sugarstorage -= 10;  
    }
  }

  raiseprice(percent: number) {
    for (let i: number = 0; i < this.lollipops.length; i++) {
      this.lollipops[i].price *= (100 + percent) / 100;
    }
    for (let i: number = 0; i < this.candies.length; i++) {
      this.candies[i].price *= (100 + percent) / 100;
    }
  }

  sell() {}
  buySugar() {}

}

abstract class Sweets {
  price: number;
  sugarNeed: number;
  type: string;
  
  constructor(price, sugarNeed, type) {
    this.price = price;
    this.sugarNeed = sugarNeed;
    this.type = type;
  }
}

export class Lollipop extends Sweets {
  constructor(price = 10, sugarNeed = 5, type = 'lollipop') {
    super(price, sugarNeed, type)
  }
}

export class Candie extends Sweets {
  constructor(price = 20, sugarNeed = 10, type = 'candie') {
    super(price, sugarNeed, type)
  }
}

let candyshop = new CandyShop(300);

candyshop.createSweets('candy')
candyshop.createSweets('candy')
candyshop.createSweets('lollipop')
candyshop.createSweets('lollipop')
console.log(candyshop);
candyshop.raiseprice(5)
console.log(candyshop);
/*
//print.candyshop???
// Should print out:
// Invetory: 2 candies, 2 lollipops, Income: 0, Sugar: 270gr
candyshop.sell('candy', 1)
//print(candy_shop)
//# Should print out:
//# 'Invetory: 1 candies, 2 lollipops, Income:20, Sugar: 270gr'
candyshop.raisePrice(5)
candyshop.sell('lollipop', 1)
//print(candy_shop)
//# Should print out:
//# 'Invetory: 1 candies, 1 lollipops, Income:30.5, Sugar: 270gr'
candyshop.buySugar(300)
//print(candy_shop)
//Should print out:
//'Invetory: 1 candies, 1 lollipops, Income:5, Sugar: 570gr'
*/