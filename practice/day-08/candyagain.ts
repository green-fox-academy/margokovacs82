'use strict';

export class CandyShop {
  sugarstorage: number;
  moneystorage: number;
  candies: Candie[];
  lollipops: Lollipop[];

  constructor(sugarstorage) {
    this.candies = [];
    this.lollipops = [];
    this.sugarstorage = sugarstorage;
    this.moneystorage = 0;
  }
  
  createSweets(type: string) {
    if (type === 'lollipop') {
      this.lollipops.push(new Lollipop);
      this.sugarstorage -= 5; 
    }
    if (type === 'candy') {
      this.candies.push(new Candie);
      this.sugarstorage -= 10;  
    } return this.sugarstorage
  } 

  raiseprice(percent: number) {
    for (let i: number = 0; i < this.lollipops.length; i++) {
      this.lollipops[i].price *= (100 + percent) / 100;
    }
    for (let i: number = 0; i < this.candies.length; i++) {
      this.candies[i].price *= (100 + percent) / 100;
    }
  }

  sell(type: string, piece: number) {
    if (type === 'candy') {
      this.candies.length -= piece;
      this.moneystorage += 10;
    }
    if (type === 'lollipop') {
      this.lollipops.length -= piece;
      this.moneystorage += 20;
    }
  }

  buySugar(amount: number) {
    

  }
  
  print() {
    console.log(`Inventory: ${this.candies.length} candies, ${this.lollipops.length} lollipops, income: ${this.moneystorage}, sugar: ${this.sugarstorage}`);
  }
}

abstract class Sweets {
  price: number;
  sugarNeed: number;
  
  constructor(price, sugarNeed) {
    this.price = price;
    this.sugarNeed = sugarNeed;
  }
}

export class Lollipop extends Sweets {
  constructor(price = 10, sugarNeed = 5) {
    super(price, sugarNeed)
  }
}

export class Candie extends Sweets {
  constructor(price = 20, sugarNeed = 10) {
    super(price, sugarNeed)
  }
}

let candyshop = new CandyShop(300);

candyshop.createSweets('candy')
candyshop.createSweets('candy')
candyshop.createSweets('lollipop')
candyshop.createSweets('lollipop')
candyshop.print();
// Should print out:
// Invetory: 2 candies, 2 lollipops, Income: 0, Sugar: 270g'
candyshop.sell('candy', 1)
candyshop.print();
//# Should print out:
//# 'Invetory: 1 candies, 2 lollipops, Income:20, Sugar: 270gr'
candyshop.raiseprice(5)
//console.log(candyshop);
candyshop.sell('lollipop', 1)
candyshop.print();
//# 'Invetory: 1 candies, 1 lollipops, Income:30.5, Sugar: 270gr'

/*
candyshop.buySugar(300)
//print(candy_shop)
//Should print out:
//'Invetory: 1 candies, 1 lollipops, Income:5, Sugar: 570gr'
*/