/* jshint esversion: 6 */
/* jscs:disable maximumLineLength */

const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.listen(port);
let students = [];
let teachers = [];

const student1 = {
  firstname: "Lisa",
  lastname: "LaFlamme",
  password: '123',
  age: 21,
  classes: ["street", "dancehall", "balett"]
};

const student2 = {
  firstname: 'Alexander',
  lastname: "Dahlberg",
  password: '123',
  age: 21,
  classes: ["street", "dancehall", "balett"]
};

const teacher = {
    firstname: "Adrienne",
    lastname: "Picard",
    password: '123',
    age: 21,
    classes: ["street", "dancehall", "balett"]
};

const classes = {
  street: {name: 'Street', time: '2', date: '2018-03-20'},
  dancehall: {name: 'Dancehall', time: '1.5', date: '2018-03-20'},
  balett: {name: 'Balett', time: '2', date: '2018-03-20'}
};

students.push(student1, student2);
teachers.push(teacher);


const capitalize = function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

function loginAuth(data){
  let auth = false;
  students.forEach(student => {
    if(student.firstname === data.name && student.password === data.password){
      auth = true;
    }
  });
  teachers.forEach((teacher) => {
    if(teacher.firstname === data.name && teacher.password === data.password){
      auth = true;
    }
  });
  return auth;
}
// todo: functions to return number of students of a class, which dates a student/teacher has depending on classes


  let res;


app.get('/student', function (req, res) {
    res.json(students);
});

app.get('/teacher', function (req, res) {
  res.json(teachers);
});

app.get('/classes', function (req, res) {
  res.json(classes);
});

app.post('/loginAuth', function (req, res) {
  if(loginAuth(req.body)){
    res.json({auth: true, name: req.body.name});
  }else{
    res.json(false);
  }
});


console.log(`App listening on port ${port}`);
