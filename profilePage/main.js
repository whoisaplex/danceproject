fetch('http://localhost:8080/student').then((response) => {
    response.json().then(data => {
      students = data;

    });
}).then(() => {
  fetch('http://localhost:8080/teacher').then((response) => {
      response.json().then(data => {
        teachers = data;
      });
  }).then(() => {
    fetch('http://localhost:8080/classes').then((response) => {
        response.json().then(data => {
          classes = data;
          renderClasses();
          console.log(sessionStorage.getItem('username'));
        });
    });
  });
});


let students;
let teachers;
let classes;


function renderClasses(){
  students.forEach(student => {
    student.classes.forEach((classers) => {
      let tempData = classes[classers];
      $('#class_container').append("<div class='boxbox'><div class='boxbox_color'></div><div class='boxbox_content'><h3>"+tempData.name+"</h3><h3><i class='far fa-clock'></i> "+tempData.time+"H</h3><h3><i class='far fa-calendar-alt'></i> "+tempData.date+"</h3></div></div>");
    });
  });
}
