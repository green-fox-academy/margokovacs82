'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw four different size and color rectangles.
// Avoid code duplication.

let sqSize = 20;
let sqPos = 0;

for (let i:number = 1; i <= 4; i++){
    sqPos += sqSize + 10;
    sqSize += 20;
    ctx.fillRect(sqPos, sqPos, sqSize, sqSize);
    ctx.fillStyle = '#'+(Math.random()*0xFFFFFF<<0).toString(16);

}
           