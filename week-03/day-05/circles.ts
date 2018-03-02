'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let sizeX: number = canvas.width / 2;
let sizeY: number = canvas.height / 2;
let diagonal: number = canvas.width / 2;
let repeat: number = 7;

function drawCircle (x: number, y: number, dia: number, rep: number) { 
  ctx.beginPath();
  ctx.arc(x, y, dia, 0, Math.PI * 2);
  ctx.stroke();
  ctx.strokeStyle = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  
  if (rep >= 1) {
    setTimeout(function(){ 
    drawCircle(x + dia * Math.sqrt(3)/4, y + dia/4, dia/2, rep - 1);
    drawCircle(x, y - dia/2, dia/2, rep - 1);
    drawCircle(x - dia * Math.sqrt(3)/4, y + dia/4, dia/2, rep - 1);
    }, 500)
  }
}

drawCircle(sizeX, sizeY, diagonal, repeat);

