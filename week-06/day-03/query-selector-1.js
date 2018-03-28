
/* You can work in the html or in a separate js file. Like:
<script>
  1. store the element that says 'The King' in the 'king' variable.
  console.log it.
  2. store 'The Businessman' and 'The Lamplighter'
  in the 'businessLamp' variable.
  console.log each of them.
  3. store 'The King' and 'The Conceited Man'
  in the 'conceitedKing' variable.
  alert them one by one.
  4. store 'The King', 'The Conceited Man' and 'The Lamplighter'
  in the 'noBusiness' variable.
  console.log each of them.
</script>
OR
<script src="queryselector-1.js"></script> -->
*/

'use strict';
let king = document.getElementById('b325');
console.log('king', king);

let lamplighter = document.querySelector('b329');
console.log(lamplighter);
let businessman = document.querySelector('p.big');
console.log(businessman);
let businessLamp = document.querySelectorAll('.big');
console.log('businessman', 'lamplighter', businessLamp);

let conceited = document.querySelector('.b326');
let conceitedKing = document.querySelector('section');
console.log('king', 'coinceited', conceitedKing);

let noBusiness = document.querySelectorAll('div');
console.log('king', 'conceited', 'lamplighter', noBusiness);

/* let asteroids = document.querySelectorAll('div.asteroid');

for (let i = 0; i < asteroids.length; i++) {
  console.log(asteroids[i]);
}
*/
