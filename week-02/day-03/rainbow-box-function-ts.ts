'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.

//function rainbow (size: number , color: string){
  //  for(let i: number = 0; i < 7; i++){
    //  ctx.fillStyle = color;
      //ctx.fillRect(0,0, size, size);
    //}
  //}
  //squareToCoords(350, 'purple')
  //squareToCoords(300, 'violet')
  //squareToCoords(250, 'blue')
  //squareToCoords(200, 'green')
  //squareToCoords(150, 'yellow')
  //squareToCoords(100, 'orange')
  //squareToCoords(50, 'red')

//még agyalok - nincs kész:

let manyColors: number = 360;
let squarSize: number = 360;

//function myRectang(squareS: number, manyColors: number) {
//}
for (let i:number = manyColors; i > 0; i--){
   // myRectang(squarSize, manyColors);
    squarSize = squarSize- i;   
    manyColors = manyColors -i;
    ctx.fillRect(300 -(squarSize/2), 200- (squarSize/2), squarSize, squarSize);
    ctx.fillStyle = `hsl(${manyColors}, 100%, 50%)`;

}

