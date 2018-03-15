'use strict';
// first try
import { test } from 'tape';
import { addNum } from './testmaterial';

test('add 2 numbers', t => {
  const actual = addNum(1, 2);
  const expected = 3;

  t.equal(actual, expected);
  t.end();
});

//sum-test

import { Sum } from './testmaterial';
test('summa1', t => {
  let sumTest1 = new Sum([]);
  let actual = sumTest1.sum();
  let expected = 0;

  t.equal(actual, expected);
  t.end();
});

test('summa2', t => {
  let sumTest2 = new Sum([1,2,3,4]);
  let actual = sumTest2.sum();
  let expected = 10;

  t.equal(actual, expected);
  t.end();
});

