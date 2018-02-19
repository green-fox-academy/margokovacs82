'use strict';
function fName(a: string, b?: string): string {
return a + b;

}
let variable: string = fName("sziasztok", 'ACE');
console.log(variable);