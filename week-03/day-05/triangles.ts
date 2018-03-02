'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let xWidth: number = 600;
let yHeight: number = 500;
let xCoord: number = 0;
let yCoord: number = 0;
let repetition: number = 7;

function drawTriangle(x: number, y: number, width: number, height: number, rep: number) {
  let widthHalf: number = width / 2;
  let heithHalf: number = height / 2;
  let repetition: number = 5;

  ctx.beginPath();
  ctx.moveTo(x + 0 , y + 0); 
  ctx.lineTo(x + widthHalf * 2, y + 0);
  ctx.lineTo(x + widthHalf, y + heithHalf * 2);
  ctx.lineTo(x + 0, y + 0);
  ctx.lineTo(x + widthHalf, y + 0);
  ctx.lineTo(x + widthHalf * 2 - widthHalf/2, y + heithHalf);
  ctx.lineTo(x + widthHalf/2, y + heithHalf);
  ctx.lineTo(x + widthHalf, y + 0);
  ctx.stroke();
  ctx.strokeStyle = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
     
  if (rep >= 1) {
    setTimeout(function(){ 
    drawTriangle(x + 0, y + 0, widthHalf, heithHalf, rep -1);
    drawTriangle(x + widthHalf, y + 0, widthHalf, heithHalf, rep -1);
    drawTriangle(x + widthHalf/2, y + heithHalf, widthHalf, heithHalf, rep -1);
    }, 1000)
  }
} 

drawTriangle(xCoord, yCoord, xWidth, yHeight, repetition);
    
    