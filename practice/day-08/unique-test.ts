'use strict';

import { test } from 'tape';
import { uniqueCharacters } from './unique-characters';

test('unique', t => {
  const actual = uniqueCharacters('anagram');
  const expected = [ 'a', 'n', 'g', 'r', 'm' ];

  t.deepEqual(actual, expected);
  t.end();
});
