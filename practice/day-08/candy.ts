//We run a Candy shop where we sell candies and lollipops
               //One lollipop's price is 10$
               //And it made from 5gr of sugar
               //One candie's price is 20$
               //And it made from 10gr of sugar
               //we can raise their prices with a given percentage

              //Create a CandyShop class
          //It can store sugar and money as income. The constructor should take the amount of sugar in gramms.
          //we can create lollipops and candies store them in the CandyShop's storage
         //If we create a candie or lollipop the CandyShop's sugar amount gets reduced by the amount needed to create the sweets
         //We can raise the prices of all candies and lollipops with a given percentage
         //We can sell candie or lollipop with a given number as amount
        //If we sell sweets the income will be increased by the price of the sweets and we delete it from the inventory
         //We can buy sugar with a given number as amount. The price of 1000gr sugar is 100$
         //If we buy sugar we can raise the CandyShop's amount of sugar and reduce the income by the price of it.
//The CandyShop should be represented as string in this format:
//'Inventory: 3 candies, 2 lollipops, Income: 100, Sugar: 400gr'
'use stirct';

export class CandyShop{
  sugarstorage: number;
  allmoney: number;
  candies: Storage[];
  type: string;
  income: number;
 
  constructor(){
    this.sugarstorage = 1000;
    this.allmoney = 300;
    this.candies = [];
    this.income = 0;
  }

  addCandie(candie: Storage) {
    this.candies.push(candie);
  }

  createCandy(amount: number) {
    if (amount < this.sugarstorage / 20) {
      for (let i: number = 0; i < amount; i++) {
      this.candies.push(new Candie()); 
      } 
      return this.sugarstorage -= (20 * amount);
    } 
   }

   createLolli(amount: number) {
    for (let i: number = 0; i < amount; i++) {
      if (amount < this.sugarstorage / 10) {
        this.candies.push(new Lollipop());
        this.sugarstorage -= (10 * amount);
        amount--;
      }  
    }
  }
  
  sellCandy(pieces: number) {
    if (pieces <= this.candies.length) {
      for (let i: number = 0; i < this.candies.length; i++) {
        //console.log('helloka: ', this.candies[i].type);
        if (this.candies[i].type === 'candy') {
          this.candies.length -= 1;
          this.allmoney += 20;
          this.income += 20;
          this.candies.pop();
        } 
        if (this.candies[i].type === 'lollipop') {
          this.candies.length -= 1;
          this.allmoney += 10;
          this.income += 10;
          this.candies.pop();
        }
      } 
    } else {
      console.log(`You don't have enough candy to sell`);
    } return this.allmoney, this.candies, this.income;
  } 

  buySugar(somany: number) {
    if (somany / 10 <= this.allmoney) {
      this.sugarstorage += somany;
      this.allmoney -= somany / 10;
    } else {
      console.log (`Sorry, you are poor.`)
    }
  }

  consoleMessage() {
    let lollies = 0;
    let cands = 0;
    for (let i: number = 0; i < this.candies.length; i++) {
      if (this.candies[i].type === 'lollipop') {
        lollies += 1;
      } else {
        cands += 1;
      } 
    }
    console.log(`Inventory: ${cands} candies, ${lollies} lollipops, Income: ${this.income}, Sugar: ${this.sugarstorage}`);
  }
}

abstract class Storage  {
  sugar: number;
  price: number;
  type: string;
}
  
class Lollipop extends Storage {
  constructor(){
    super();
    this.sugar = 5;
    this.price = 10;
    this.type = 'lollipop';
  }
  checkStatus() {
    console.log(`A ${this.type} costs ${this.price} dollars.`)
  }

  raiseprice(percent: number) {
    this.price += this.price * percent / 100;
  }
}

class Candie extends Storage {
  constructor(){
    super();
    this.sugar = 10;
    this.price = 20;
    this.type = 'candie'
  }
  
  checkStatus() {
    console.log(`A ${this.type} costs ${this.price} dollars.`)
  }

  raiseprice(percent: number) {
    this.price += this.price * percent / 100;
  }
}

let lollishop = new CandyShop();
let lolli = new Lollipop();
let cand = new Candie();
lollishop.addCandie(lolli);
lollishop.addCandie(cand);

//lolli.raiseprice(30);
//cand.checkStatus();
//lolli.checkStatus();
//lollishop.sellCandy(3);
//console.log(lollishop);
lollishop.buySugar(1000);
console.log(lollishop);
//lollishop.consoleMessage();
lollishop.createCandy(100);
lollishop.consoleMessage();
lollishop.sellCandy(1);
lollishop.consoleMessage();
lollishop.buySugar(300);
console.log(lollishop);
lollishop.consoleMessage();
lollishop.createCandy(10);
console.log(lollishop);
lollishop.createLolli(5);
console.log(lollishop);

