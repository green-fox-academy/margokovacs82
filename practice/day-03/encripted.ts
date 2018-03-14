const fs = require('fs');

function magic (source: string) {
  let encoder: string [] = fs.readFileSync('./ascii.txt', 'utf-8').split('\r\n');
  return fs.readFileSync(source, 'utf-8')
  .toString()
  .split('\r\n')
  .map(e => e.split(' ')
    .map(e => e.split('')
      .map(e => encoder[encoder.indexOf(e) - 1]) 
      .join(''))
    .join(' '))
  .join('\r\n');
}

console.log(magic('./encripted.txt'));