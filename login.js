$(document).ready(() => {
  $('#show-login, #close-window').click(() => {
    $('#login-container').toggle();
  });
  $('#login').click(() => {
    const inUsername = $('#username').val();
    const inPassword = $('#password').val();
    authChecker(inUsername, inPassword);
  });
});


function authChecker(username, password){
    const data = {name: username, password: password};
    return fetch('http://localhost:8080/loginAuth', {
      body: JSON.stringify(data),
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST',
      mode: 'cors',
      redirect: 'follow',
    }).then(response => response.json()).then(data => {
        if(data.auth){
          sessionStorage.setItem('username', data.name);
          window.location.replace('../danceproject/profilePage/index.html');
        }else{
          $('#error').css({'display' : 'flex'});
        }
    });
}
