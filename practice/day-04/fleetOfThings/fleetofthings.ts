'use strict';

import {Thing} from "./things";
import {Fleet} from "./fleet";

let fleet = new Fleet();

let thing1 = new Thing("Get milk");
let thing2 = new Thing("Remove the obstacles");
let thing3 = new Thing("Stand up");
let thing4 = new Thing("Eat lunch");

fleet.add(thing1);
fleet.add(thing2);
fleet.add(thing3);
fleet.add(thing4);

thing1.markAsCompleted();
thing3.markAsCompleted();

fleet.printList();

fleet.add(new Thing('Bread'));
thing2.markAsCompleted();
fleet.printList();

console.log(fleet);
//* crete a fleet of things to have this output:*/
//* 1. [ ] Get milk */
//* 2. [ ] Remove the obstacles */
//* 3. [x] Stand up */
//* 4. [x] Eat lunch */
//* Hint: You have to create a Print method also */
