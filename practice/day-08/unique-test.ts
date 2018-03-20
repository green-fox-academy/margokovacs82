'use strict';

import { test } from 'tape';
import { uniqueCharacters } from './unique-characters';

test('unique', t => {
  const actual = uniqueCharacters('anagram');
  const expected = [ 'a', 'n', 'g', 'r', 'm' ];

  t.deepEqual(actual, expected);
  t.end();
});

test('notunique', t => {
  t.plan(3);
  t.deepEqual(uniqueCharacters('anna'),{ a: 2, n: 2 });
  t.deepEqual(uniqueCharacters('rullo'), [ 'r', 'u', 'l', 'o']);
  t.deepEqual(uniqueCharacters('horses'), 'horses');   
});