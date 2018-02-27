// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.
'use strict';

let fs = require('fs');
try {
	function fileName (name: string): any {
	  let fileN = fs.readFileSync(name, 'utf-8');
  	let myArray: string [] = fileN.split ('\n')
	  console.log(myArray.length);
	}
  fileName('./print-each-line.ts');
}
catch(error) {
  console.log('0');
}
