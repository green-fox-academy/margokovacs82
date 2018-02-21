'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.


//megoldás

function sqToCoords (x: number, y: number){
    ctx.fillRect(x, y, 50, 50);
    ctx.fillStyle = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
}
sqToCoords(10, 30);
sqToCoords(60, 100);
sqToCoords(500, 200);


//agymenés, de saját
let squareSizee = 50;
let x: number = 10;
let y: number = 30;

function sqLocation(x: number, y: number) {
    ctx.fillRect(x, y, squareSizee, squareSizee);
    ctx.fillStyle = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
}
for (let i:number = 1; i <= 3; i++){
    sqLocation(x, y);
    y = y + 60;
} 
