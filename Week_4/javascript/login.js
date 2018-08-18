$(document).ready(function() {
  
  // Check if user already logged in
/*   if(readCookie(loggedIn)){
    if(localStorage.getItem('plant') === null) {
      window.location.href = 'info-update.html';
    } else {
      window.location.href = 'about.html';
    }
  } */

  $('#loginButton').click(function(){

    // Disable Button while funtion is processing
    $('#loginButton').disabled = true;
    $('#loginButton').html("Logging In");

    var password = getPassword();
    if (document.getElementById('password').value === password){

      if (localStorage.getItem('plant') === null){
        window.location.href = 'info-update.html';

      } else {
        createCookie("loggedIN", true, 1);
        window.location.href = 'about.html';
      }
    } else {

      // Enable the Button Again
      $('#loginButton').disabled = false;
      $('#loginButton').html("Sign In");
      alert ("Incorrect Password. Try Again");
    }
  });

  function getPassword (){
    if (typeof(Storage) === undefined){
      alert("You do not currently support local storage. Please consider upgrading");

    } else if (localStorage.getItem('plant') != null){
      return JSON.parse(localStorage.getItem('user')).NewPassword;

    } else { 
      return "6995";

    }
  }
});

function createCookie(name,value,days) {
  if (days) {
      var date = new Date();
      date.setTime(date.getTime()+(days*24*60*60*1000));
      var expires = "; expires="+date.toGMTString();
  }
  else var expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}