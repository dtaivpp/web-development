
function setup(){
  document.getElementById("gallons").onclick = 
    function() {setUnits("Liters");};
  document.getElementById("liters").onclick = 
    function() {setUnits("Gallons");};
};

function setUnits(unit) {
  var label=document.getElementById("label");
  label.innerHTML= unit;
}

function convert(){
  var gallonButton = document.getElementById("gallons");
  var quantity = document.getElementById("quantity");
  
  if (valid(gallonButton.checked, quantity.value)){
    if (gallonButton.checked){
      convertToGallons(quantity.value);
    } else {
      convertToLiters(quantity.value);
    }
  }
}

function convertToGallons(quantity) {
  var newQuantity = 0.26417 * quantity;
  outputValue(
    quantity +  
    " liters converts to: " + 
    newQuantity.toFixed(1) + 
    " gallons"
  );
}

function convertToLiters(quantity) {
  var newQuantity = quantity / 0.26417;
  outputValue(
    quantity +  
    " gallons converts to: " + 
    newQuantity.toFixed(1) + 
    " liters");
}

function outputValue(message){
  document.getElementById("quantity_output")
    .innerHTML = message
}

function valid(convertinToGallons, quantity) {
  if (convertinToGallons){
    if (quantity > 4000){
      alert("Quantity must be less than 4000 liters");
      document.getElementById('quantity').value = '';
      return false;
    }
  } else {
    if (quantity > 1000) {
      alert("Quantity must be less than 1000 gallons");
      document.getElementById('quantity').value = '';
      return false;
    }
  }
  return true;
}