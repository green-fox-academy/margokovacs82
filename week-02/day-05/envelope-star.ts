'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let xCoord: number = 0;
let yCoord: number = 200;
let zCoord: number = 200;
let x: number = 200;
let y: number = 200;

function moveLine2(xCoord, yCoord, x, y){

    for (let i:number = 0; i <= 19; i++){
    xCoord += 10;
    yCoord -= 10;
    zCoord += 10;
    
    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.moveTo(x, xCoord);
    ctx.lineTo(yCoord, y);
    ctx.moveTo(x, xCoord);
    ctx.lineTo(zCoord, y);
    ctx.stroke();
    }
}
moveLine2(xCoord, yCoord, x, y);




let aCoord: number = 400;
let bCoord: number = 200;
let cCoord: number = 200;
let xLine: number = 200;
let yLine: number = 200;

function moveLine3(aCoord, bCoord, xLine, yLine){

    for (let i:number = 0; i <= 19; i++){
    aCoord -= 10;
    bCoord -= 10;
    cCoord += 10;
    
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.moveTo(xLine, aCoord);
    ctx.lineTo(bCoord, yLine);
    ctx.moveTo(xLine, aCoord);
    ctx.lineTo(cCoord, yLine);
    ctx.stroke();
    }
}
moveLine3(aCoord, bCoord, xLine, yLine);

