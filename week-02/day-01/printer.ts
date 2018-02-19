// -  Create a function called `printer`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

'use strict'

function printer(ItemsArray: any[]): string { 
    return ItemsArray.join(" ");
}
let myArray = printer(["hello", "hi", 1, "dog"]);
console.log(myArray);

