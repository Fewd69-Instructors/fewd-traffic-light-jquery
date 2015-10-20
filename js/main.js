$(document).ready(function(){

$('#stopButton').click(illuminateRed);
$('#slowButton').click(illuminateYellow);
$('#goButton').click(illuminateGreen);

function illuminateRed() {
  clearLights();
  $('#stopLight').css('backgroundColor', 'red');
}

function illuminateYellow() {
  clearLights();
  document.getElementById('slowLight').style.backgroundColor = "yellow";
}

function illuminateGreen() {
  clearLights()
  document.getElementById('goLight').style.backgroundColor = "green";
}

function clearLights() {
  $('#stopLight').css('backgroundColor', 'black');
  $('#slowLight').style('backgroundColor', 'black');
  $('#goLight').style('backgroundColor', 'black');
}
})