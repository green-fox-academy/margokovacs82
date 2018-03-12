// -  Create variable named `name` and assign the value `Greenfox` to it
// -  Create a function called `greet` that greets it's input parameter
//     -  Greeting is printing e.g. `Greetings, dear Greenfox`
//     -  Prepare for the special case when no parameters are given
// -  Greet `name`
'use strict';
let name1: string = 'Greenfox';

function greet(n1?: string) {
  if (n1 === undefined) {
    return 'Greetings, dear name!'
  } else {
    return 'Greetings, dear ' + n1 + '!';
    }
}

console.log(greet(name1));