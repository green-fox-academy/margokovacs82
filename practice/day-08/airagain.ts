'use strict';

export class Aircraft {
  planes: Aircraft[];
  ammoStorage: number;
  maxDamage: number;
  ammo: number;
  maxAmmo: number;

  constructor() {
    this.planes = [];
    this.ammoStorage = 1000;
    this.maxDamage = 0;
    this.ammo = 0;
  }

  addPlanes(pl: Aircraft) {
    this.planes.push(pl);
  }

  fight() {
    
  }

  fill(num: number) {
    for (let i: number = 0; i < num; i++) {
      if (this.ammo < num) {
      this.ammo += 1;
      num--;
      } else {
        return num - this.maxAmmo;
      }
    }
  }

  getType() {}
  getStatus() {}
  isPriority() {}

}

export class Plane extends Aircraft {
  maxAmmo: number;
  baseDamage: number;
  

  constructor(maxAmmo, baseDamage) {
    super();
    this.maxAmmo = maxAmmo;
    this.baseDamage = baseDamage;
  } 
}

export class F16 extends Plane {
  ammo: number;
  constructor(maxAmmo = 8, baseDamage = 30) {
    super(maxAmmo, baseDamage)
    this.ammo = 0;
  } 

  
}

export class F35 extends Plane {
  ammo: number;
  constructor(maxAmmo = 12, baseDamage = 50) {
    super(maxAmmo, baseDamage)
    this.ammo = 0;
  } 
}
let sanyi = new F16();
let lali = new F35();
let hulu = new Aircraft();
hulu.addPlanes(sanyi);
hulu.addPlanes(lali);
hulu.fill(40);
console.log(hulu);