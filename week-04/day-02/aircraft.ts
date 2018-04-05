'use strict';

export abstract class Aircraft {
  ammo: number;
  damage: number;

  constructor(ammo: number, damage: number) {
    this.ammo = ammo;
    this.damage = damage;
  }

ammoStatus(x: number): number {

  this.damage += ammo;
}
getDamage(): number {}

fight(): number {
  this.ammo = 0;
  return this.damage;
}
getStatus() {}

abstract refill() {}
abstract getType() {}
abstract isPriority() {}
}

class F16 extends Aircraft {
  ammo = 0;
  damage = 30;

refill(x: number) {
  this.ammo ++
}
getType () {}
isPriority() {}
}


class F35 extends Aircraft {
  ammo = 0;
  damage = 50;
}
refill(x: number) {
  this.ammo ++

}
