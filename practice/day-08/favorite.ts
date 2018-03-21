/*The program's aim is to collect your favourite animals and store them in a text file.
# There is a given text file called '''favourites.txt''', it will contain the animals
# If ran from the command line without arguments
# It should print out the usage:
# ```fav_animals [animal] [animal]```
# You can add as many command line arguments as many favourite you have.
# One animal should be stored only at once
# Each animal should be written in separate lines
# The program should only save animals, no need to print them*/
'use strict';

'use strict';
const fs = require('fs');
let fileContent = fs.readFileSync('./favorite.txt', 'utf-8');

function start(flag) {
  let index = process.argv.indexOf(flag);
  return (index === -1) ? null : process.argv[index];
}
  console.log(`fav_animals [animal] [animal]`);

  for (let j = 0; j < process.argv.length; j++) {  
    console.log(j + ' -> ' + (process.argv[j]));
  }
  
if (process.argv[j] >= 2) {
  let fileContent = '';
  fileContent += '\r\n' + process.argv[j]; 
  fs.writeFileSync('favorite.txt', fileContent);
}
  
console.log(fileContent);

