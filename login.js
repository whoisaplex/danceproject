$(document).ready(() => {
  const username = 'aplex';
  const password = '123';
  $('#show-login, #close-window').click(() => {
    $('#login-container').toggle();
  });
  $('#login').click(() => {
    const inUsername = $('#username').val();
    const inPassword = $('#password').val();
    if(inUsername === username && inPassword === password){
      window.location.replace('');
    }else{
      $('#error').css({'display' : 'flex'});
    }
  });
});
