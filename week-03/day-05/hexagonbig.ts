'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let repet: number = 5;
let xCoordin: number = 170;
let yCoordin: number = 30;
let hexi: number = 250;

function drawHexa(x: number, y: number, s: number, repetition: number) {
  ctx.beginPath();
  ctx.moveTo(x, y)
  ctx.lineTo(x + s, y)                                  //1
  ctx.lineTo(x + s + s / 2, y + s * Math.sqrt(3) /2)    //2
  ctx.lineTo(x + s, y + s * Math.sqrt(3))               //3
  ctx.lineTo(x , y + s * Math.sqrt(3))                  //4
  ctx.lineTo(x - s / 2, y + s * Math.sqrt(3) /2)        //5
  ctx.lineTo(x, y);                                     //6
  ctx.strokeStyle = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  ctx.stroke();

  if (repetition >= 1) {
    setTimeout(function(){ 
    drawHexa(x, y, s / 3, repetition -1);                                        //bal fent
    drawHexa(x + s / 1.5, y, s / 3, repetition -1);                              // jobb fent 
    drawHexa(x, y + s * Math.sqrt(3) / 1.5, s / 3, repetition -1);               //bal lent
    drawHexa(x + s / 1.5, y + s * Math.sqrt(3) / 1.5, s / 3, repetition -1);     // jobb lent 
    drawHexa(x + s, y + s * Math.sqrt(3) /3, s / 3, repetition -1);              // jobb
    drawHexa(x - s / 3, y + s * Math.sqrt(3) /3, s / 3, repetition -1);          // bal
    }, 700)
  }
}
drawHexa(xCoordin, yCoordin, hexi, repet);
