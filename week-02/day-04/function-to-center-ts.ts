'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

let x: number = 0;
let y: number = 0;

function moveLine(x: number, y:number){
    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(300, 200);
    ctx.stroke();
}

for (let i:number = 0; i <= 30; i++){
    for (let j:number = 0; j <= 20; j++){
        x = 20 * i;
        y = 20 * j;
        
        if (i === 0 || i === 30 || j === 0 || j === 20) {
            moveLine(x, y);
        }
} 
}


    