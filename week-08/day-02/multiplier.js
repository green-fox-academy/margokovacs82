// Create the multiplier function that you can use like this:

function multiplier(num) {
  return function(y) {
    return num * y;
  };
}

const duplicator = multiplier(2);

console.log(duplicator(5)); // should log 10
console.log(duplicator(10)); // should log 20

const threeTimes = multiplier(3);

console.log(threeTimes(5)); // should log 15
console.log(threeTimes(100)); // should log 300


// another version: 

function multiply(a, b) {
  return a * b;
}

const multiByTwo = multiply.bind(this, 2);
console.log(multiByTwo(4));

const multiByThree = multiply.bind(this, 3);
console.log(multiByThree(4));