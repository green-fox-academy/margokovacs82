'use strict';
const fs = require('fs');

let fileConten = fs.readFileSync('./reverse.txt', 'utf-8').split('');
console.log(fileConten.reverse().join(''));

