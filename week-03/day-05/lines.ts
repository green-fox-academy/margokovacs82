'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let xCord: number = 0;
let yCord: number = 0;
let line1: number = canvas.width;
let line2: number = canvas.height;
let repeat: number = 4;

function drawLines(x: number, y: number, lineW: number, lineS: number, rep: number) {
  let lineA: number = lineW;
  let lineB: number = lineS;
  let repetition: number = repeat;
  
  //1
  ctx.beginPath();
  ctx.moveTo(x + lineA/3, y);  
  ctx.lineTo(x + lineA/3, y + lineS); 
  ctx.strokeStyle = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  ctx.stroke();

  //2
  ctx.beginPath();
  ctx.moveTo(x + lineA/1.5, y);  
  ctx.lineTo(x + lineA/1.5, y + lineS); 
  ctx.strokeStyle = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  ctx.stroke();

  //3
  ctx.beginPath();
  ctx.moveTo(x, y + (lineS / 3));  
  ctx.lineTo(x + lineA, y + (lineS / 3)); 
  ctx.strokeStyle = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  ctx.stroke();
  
  //4
  ctx.beginPath();
  ctx.moveTo(x, y + (lineS / 1.5));  
  ctx.lineTo(x + lineA, y + (lineS / 1.5)); 
  ctx.strokeStyle = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  ctx.stroke();
  
  if (rep >= 1) {
    setTimeout(function(){ 
    drawLines(x + lineA/3, y, lineA/3, lineS/3, rep -1); //felső
    drawLines(x + lineA/3, y + lineS/1.5, lineA/3, lineS/3, rep -1); //alsó
    drawLines(x + lineA/1.5, y + lineS/3, lineA/3, lineS/3, rep -1); // jobb
    drawLines(x, y + lineS/3, lineA/3, lineS/3, rep -1); // bal
    }, 700)
  } 
}
drawLines(xCord, yCord, line1, line2, repeat);