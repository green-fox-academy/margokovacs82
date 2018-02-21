'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw four different size and color rectangles.
// Avoid code duplication.


let sSize = 10;
let sPlace = 10;

for (let i:number = 1; i <= 4; i++){
  sSize += sSize;
  sPlace +=sPlace;

ctx.fillStyle = 'pink';
ctx.fillRect(sSize, sSize, sPlace, sPlace);}

