'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let xCord: number = 0;
let yCord: number = 0;
let sqWidth: number = canvas.width;
let sqHeight: number = canvas.height;
let repeat: number = 4;
let lineWidth: number = 20;

function drawSquare(x: number, y: number, width: number, height: number, lineW: number, rep: number) {
  let widthQ: number = width / 4;
  let heightQ: number = height / 4;
  let repetition: number = 7;
  

  ctx.beginPath();
  ctx.moveTo(x + widthQ, y + heightQ);  //0
  ctx.lineTo(x + widthQ * 3, y + heightQ); //1
  ctx.lineTo(x + widthQ * 3, y + heightQ * 3); //2
  ctx.lineTo(x + widthQ, y + heightQ * 3); //3
  ctx.lineTo(x + widthQ, y + heightQ); //4
  ctx.lineWidth = lineW;
  ctx.strokeStyle = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  ctx.stroke();
  
  if (rep >= 1) {
    setTimeout(function(){ 
    drawSquare(x, y, widthQ + widthQ, heightQ + heightQ, lineW/2, rep -1);
    drawSquare(x + widthQ * 2, y + heightQ * 2, widthQ + widthQ, heightQ + heightQ, lineW/2, rep -1);
    drawSquare(x, y + heightQ * 2, widthQ + widthQ, heightQ + heightQ, lineW/2, rep -1);
    drawSquare(x + widthQ * 2, y, widthQ + widthQ, heightQ + heightQ, lineW/2, rep -1);
    }, 700)
  } 
}

drawSquare(xCord, yCord, sqWidth, sqHeight, lineWidth, repeat);