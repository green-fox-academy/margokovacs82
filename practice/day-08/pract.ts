'use strict';
// -  Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements in `ai` to the console
let ai: number[] = [3, 4, 5, 6, 7];
function add (myarr: number[]){
  let sum: number = 0;
  for(let i: number =0; i < myarr.length; i++) {
    sum += myarr[i];
  } return sum;
}  
console.log(add(ai));

// Create function that returns the name and balance of cash on an account in a list
// The output should be: "Igor", "203004099.2"
let accounts: any[] = [
  { client_name: 'Igor', account_number: 11234543, balance: 203004099.2 },
  { client_name: 'Vladimir', account_number: 43546731, balance: 5204100071.23 },
  { client_name: 'Sergei', account_number: 23456311, balance: 1353600.0 }
];

let newarray: any [] = [];
function showInfos (array: any []) {
  for (let i: number = 0; i < accounts.length; i++) {
    array.push(accounts[i].client_name + ', ' + accounts[i].balance)
  } return array
}
console.log(showInfos(newarray));

// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from account_number
//  - to account_number
//  - amount of cash to transfer

function transferAmount (accos: any [], fromAcc: number, toAcc: number, cash: number) {
  let numbArr: number [] = [];
  for (let i: number = 0; i < accos.length; i++) {
    numbArr.push(accos[i].account_number);
  }
    if ((numbArr.indexOf(toAcc) === -1) || (numbArr.indexOf(fromAcc) === -1)) {
      return (`404`);
  } else 
  { for (let i: number = 0; i < accos.length; i++) {
      if (accos[i].account_number === fromAcc) {
        accos[i].balance -= cash;
      }
      if (accos[i].account_number === toAcc) {
        accos[i].balance += cash;
      } 
    }  
    return accos; 
  }
}
console.log(transferAmount(accounts, 43546731, 23456311, 500.0));
// Log "404 - account not found" if any of the account numbers don't exist to the console.
// transferAmount(accounts, 43546731, 23456311, 500.0);
//After printing the "accounts" it should look like:
// var accounts = [
//	{ 'client_name': 'Igor', 'account_number': 11234543, 'balance': 203004099.2 },
//	{ 'client_name': 'Vladimir', 'account_number': 43546731, 'balance': 5204099571.23 },
//	{ 'client_name': 'Sergei', 'account_number': 23456311, 'balance': 1354100.0 }
//]


let students: any[] = [
  {name: 'Rezso', age: 9.5, candies: 2},
  {name: 'Zsombor', age: 12, candies: 5},
  {name: 'Aurel', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'Gerzson', age: 10, candies: 1},
];

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

function moreCandies (list: any []) {
  let newlist: any [] = []
  for (let i: number = 0; i < list.length; i++) {
    if (list[i].candies > 4) {
      newlist.push(list[i]);
    }
  } return newlist;
}
console.log(moreCandies(students));

// create a function that takes a list of students and logs: 
//  - how many candies they have on average

function average (list2: any []) {
  let sum: number = 0;
  for (let i: number = 0; i < list2.length; i++) {
    sum += list2[i].candies 
    } return sum / students.length;
  } 
console.log(average(students));




class Pirate {
  name: string;
  hasWoodenLeg: boolean;
  gold: number;

  constructor(name: string, hasWoodenLeg: boolean, gold: number) {
    this.name = name;
    this.hasWoodenLeg = hasWoodenLeg;
    this.gold = gold;
  }
}
  
// Given this list...
// Write a function that takes any list that contains pirates as in the example,
// And returns a list of names containing the pirates that
// - have wooden leg and
// - have more than 15 gold */
function initializePirates(): Pirate[] {
  let pirates = [];
  pirates.push(new Pirate("Olaf", false, 12));
  pirates.push(new Pirate("Uwe", true, 9));
  pirates.push(new Pirate("Jack", true, 16));
  pirates.push(new Pirate("Morgan", false, 17));
  pirates.push(new Pirate("Hook", true, 20));
  return pirates;
}

let pirates = initializePirates();

function countgoldandlegs (pirlist: any []) {
  let newerlist: any [] = [];
  for (let i: number = 0; i < pirlist.length; i++) {
    if (pirlist[i].hasWoodenLeg === true && pirlist[i].gold > 15) {
      newerlist.push(pirlist[i].name);
    }
  } return newerlist;
} 
console.log(countgoldandlegs(pirates));




