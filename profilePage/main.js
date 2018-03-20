/*fetch('http://localhost:8080/student').then((response) => {
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
*/

const data = {hello: 'my honey'};
fetch('http://localhost:8080/loginAuth', {
    body: JSON.stringify(data),
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST',
    mode: 'cors',
    redirect: 'follow',
    referrer: 'no-referrer',
  });


let students;
let teachers;
let classes;


function renderClasses(){
  students.classes.forEach((classers) => {
  let tempData = classes[classers];
  $('#class_container').append("<div class='boxbox'><div class='boxbox_color'></div><div class='boxbox_content'><h3>"+tempData.name+"</h3><h3><i class='far fa-clock'></i> "+tempData.time+"H</h3><h3><i class='far fa-calendar-alt'></i> "+tempData.date+"</h3></div></div>");
  });
}
