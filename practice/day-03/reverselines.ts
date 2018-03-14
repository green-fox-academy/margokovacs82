'use strict';
const fs = require('fs');

let fileContent = fs.readFileSync('./reverselines.txt', 'utf-8').split('\r\n');

console.log(fileContent.reverse().join('\r\n'));