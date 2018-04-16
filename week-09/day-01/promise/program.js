//setTimeout(function(){ 
  //console.log('TIMED OUT!');
//} , 3000)

require('es6-promise');

'use strict';

/* reject a promise
var promise = new Promise(function (fulfill, reject) {
  setTimeout(() => {
    reject(new Error('REJECTED!'))
  }, 300); 
});

function onReject(error) {
  console.log(error.message);
}

promise.then(console.log, onReject);
*/ 

/* to reject or not to reject
var promise = new Promise(function (fulfill, reject) {
    fulfill('I FIRED')
    reject(new Error('I DID NOT FIRE!'))
});

function onRejected(error) {
  console.log(error.message);
}

promise.then(console.log, onRejected);
*/

/* Always asynchronous
var promise = new Promise(function (fulfill, reject) {
  fulfill('PROMISE VALUE')
});
promise.then(console.log);

console.log("MAIN PROGRAM");
*/

//shortcuts
/*
var promise = new Promise(function (fulfill, reject) {
  fulfill('SECRET VALUE');
});

// Introducing: Promise.resolve
// It does the exact same thing as above:

var promise = Promise.resolve('SECRET VALUE');

    // Likewise...

    var promise = new Promise(function (fulfill, reject) {
      reject(new Error('SECRET VALUE'));
    });

    var promise = Promise.reject(new Error('SECRET VALUE'))
*/

//promis after promis
Parse.User.logIn('user', 'pass').then(function (query) {
  query.find().then(function (results) {
    results[0].save({ key: value }).then(function (result) {
      // the object was saved
    });
  });
});

var originalPromise = Parse.User.logIn('user', 'pass');

    var findPromise = originalPromise.then(function (query) {
      // At this point, you have logged in.
      // query.find() returns another promise, which will become `findPromise`
      return query.find();
    });

    var savePromise = findPromise.then(function (results) {
      // At this point, the query finding is done.
      // The promise returned by `save` will become `savePromise`
      return results[0].save({ key: value });
    });

    savePromise.then(function (result) {
      // the object was saved
    });

//which can then be simplified to:

    Parse.User.logIn('user', 'pass').then(function (query) {
      return query.find();
    }).then(function (results) {
      return results[0].save({ key: value });
    }).then(function (result) {
      // the object was saved
    });


