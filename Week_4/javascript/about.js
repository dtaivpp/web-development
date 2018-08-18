$(document).ready(function 
  showUserForm(){
    try {
      var plant = JSON.parse(localStorage.getItem("plant"));
    } catch (error) {
      /**
       * Google Browser error constant Checker
       */
      if (window.navigator.vendor ==="Google Inc"){
        if (error == DOMException.QUOTA_EXCEEDED_ERR){
          alert("Error: Local limit exceeded");
        }
      } else if (error = QUOTA_EXCEEDED_ERR){
        alert("Error: Local limit exceeded");
      }
      console.log(error);
    }

    if(plant != null){
      $("#plantID").html(plant.plantID);
      $("#installDate").html(plant.installDate);
    }
});