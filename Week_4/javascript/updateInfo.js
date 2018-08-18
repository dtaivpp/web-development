function checkUserForm(){
  var storedPlant = JSON.parse(localStorage.getItem("plant"));
  if(plant != null || 
     $("#plantID").val() != "" && 
     $("#installDate").val() != "" && 
     $("#passwordUpdate").val() != ""){
    return true;
  } else {
    return false;
  }
}

function saveUserForm(){
  var storedPlant = JSON.parse(localStorage.getItem("plant"));
  var plantID = ($("#plantID").val() === "" ? storedPlant.plantID : $("#plantID").val());
  var installDate = ($("#installDate").val() === "" ? storedPlant.plantID : $("#installDate").val());
  var password = ($("#passwordUpdate").val() === "" ? storedPlant.plantID : $("#password").val());

  if(checkUserForm){
    var plant = {
      "plantID": plantID,
      "installDate": installDate,
      "password": password
    };
    try {
      localStorage.setItem("plant", JSON.stringify(plant));
      alert("Saving Information");
      window.location.href = "navigation.html";
    } catch (error) {
      if (window.navigator === "Google Inc."){
        if (error == DOMException.QUOTA_EXCEEDED_ERR){
          alert("Error. Local Stoarage Limit Exceeded");
        }
      } else if(error == QUOTA_EXCEEDED_ERR){
          alert("Error. Could not save to local storage");
      }

      console.log(error);
    }
  } else {
    alert("Please Ensure you have properly completed the form.");
  }
}