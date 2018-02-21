'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw a green 10x10 square to the center of the canvas.

let a: number = 300;
let b: number = 200;

ctx.fillStyle = 'red';
let squareSize = 10;

ctx.fillRect(300 -(squareSize/2), 200- (squareSize/2), squareSize, squareSize);

