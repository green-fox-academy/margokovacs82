'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention
// Expected outpt:
// My todo:
//  - Buy milk
//  - Download games
//      - Diablo
let addO: string = "My todo:\n";
let todoText: string = ' - Buy milk\n';
let addO2: string = " - Download games\n";
let addO3: string = "   - Diablo";

let quote2 = addO.concat(todoText, addO2, addO3);

console.log(quote2);