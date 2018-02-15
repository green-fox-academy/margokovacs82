'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

let thewholeday: number = (24 * 60 * 60); // would print out 86.400

let secondstillnow: number = ((14 * 60 * 60) + (34 * 60) + 42); // would print out 52.482

console.log(thewholeday - secondstillnow); // prints out 33.918