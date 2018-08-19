$(document).ready(function (){
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

  google.charts.load('current', {packages: ['corechart', 'line']});
  google.charts.setOnLoadCallback(drawBasic);
});

function renderTable(){
  var innerHtml = "";
  var plantConsumption = getCurrentEntries();
  plantConsumption.forEach(function (entity){
    innerHtml += "<tr><td>" + entity.date + "</td><td>" + entity.powerConsumption + "</td></tr>";
  });
  $("table tbody").html(innerHtml);
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

function drawBasic() {

      var data = new google.visualization.DataTable();
      data.addColumn('date', 'X');
      data.addColumn('number', 'Power');

      data.addRows(parseTable());

      var options = {
        hAxis: {
          title: 'Date'
        },
        vAxis: {
          title: 'Power Consumption'
        }
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

      chart.draw(data, options);
    }

    function parseTable(){
      var plantConsumption = getCurrentEntries();
      var graphData = []

      plantConsumption.forEach(function (entry){
        var tmp = []
        tmp.push(new Date(entry.date));
        tmp.push(parseInt(entry.powerConsumption));
        graphData.push(tmp);
      });
      return graphData;
    }