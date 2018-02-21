'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Fill the canvas with a checkerboard pattern.
//ctx.fillStyle = 'purple';
let tileSize = 40;

function dark(x: number, y: number, size: number) {
    ctx.fillStyle = "black";
    ctx.fillRect(x, y, tileSize, tileSize);
          }

for (let i:number = 1; i <= 400/tileSize; i++){

    for (let j:number = 1; j<= 400/tileSize; j++){
    if (i%2 === 0 && j%2 === 1){
        dark(i * tileSize, j * tileSize, tileSize);
      } 
      else if (i%2 === 1 && j%2 === 0){
        dark(i * tileSize, j * tileSize, tileSize);
      } 
}
}