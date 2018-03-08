// Create a sum method in your class which has a list of integers as parameter
// It should return the sum of the elements in the list
// Follow these steps:
// Add a new test case
// Instantiate your class
// create a list of integers
// use the t.equal to test the result of the created sum method
// Run it
// Create different tests where you
// test your method with an empyt list
// with a list with one element in it
// with multiple elements in it
// with a null
// with a string
// Run them
// Fix your code if needed

'use strict';
import { test } from 'tape';
import { Summa } from './sum'

test('add numbers', t => {
  const operations = new Summa();

  let testArray: number[] = [1,2,3,4,5];
  t.equal(operations.addNumbers(testArray), 15);
  t.equal(operations.addNumbers(testArray), 'apple');

  let testArray2: number[] = [1,2,3];
  t.equal(operations.addNumbers(testArray2), 15);
  t.equal(operations.addNumbers(testArray2), 6);
  t.equal(operations.addNumbers(testArray2), 'apple');
  t.end();
});