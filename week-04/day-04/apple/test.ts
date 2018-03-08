'use strict';
import { test } from 'tape';
import { Apple } from './apple';

test('apples work', t => {
  t.plan(3);
  t.equal(new Apple().getApple(), "apple");
  t.equal(new Apple().getApple(), "pear");
  t.equal(new Apple().getApple(), "cat");
});


  //test('apples work', t => {
  //const operations = new Apple();
  //var actual = operations.getApple();
  //var expected = "apple";
  //t.equal(actual, expected);
  //t.end();
//});


//Create a test method
//Instantiate an Object from your class in the method
//Use the t.equal()
// The expected parameter should be the same string (eg. 'apple')
// The actual parameter should be the return value of the method (eg. myobject.getApple())
// Run the test
// Change the expected value to make the test failing
// Run the test
// Fix the returned value to make the test succeeding again
