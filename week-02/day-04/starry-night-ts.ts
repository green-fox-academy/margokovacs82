'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

// Draw the night sky:
//  - The background should be black

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);

let positxx: number[] = [];
let posityy: number[] = [];
let amountOfStars: number = 55;

function stars (positx: number, posity: number) {
    ctx.fillRect(positx, posity, 10, 10);
    //ctx.fillStyle = 'rgba(255, 255, 255, 1/(i)';
    ctx.fillStyle = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    //ctx.fillStyle = "rgb("+ Math.floor(Math.random() * 255) + ","+ Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";  
    //console.log(positx, posity);
} 

for (let i = 0; i < amountOfStars; i++) {
    positxx[i] = (Math.random() * canvas.width), (Math.random() * canvas.height);
    posityy[i] = (Math.random() * canvas.width), (Math.random() * canvas.height);
    stars(positxx[i], posityy[i]);  
}


