'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]

//nem én ítam, de megpróbáltam felfogni:

function connectThem(inPut: number[][]) { //csinálok egy arrayben arrayt
    ctx.beginPath();
 for (let i: number = 0; i < inPut.length; i++) { //itt az inputlength az arrayben lévő arrayek száma
     let j: number = 0;

 ctx.strokeStyle = 'green';
      
         ctx.lineTo(inPut[i][j],inPut[i][j+1]); // pl. a negyedik körben input 4,0 és input 4,1, azaz húz egy vonalat az 
                                                // array 4. arrayének első és második eleme közt.
         ctx.stroke();
     
 }
}
let myArray1: number [][] = [
 [10, 10], 
 [290,  10],
 [290, 290], 
 [10, 290],
[10, 10]];
let myArray2: number [][] = [
 [50, 100], 
 [70, 70], 
 [80, 90], 
 [90, 90], 
 [100, 70], 
 [120, 100], 
 [85, 130], 
 [50, 100]];
 connectThem(myArray1); // itt hívja meg a függvényt 
 connectThem(myArray2); // külön az elsőt és másodikat