$(document).ready(function() {

  if(!readCookie(loggedIn)){
    window.location.href = 'login.html';
  }

});

