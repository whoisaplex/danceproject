let _courses = [];
class createCourse {
  constructor(name, teacher, time){
    this.name = name;
    this.teacher = teacher;
    this.time = time;
    this.students = [];
  }
}

_courses['Aplex'] = new createCourse('Aplex', 'AplexMaster', 10.00);
console.log(_courses['Aplex'].students.length);
