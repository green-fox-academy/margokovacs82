'use strict';

//Clicking the ‘Create candies’ button gives you 1 candy.

var create = document.querySelector(".create-candies");
var candies = document.querySelector(".candies");
var candinumber = 120;

let candyRefresh = () => candies.innerHTML = candinumber;

function createCandies() {
  candinumber += 1;
  candies.innerHTML = candinumber;
  candyRefresh();
}
create.addEventListener('click', createCandies);

//You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.

var buylolli = document.querySelector(".buy-lollypops");
var lolli = document.querySelector(".lollypops");

function buyLolli() {
  if (candinumber >= 100) {
    lolli.textContent += '🍭';
    candinumber -= 100;
    candyRefresh();
  } 
}
buylolli.addEventListener('click', buyLolli);

//10 lollipops generate 1 candy per second.
//Display the candy producton rate in the Candies / Second row

var speed = document.querySelector(".speed");

if (lolli.innerHTML.length >= 20) {
  //console.log(lolli.innerHTML.length);
  window.setInterval(function () {
    candinumber = candinumber + 1;
    candyRefresh();
  }, 1000);
  speed.innerHTML = 1;
}

//If you press the "make candy rain" button, the candy generation should speed up 10x
var rain = document.querySelector(".candy-machine");

function candyRain() {
  window.setInterval(function () {
    candinumber = candinumber + 1;
    candyRefresh();
  }, 100);
  speed.innerHTML = 10;
}

rain.addEventListener('click', candyRain);