import {Thing} from "./things";

'use strict';
class Fleet {
    private things: Thing[] 

    constructor(){
      this.things = [];
    }
    get getThings(): Thing[] {
      return this.things;
    }
    add(thing: Thing){
        this.things.push(thing);
    }
    printList() {
      for (let i: number = 0; i <this.printList.length; i++) {
        let mark = ' ';
        if (this.things[i].complete()) {
          mark = 'X';
        }
        console.log((i+1)+'. [' + mark + ']' + this.things[i])
      }
    }
  }
export {Fleet};
