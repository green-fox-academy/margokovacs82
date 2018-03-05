// Create a class that represents a cuboid:
// It should take its three dimensions as constructor parameters (numbers)
// It should have a method called `getSurface` that returns the cuboid's surface
// It should have a method called `getVolume` that returns the cuboid's volume
'use strict';

class Cuboid {
  private len: number;
  private width: number;
  private height: number;

  constructor(number?: number) {
    this.len = number || 10;
    this.width = number || 10;
    this.height = number || 10;
  }

  getSsurface(numb?: number) {
    let SurfaceArea1: number = (this.len * this.width);
    let SurfaceArea2: number = (this.len * this.height);
    let SurfaceArea3: number = (this.height * this.width);
    let SurfaceArea: number = ((SurfaceArea1 * 2) + (SurfaceArea2 * 2) + (SurfaceArea3 * 2));
    return SurfaceArea
  }

  getVolume() {
    let Volume: number = (this.len * this.width * this.height);
    return Volume;
  }
}

let cube = new Cuboid();
console.log(cube.getSsurface());
console.log(cube.getVolume());
