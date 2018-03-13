'use strict';

let accounts: any[] = [
  { client_name: 'Igor', account_number: 11234543, balance: 203004099.2 },
  { client_name: 'Vladimir', account_number: 43546731, balance: 5204100071.23 },
  { client_name: 'Sergei', account_number: 23456311, balance: 1353600.0 }
];


// Create function that returns the name and balance of cash on an account in a list
// The output should be: "Igor", "203004099.2"

let getNameAndBalance: any [] = [];
accounts.forEach(function(item) {
  getNameAndBalance.push(item.client_name, item.balance);
})
console.log(getNameAndBalance);

//b-version
function balancePerPerson (arr: any[]): string[] {
  let tempArr: string[] = [];
  arr.forEach(function(item: string, index: number) {
    tempArr = tempArr.concat(arr[index].client_name + ', ' + arr[index].balance)
  });
  return tempArr;
}
console.log(balancePerPerson(accounts));


// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from account_number
//  - to account_number
//  - amount of cash to transfer
//

function transferAmount (account: any [], from: number, to: number, amount: number) {
  for (let i: number = 0; i < account.length; i++) {
    if (account[i].account_number == from) {
      account[i].balance -= amount;
    } if (account[i].account_number == to) {
      account[i].balance += amount;
      } else if (account[i].account_number !== 11234543 || 43546731 || 23456311) {
        console.log('404')
        }
  }
         return account
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
//export = {
  //getNameAndBalance,
  //transferAmount,
  //accounts
//};