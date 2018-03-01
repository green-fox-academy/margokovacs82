//Create Student and Teacher classes
//Student
//learn()
//question(teacher) -> calls the teachers answer method
//Teacher
//teach(student) -> calls the students learn method
//answer()
'use strict';

class Student {
  learn(){
    console.log("I dunno but learn.")
  }
  question() {
    let teach = new Teacher();
    teach.answer();
  }
}

class Teacher {
  teach() {
    let stud = new Student();
    stud.question();
  }
  answer() {
    console.log("Wait, what?")
  }
}

let maris: Student = new Student();
let jani: Teacher = new Teacher();
//jani.teach();
//maris.question();
jani.answer();
maris.learn();

