'use strict';

import { test } from 'tape';
import { fibonacci } from './fibonacci'

test('fibonaccis in action', t => {
  
  t.equal(fibonacci(2), 1);
  t.equal(fibonacci(7), 13);
  t.equal(fibonacci("mary"), 10); 
  t.equal(fibonacci(7), 8);
  t.end();  
});