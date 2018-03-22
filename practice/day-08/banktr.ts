'use strict';
// Create function that returns the name and balance of cash on an account in a list
// The output should be: "Igor", "203004099.2"
// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from account_number
//  - to account_number
//  - amount of cash to transfer
// Log "404 - account not found" if any of the account numbers don't exist to the console.
// transferAmount(accounts, 43546731, 23456311, 500.0);
//After printing the "accounts" it should look like:
// var accounts = [
//	{ 'client_name': 'Igor', 'account_number': 11234543, 'balance': 203004099.2 },
//	{ 'client_name': 'Vladimir', 'account_number': 43546731, 'balance': 5204099571.23 },
//	{ 'client_name': 'Sergei', 'account_number': 23456311, 'balance': 1354100.0 }
//]

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

