'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let linesOfTriangles: number = 30;
let heightOfTriangles: number = 20;

let x: number = 0;
let y: number = 600;

function triangles(x: number, y: number){
    for (let i:number = 0; i<= linesOfTriangles; i++){
       
        y -= 20; 
        x = i * 10;

        for (let j:number = 0; j <= heightOfTriangles; j++){

        ctx.beginPath();
        ctx.moveTo(x, y); 
        ctx.lineTo(x + 20, y); 
        ctx.lineTo(x + 10, y -20); 
        ctx.lineTo(x, y);  
        ctx.stroke();

        x += 20;
        heightOfTriangles -= 0.24;
    
        
}
}
}
triangles(x, y);
