// -  Create a function called `printer`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

'use strict'

function printer(firstArgument: any, ...restOfArgument: any[]){
    let separate: string = " ";
    console.log(firstArgument, restOfArgument.join(separate));
    };
printer("hello", "hi", 1, "dog");