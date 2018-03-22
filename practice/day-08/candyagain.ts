'use strict';

export class CandyShop {
  sugarstorage: number;
  moneystorage: number;
  candies: Candie[];
  lollipops: Lollipop[];

  constructor(sugarstorage) {
    this.sugarstorage = sugarstorage;
    this.moneystorage = 0;
    this.candies = [];
    this.lollipops = [];
  }
  
  add1(candie: Candie) {
    this.candies.push(candie);
  }

  //add2(lolli: Lollipop) {
    //this.lollipops.push(lolli);
 // }

  createSweets(type: string) {
    if (type === 'lollipop') {
      this.lollipops.push();
      this.sugarstorage -= 5;
    }
    if (type === 'candy') {
      this.candies.push();
      this.sugarstorage -= 10;
    }

  }
  raisePrice() {}
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

/*
candyshop.createSweets('candy')
candyshop.createSweets('candy')
candyshop.createSweets('lollipop')
candyshop.createSweets('lollipop')
console.log(candyshop);
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