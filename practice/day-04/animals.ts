//create an Animal class
//Every animal has a hunger value, which is a whole number
//Every animal has a thirst value, which is a whole number
//when creating a new animal object these values are created with the default 50 value
//Every animal can eat() which decreases their hunger by one
//Every animal can drink() which decreases their thirst by one
//Every animal can play() which increases both by one

class Animal {
  name: string;
  age: number;
  hunger: number;
  thirst: number;

  constructor(name: string, age: number, hunger?: number, thirst?: number) {
    this.name = name;
    this.age = age;
    this.hunger = 50;
    this.thirst = 50;
  }

  eat() {
    //this.hunger --;
    if (this.hunger >= 100) {
      this.hunger = this.hunger - 10;
      console.log(`${this.name} quit playing.`)
    }
  }

  drink() {
     //this.thirst --;
    if (this.thirst >= 100) {
      this.thirst = this.thirst -10;
      console.log(`${this.name} quit playing.`)
    }
  }

  play() {
    (this.thirst ++) && (this.hunger ++);
    if ((this.thirst >= 100) || (this.hunger >= 100)) {
      console.log(`Poor ${this.name} played sooo much that his hunger is ${this.hunger} and he is almost dead.`)
    } 
  }
}

let cat = new Animal('Sanyi', 10);
console.log(cat.hunger);
console.log(cat.name)
while (cat.hunger !== 100) {
  cat.play();
}
cat.drink();
cat.eat();
console.log(cat.hunger);

