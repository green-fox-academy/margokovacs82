'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.
// puska az igazi szivárványhoz: ctx.fillStyle = `hsl(${manyColors}, 100%, 50%)`;

function rainbow(size: number, color: string){
  for (let i: number = 1; i <=8; i++){
    ctx.fillStyle = color;
    ctx.fillRect(300 -(size/2), 200- (size/2), size, size);
  }
}
rainbow(310, "pink");
rainbow(280, "purple");
rainbow(250, "violet");
rainbow(220, "blue");
rainbow(190, "green");
rainbow(160, "yellow");
rainbow(130, "orange");
rainbow(100, "red");



