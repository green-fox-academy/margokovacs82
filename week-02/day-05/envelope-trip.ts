'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let xCoord: number = 0;
let yCoord: number = 300;
let zCoord: number = 300;
let x: number = 300;
let y: number = 300;

function moveLine2(xCoord, yCoord, x, y){
    for (let i:number = 0; i <= 30; i++){
        xCoord += 10;
        yCoord -= 10;
        zCoord += 10;
    
        ctx.strokeStyle = "#4c76ba";
        ctx.beginPath();
        ctx.moveTo(x, xCoord);
        ctx.lineTo(yCoord, y);
        ctx.moveTo(x, xCoord);
        ctx.lineTo(zCoord, y);
        ctx.stroke();
    }
}
moveLine2(xCoord, yCoord, x, y);

let aCoord: number = 600;
let bCoord: number = 300;
let cCoord: number = 300;
let xLine: number = 300;
let yLine: number = 300;

function moveLine3(aCoord, bCoord, xLine, yLine){
    for (let i:number = 0; i <= 30; i++){
        aCoord -= 10;
        bCoord -= 10;
        cCoord += 10;
        
        ctx.strokeStyle = "#d39e76";
        ctx.beginPath();
        ctx.moveTo(xLine, aCoord);
        ctx.lineTo(bCoord, yLine);
        ctx.moveTo(xLine, aCoord);
        ctx.lineTo(cCoord, yLine);
        ctx.stroke();
    }
}
moveLine3(aCoord, bCoord, xLine, yLine);

let xx: number = 300;
let yy: number = 300;
let zz: number = 300;
let xCoor: number = 600;
let yCoor: number = 300;

function moveLine4(xCoor, yCoor, x, y){
    for (let i:number = 0; i <= 29; i++){
        xx += 10;
        yy -= 10;
        zz += 10;
    
        ctx.strokeStyle = "#e08bca";
        ctx.beginPath();
        ctx.moveTo(xx, yCoor);
        ctx.lineTo(xCoor, yy);
        ctx.moveTo(xx, yCoor);
        ctx.lineTo(xCoor, zz);
        ctx.stroke(); 
    }
}
moveLine4(xCoor, yCoor, x, y);

let xxx: number = 300;
let yyy: number = 300;
let zzz: number = 300;
let xCor: number = 0;
let yCor: number = 300;

function moveLine5(xCor, yCor, xxx, yyy){
    for (let i:number = 0; i <= 29; i++){
        xxx -= 10;
        yyy -= 10;
        zzz += 10;
    
        ctx.strokeStyle = "#dcf7bb";
        ctx.beginPath();
        ctx.moveTo(xxx, yCor);
        ctx.lineTo(xCor, yyy);
        ctx.moveTo(xxx, yCor);
        ctx.lineTo(xCor, zzz);
        ctx.stroke(); 
    }
}
moveLine5(xCor, yCor, xxx, yyy);

let s: number = 0;
let d: number = 0;
let g: number = 300;
let h: number = 300;
let k: number = 300;
let l: number = 300;

function moveLine6(s, d, g, h, k, l){
    for (let i:number = 0; i <= 29; i++){
        s += 10;
        d += 10;
        g -= 10;
        h += 10;
        k -= 10;
        l += 10;
    
        ctx.strokeStyle = "#f27b7b";
        ctx.beginPath();
        ctx.moveTo(s, d);
        ctx.lineTo(g, h);
        ctx.moveTo(s, d);
        ctx.lineTo(l, k);
        ctx.stroke();
    }
}
moveLine6(s, d, g, h, k, l);

let ss: number = 600;
let dd: number = 600;
let gg: number = 300;
let hh: number = 300;
let kk: number = 300;
let ll: number = 300;

function moveLine7(ss, dd, gg, hh, kk, ll){
    for (let i:number = 0; i <= 29; i++){
        ss -= 10;
        dd -= 10;
        gg += 10;
        hh -= 10;
        kk -= 10;
        ll += 10;
    
        ctx.strokeStyle = "#f9eb6d";
        ctx.beginPath();
        ctx.moveTo(ss, dd);
        ctx.lineTo(gg, hh);
        ctx.moveTo(ss, dd);
        ctx.lineTo(kk, ll);
        ctx.stroke();   
    }
}
moveLine7(ss, dd, gg, hh, kk, ll);
