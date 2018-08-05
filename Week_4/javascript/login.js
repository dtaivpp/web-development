$(document).ready(function() {
  $('#loginButton').click(function(){

    // Disable Button while funtion is processing
    $('#loginButton').disabled = true;
    $('#loginButton').html("Logging In");

    var password = getPassword();
    if (document.getElementById('password').value === password){

      if (localStorage.getItem('user') === null){
        console.log("got here");
        window.location.href = 'info-update.html';

      } else {
        $.mobile.pageContainer.pagecontainer("change", "#page",('navigation.html'));
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

    } else if (localStorage.getItem('user') != null){
      return JSON.parse(localStorage.getItem('user')).NewPassword;

    } else { 
      return "6995";

    }
  }
});