// Write a function that copies a file to an other
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful
'use strict';

const fs = require('fs');
let name1: string = './my-file.txt';
let name2: string = './my-text.txt';

function copyFile (x: string, y:string) {
	let z:string = fs.readFileSync(x, 'utf-8');
	try {
		z = fs.writeFileSync(y, z, 'utf-8');
	} catch(error) {
		console.log('Unable to read file: my-file.txt');
	}
}
copyFile(name1, name2);