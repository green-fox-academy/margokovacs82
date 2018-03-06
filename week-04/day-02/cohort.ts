'use strict'

import { Person, Student, Mentor, Sponsor } from './class';

class Cohort{

  name: string;
  students: Student [] = [];
  mentors: Mentor [] = [];
  
  constructor(name?: string, age?: number, gender?: string, company?: string) {
    this.name = 'Macrotice Ace';
  }

    addStudent(student: Student){
      this.students.push(student);
    } 

    addMentor(mentor: Mentor) { 
      this.mentors.push(mentor);
    }
  
    info() { 
      return `The ${this.name} has ${this.students.length} students and ${this.mentors.length} mentors`;
    }
  }
  
  let ACE = new Cohort;
  let Margo = new Student('Margo', 35, 'female', 'Index.hu');
  ACE.addStudent(Margo);
  let Balázs = new Mentor('BalázskaXD', 25, 'male', 'junior');
  ACE.addMentor(Balázs);
  console.log(ACE.info());
