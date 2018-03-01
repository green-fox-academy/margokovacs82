'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let f = Math.sqrt(2);

function hor(x, y, len) {
  if(len < 1) return;

  ctx.beginPath();
  ctx.moveTo(x - len/2, y);
  ctx.lineTo(x + len/2, y);
  ctx.stroke();

  setTimeout(function() {
    ver(x - len/2, y, len/f);
    ver(x + len/2, y, len/f);
  }, 500);
}

function ver(x, y, len) {
  if(len < 1) return;

  ctx.beginPath();
  ctx.moveTo(x, y - len/2);
  ctx.lineTo(x, y + len/2);
  ctx.stroke();

  setTimeout(function() {
    hor(x, y - len/2, len/f);
    hor(x, y + len/2, len/f);
  }, 500);
}

hor(300, 90, 150);
ver(300, 20, 60);