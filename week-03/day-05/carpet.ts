'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let sWidth: number = canvas.width / 3;
let sHeight: number = canvas.height / 3;
let rept: number = 4;

function drawCarpet(x: number, y: number, width: number, height: number, rep: number) {
  let widthQ: number = width;
  let heightQ: number = height;
  
  ctx.fillStyle = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  ctx.fillRect(x + width, y + height, width, height);
    
  if (rep >= 1) {
    setTimeout(function(){ 
    drawCarpet(x - width/100, y - height/100, width/3, height/3, rep -1); //bal felső
    drawCarpet(x - width/100, y + height, width/3, height/3, rep -1); // bal közép
    drawCarpet(x - width/100, y + height * 2, width/3, height/3, rep -1); //bal alsó

    drawCarpet(x + width, y - height/100, width/3, height/3, rep -1); //fent közép
    drawCarpet(x + width, y + height * 2, width/3, height/3, rep -1); //közép alsó

    drawCarpet(x + width * 2, y - height/100, width/3, height/3, rep -1); // jobb felső
    drawCarpet(x + width * 2, y + height, width/3, height/3, rep -1); //jobb közép
    drawCarpet(x + width * 2, y + height * 2, width/3, height/3, rep -1); // jobb alsó
    
    }, 700)
  }  
}

drawCarpet(0, 0, sWidth, sHeight, rept);