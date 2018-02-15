'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let len: number = 10;
let width: number = 10;
let height: number = 10;

let SurfaceArea1: number = (len * width);
let SurfaceArea2: number = (len * height);
let SurfaceArea3: number = (height * width);

let SurfaceArea: number = ((SurfaceArea1 * 2) + (SurfaceArea2 * 2) + (SurfaceArea3 * 2));

console.log(SurfaceArea); 

let Volume: number = (len * width * height);


console.log(Volume);
