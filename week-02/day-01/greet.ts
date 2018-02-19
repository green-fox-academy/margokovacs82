// -  Create variable named `name` and assign the value `Greenfox` to it
// -  Create a function called `greet` that greets it's input parameter
//     -  Greeting is printing e.g. `Greetings, dear Greenfox`
//     -  Prepare for the special case when no parameters are given
// -  Greet `name`

'use strict';

let newName: string = "Greenfox";

function great(greetings? : string){
    if (greetings != undefined){
        console.log('Gratings, dear ' + newName);
   
    }else {
        console.log('Gratings, dear ' + 'name');
    }
    
}
great(newName);
  

