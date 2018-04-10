const sharpie = {
  inkAmount: 100,

  newSharp: function (color, width) {
    this.color = color;
    this.width = width;
    return sharpie;
  },

  use: function () {
    this.inkAmount -= this.width;
    return this.inkAmount;
  },

  //useAll: function () {
    //while(sharpie.inkAmount > 0) {
      //sharpie.use();
    //}
  //}
}


let first = sharpie.newSharp('blue', 20);

for (let i=0; i < first.inkAmount; i++) {
  first.use();
  console.log(first.inkAmount);
}


let second = sharpie.newSharp('red', 30);
//second.useAll()
console.log(second.inkAmount);

let third = sharpie.newSharp('green', 40);