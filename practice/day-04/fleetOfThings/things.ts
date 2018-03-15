
'use strict';
class Thing {
  private name: string;
  completed: boolean;

  constructor(name: string){
      this.name = name;
      this.completed = false;
  }
      get getname(): string {
        return this.name;
      }
      
      set setname(name: string) {
        this.name = name;
      }
     
      markAsCompleted() {
        this.completed = true;
      }
  }


export {Thing};