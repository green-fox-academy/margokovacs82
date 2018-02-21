'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw four different size and color rectangles.
// Avoid code duplication.


let sSize = 5;
let sPlace = 5;

for (let i:number = 1; i <= 6; i++){
  sSize = sSize + 5;
  sPlace = ((sSize + sPlace) -5);

ctx.fillStyle = 'purple';
ctx.fillRect(sPlace, sPlace, sSize, sSize);
ctx.strokeRect(sPlace, sPlace, sSize, sSize);}

