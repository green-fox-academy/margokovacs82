'use strict';
export class Person {
  name: string;
  age: number;
  gender: string;
 
  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female') {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  introduce() {
    return `Hi, I'm ${this.name}, a ${this.age} year old ${this.gender}.`;
  }

  getGoal() {
   return "My goal is: Live for the moment!"
  }
}

export class Student extends Person {

  name: string;
  age: number;
  gender: string;
  previousOrganization: string;
  skippedDays: number;

  constructor(name?: string, age?: number, gender?: string, previousOrganization?: string) {
    super (name, age, gender)
    this.previousOrganization = previousOrganization;
    this.skippedDays = 0;
  }
  introduce(){
    return `Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`;
  }
  getGoal() {
    return "Be a junior software developer.";
  }
  skipDays(numberOfDays){
    this.skippedDays += numberOfDays
  }
}

export class Mentor extends Person {
  name: string;
  age: number;
  gender: string;
  level: string;
 
  constructor(name?: string, age?: number, gender?: string, level?: string) {
  super(name, age, gender);
  this.level = level;
  }

introduce() {
  return `Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor.`;
}
getGoal() {
  return "Educate brilliant junior software developers.";
}
}

export class Sponsor extends Person{
  name: string;
  age: number;
  gender: string;
  company: string;
  hiredStudents: number;

  constructor(name?: string, age?: number, gender?: string, company?: string) {
    super(name, age, gender);
    this.company = company;
  }
  
  introduce() {
    return `Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`;
  }
  hire() {
    this.hiredStudents++;
  }
  getGoal() {
    return "Hire brilliant junior software developers.";
  }
}

let people = [];
let mark = new Person('Mark', 46, 'male');
people.push(mark);
let jane = new Person('Jane Doe', 30, 'female');
people.push(jane);
let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);
let student = new Student('Jane Doe', 30, 'female', 'The School of life');
people.push(student);
let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);
let mentor = new Mentor('Jane Doe', 30, 'female', 'senior');
people.push(mentor);
let sponsor = new Sponsor('Jane Doe', 30, 'female', 'Google');
let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');

student.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
  sponsor.hire();
}

for (let person of people) {
  person.introduce();
  person.getGoal();
}

console.log(people);