'use strict';

import { test } from 'tape';
import { Bull } from './bulls';

test('bull and cow', t => {
  let bullTest1 = new Bull();
  let actual = bullTest1.getHint(2345, 2345);
  let expected = '0 BULL 0 COW ';

  t.equal(actual, expected);
  t.end();
});

test('more cow', t => {
  let bullTest1 = new Bull();
  let actual = bullTest1.getHint(2345, 2367);
  let expected = '0 BULL 0 COW ';

  t.equal(actual, expected);
  t.end();
});