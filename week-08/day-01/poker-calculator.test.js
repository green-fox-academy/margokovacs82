const test = require('tape');
const poker = require('./poker');

test('white hand wins', t => {
  expected = 'White wins! - (High card: A)';
  blackHand =['2H', '3D', '5S', '9C', 'KD'];
  whiteHand =['2C', '3H', '4S', '8C', 'AH'];
  t.equal(poker(blackHand, whiteHand), expected);
  t.end();
});

test('black wins', t => {
  blackHand = ['2H', '3D', '5S', '9C', 'AH'];
  whiteHand = ['2C', '3H', '4S', '8C', 'KD'];
  expected = 'Black wins! - (High card: A)';
  t.equal(poker(blackHand, whiteHand), expected);
  t.end();
});

test('black wins', t => {
  blackHand = ['2H', '3D', '5S', 'AC', 'AH'];
  whiteHand = ['2C', '3H', '4S', '8C', 'KD'];
  expected = 'Black wins! - (Pair: A)';
  t.equal(poker(blackHand, whiteHand), expected);
  t.end();
});

test('black wins', t => {
  blackHand = ['2H', '3D', '5S', '6C', 'TH'];
  whiteHand = ['2C', '3H', '4S', '8C', '9D'];
  expected = 'Black wins! - (High card: T)';
  t.equal(poker(blackHand, whiteHand), expected);
  t.end();
});

test('black wins', t => {
  blackHand = ['2H', '5D', '5S', 'KC', 'AH'];
  whiteHand = ['2C', '3H', '4S', '8C', 'KD'];
  expected =  'Black wins! - (Pair: 5)';
  t.equal(poker(blackHand, whiteHand), expected);
  t.end();
});

test('black wins', t => {
  blackHand = ['2H', '3D', '5S', '9C', 'KD'];
  whiteHand = ['2C', '3H', '4S', '8C', '8S'];
  expected =  'White wins! - (Pair: 8)';
  t.equal(poker(blackHand, whiteHand), expected);
  t.end();
});
