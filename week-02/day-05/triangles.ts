'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let linesAndHeightsOfTriangles: number = 30;

let x: number = 0;
let y: number = 600;

function triangles(x: number, y: number){
    for (let i:number = 1; i<= linesAndHeightsOfTriangles; i++){
        y -= 20; 
        x = i * 10;
      
        for (let j:number = 1; j <= linesAndHeightsOfTriangles - i; j++){
        ctx.beginPath();
        ctx.moveTo(x, y); 
        ctx.lineTo(x + 20, y); 
        ctx.lineTo(x + 10, y -20); 
        ctx.lineTo(x, y);  
        ctx.stroke();
        let grdmg = ctx.createRadialGradient(390, 140, 100, 370, 140, 0);
        grdmg.addColorStop(0, 'hsla(300, 40%, 70%, 0.7)');
        grdmg.addColorStop(1, 'hsla(60, 50%, 50%, 0.5)');
        ctx.strokeStyle = grdmg;

        x += 20;         
    }
    }
}
triangles(x, y);
