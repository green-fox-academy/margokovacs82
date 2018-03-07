'use strict';

interface Reservationy {
  getDowBooking(): string;
  getCodeBooking(): string;
}

class Reservations {

  getCodeBooking(): string {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (let i = 0; i < 9; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
  
  getDowBooking() {
      let possible = ["MON", "TUE", "WED", "THS", "FRI", "SAT", "SUN"];
      let randomAnswer = possible[Math.floor(Math.random() * possible.length)];
      return randomAnswer;
    }
  }

let reserv = new Reservations;

for (let i: number = 0; i < 10; i ++){
console.log("Booking# " + reserv.getCodeBooking() + " for " + reserv.getDowBooking());
}