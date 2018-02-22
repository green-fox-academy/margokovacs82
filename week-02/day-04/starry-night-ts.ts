'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw the night sky:
//  - The background should be black
ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);
  let positx: number[] = []
  let posity: number[] = []
function stars (positx: number[], posity: number[]) {
    let amountOfStars: number = 55;
for (let i = 0; i < amountOfStars; i++) {

    positx[i] = (Math.random() * canvas.width), (Math.random() * canvas.height);
    posity[i] = (Math.random() * canvas.width), (Math.random() * canvas.height);
        
    
    ctx.fillRect(positx[i], posity[i], 10, 10);
    ctx.fillStyle = 'rgba(255, 255, 255, 1/(i)';
    //ctx.fillStyle = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    //ctx.fillStyle = "rgb("+ Math.floor(Math.random() * 255) + ","+ Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";  
//console.log(positx, posity);
}
} 
stars(positx, posity);  



