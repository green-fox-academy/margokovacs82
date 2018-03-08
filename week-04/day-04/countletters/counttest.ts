'use strict';

import { test } from 'tape';
import { countLetters } from './countletters'

test('how many n', t => {
  t.plan(3);
  t.deepEqual(countLetters("anna"),{ a: 2, n: 2 });
  t.deepEqual(countLetters("rullo"), { r: 1, u: 1, l: 2, o: 1 });
  t.deepEqual(countLetters("horses"), { h:0, o: 2 });   
});
