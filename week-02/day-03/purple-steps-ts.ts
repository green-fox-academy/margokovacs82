'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/greenfox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]

let purpleSize = 10;
let purplePlace = 10;

for (let i:number = 1; i <= 19; i++){
    ctx.fillStyle = 'purple';
    ctx.fillRect(purplePlace, purplePlace, purpleSize, purpleSize);
    ctx.strokeRect(purplePlace, purplePlace, purpleSize, purpleSize);

    purplePlace = purplePlace + 10;
}

