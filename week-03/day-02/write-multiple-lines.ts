// Create a function that takes 3 parameters: a path, a word and a number,
// than it should write to a file.
// The path parameter should be a string, that describes the location of the file.
// The word parameter should be a string, that will be written to the file as lines
// The number paramter should describe how many lines the file should have.
// So if the word is 'apple' and the number is 5, than it should write 5 lines
// to the file and each line should be 'apple'
// The function should not raise any error if it could not write the file.

'use strict';

const fs = require('fs');
let path: string = './my-file.txt';
let word: string = 'apple';
let num: number = 13;

function fileContent(p: string, w: string, n: number): any {
	let writeIn: string = '';
	for (let i:number = 0; i <= n; i++) {
		//writeIn += `${w}\r\n`;  
		writeIn += w + ('\r\n');
	}
	try {
		fs.writeFileSync(p, writeIn, 'utf-8');
	} catch (err) {
		console.log(err);
	}
}
fileContent(path, word, num);


