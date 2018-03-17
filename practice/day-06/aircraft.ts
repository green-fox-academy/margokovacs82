'use strict';
export class Carrier {
  planes: Aircraft[];

  constructor() {
    this.planes = [];
  }

  addPlane(pl: Aircraft) {
    this.planes.push(pl);
  }
}

export class Aircraft extends Carrier {
  ammo: number;
  type: string;
  maxammo: number;
  basedamage: number;
  alldamage: number;

  constructor(ammo: number) {
    super()
    this.ammo = 0;
    this.alldamage = 0;
  }

  getType(){
    return this.type;
  }
  getStatus() {
    console.log(`Type: ${this.type}, Ammo: ${this.ammo}, Base Damage: ${this.basedamage}, All Damage: ${this.alldamage}`) 
  }

  fight(){
    this.alldamage += this.basedamage * this.ammo;
    this.ammo -= this.ammo;
    return this.alldamage;
  }

  refill(amount: number) {
    for (let i:number = 0; i < amount; i++) {
      if (this.ammo < this.maxammo) {
        this.ammo += amount / amount;
      } 
    } console.log(`${amount - this.ammo} ammo remains.`)  
  } 

  isPriority() {

  }
}  

export class F16 extends Aircraft {
  basedamage: number;
  type: string;
  maxammo: number;
  
  constructor(ammo?: number, basedamage?: number) {
    super(ammo);
    this.basedamage = 30;
    this.type = 'F16';
    this.maxammo = 8;
  }
  isPriority(): boolean {
    return false;
  }
}

export class F35 extends Aircraft {
  basedamage: number;
  type: string;
  maxammo: number;

  constructor(ammo?: number, basedamage?: number) {
    super(ammo);
    this.basedamage = 50;
    this.type = 'F35';
    this.maxammo = 12;
  }
  isPriority(): boolean {
    return true;
  }
}

let sanyi = new F16();
let lali = new F35();
console.log(lali.getStatus());
lali.refill(40);
console.log(lali.getStatus());
lali.fight();
console.log(lali.getStatus());
sanyi.refill(30);
console.log(sanyi.getStatus());
sanyi.fight();
console.log(sanyi.getStatus());
console.log(sanyi.isPriority());