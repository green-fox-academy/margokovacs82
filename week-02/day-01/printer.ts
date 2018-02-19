// -  Create a function called `printer`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

'use strict'

function printer(firstArgument: string, ...restOfArgument: string[]){
    let separate: string = " ";
    console.log(firstArgument, restOfArgument.join(separate));
    };
printer("hello", "hi", "dead", "dog");