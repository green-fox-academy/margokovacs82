'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let x: number = 0;
let y: number = 0;
let v: number = canvas.width;
let z: number = 0;

function moveLine2(x, y, z, v){

    for (let i:number = 0; i <= 20; i++){
    x += 20;
    y += 20;
    
    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.moveTo(x, z);
    ctx.lineTo(v, y);
    ctx.stroke();
    }
}
moveLine2(x, y, z, v);


let xx: number = 0;
let yy: number = 0;
let fWidth: number = 0;
let gHeight: number = canvas.height;

function moveLine3(xx, yy, gHeight, fWidth){

    for (let i:number = 0; i <= 20; i++){
    xx += 20;
    yy += 20;
    
    ctx.strokeStyle = "purple";
    ctx.beginPath();
    ctx.moveTo(0, xx);
    ctx.lineTo(yy, 400);
    ctx.stroke();
    }
}
moveLine3(xx, yy, fWidth, gHeight);