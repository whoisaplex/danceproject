let students;
let teachers;
let classes;

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
        });
    });
  });
});

function renderClasses(){
  students.forEach(student => {
    student.classes.forEach((classers) => {
      if(student.firstname === sessionStorage.getItem('username')){
        let tempData = classes[classers];
        $('#class_container').append("<div class='boxbox'><div class='boxbox_color'></div><div class='boxbox_content'><h3>"+tempData.name+"</h3><h3><i class='far fa-clock'></i> "+tempData.time+"H</h3><h3><i class='far fa-calendar-alt'></i> "+tempData.date+"</h3></div></div>");
      }
    });
  });

  teachers.forEach(teacher => {
    teacher.classes.forEach((classers) => {
      if(teacher.firstname === sessionStorage.getItem('username')){
          let tempData = classes[classers];
          fetch('http://localhost:8080/getStudentCount', {
            body: JSON.stringify({class: classers}),
            headers: {'content-type': 'application/json'},
            method: 'POST',
            mode: 'cors'
          }).then(response => response.json().then(response => {
            $('#class_container').append("<div class='boxbox'><div class='boxbox_color'></div><div class='boxbox_content'><h3>"+tempData.name+"</h3><h3><i class='far fa-clock'></i> "+tempData.time+"H</h3><h3><i class='far fa-calendar-alt'></i> "+tempData.date+"</h3><h3>Students: "+response+"</h3></div></div>");
          }));
        }
    });
  });
}
