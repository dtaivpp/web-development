$(document).ready(function (){
  $("#u_date").change(function(){

    if (!isNaN(Date.parse( $('#u_date').val() ))){
      $("#u_powerConsumption").prop("disabled", false);
    } else {
      $("#u_powerConsumption").prop("disabled", true);
    }
  });

  try {
    var plantConsumption = JSON.parse(localStorage.getItem("plantConsumption"));
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
  if (plantConsumption === null){
    var plantConsumption = [];
    saveToLocal(plantConsumption);
  } else {
    renderTable();
  }
});

function addEntry(){
  var date = $('#a_date').val();
  var powerConsumption = $("#a_powerConsumption").val();

  if (!isNaN(Date.parse(date)) && 
      !isNaN(powerConsumption)){
    var entity = {
      "date": date,
      "powerConsumption": powerConsumption
    }
    entryModify(entity);
    renderTable();
  } else {
    alert("Ensure you are using valid inputs");
  }
}


function getCurrentEntries(){
  try {
    var plantConsumption = JSON.parse(localStorage.getItem("plantConsumption"));
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

  return plantConsumption; 
};

function entryModify(entity){
  var plantConsumption = getCurrentEntries();
  var found = false;

  if (plantConsumption.length != 0){
    plantConsumption.forEach(function (datapoint){
      if (datapoint.date === entity.date){
        datapoint.powerConsumption = entity.powerConsumption;
        found = true;
      }
    });
    
  }
  if (!found){
    plantConsumption.push(entity);
  }
  saveToLocal(plantConsumption);
};  

function renderTable(){
  var innerHtml = "";
  var plantConsumption = getCurrentEntries();
  plantConsumption.forEach(function (entity){
    innerHtml += "<tr><td>" + entity.date + "</td><td>" + entity.powerConsumption + "</td></tr>";
  });
  $("table tbody").html(innerHtml);
}

function saveToLocal(plantConsumption) {
  try {
    localStorage.setItem("plantConsumption", JSON.stringify(plantConsumption));
    alert("Saving Information");
  } catch (error) {
    if (window.navigator === "Google Inc."){
      if (error == DOMException.QUOTA_EXCEEDED_ERR){
        alert("Error. Local Stoarage Limit Exceeded");
      }
    } else if(error == QUOTA_EXCEEDED_ERR){
        alert("Error. Could not save to local storage");
    }
  }
}