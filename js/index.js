//Implement the red light using jQuery. Don't forget to add the script tags.
$(document).ready(function(){

  $("#stopButton").click(switchRed);
  $("#slowButton").click(switchYellow);
  $("#goButton").click(switchGreen);

function clearLights() {
 $("#stopLight").css("backgroundColor", "black");
 $("#slowLight").css("backgroundColor", "black");
 $("#goLight").css("backgroundColor", "black");
}

function switchRed() {
  clearLights();
  $("#stopLight").css("backgroundColor", "red");
}

function switchYellow() {
  clearLights();
  $("#slowLight").css("backgroundColor", "yellow");
}

function switchGreen() {
  clearLights();
  $("#goLight").css("backgroundColor", "green");
}



});