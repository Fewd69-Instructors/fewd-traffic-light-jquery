//Implement the red light using jQuery. Don't forget to add the script tags.

// document.getElementById('stopButton').onclick = illuminateRed;
// document.getElementById('slowButton').onclick = illuminateYellow;
// document.getElementById('goButton').onclick = illuminateGreen;

// function illuminateRed() {
//   clearLights();
//   document.getElementById('stopLight').style.backgroundColor = "red";
// }

// function illuminateYellow() {
//   clearLights();
//   document.getElementById('slowLight').style.backgroundColor = "yellow";
// }

// function illuminateGreen() {
//   clearLights();
//   document.getElementById('goLight').style.backgroundColor = "green";
// }

// function clearLights() {
//   document.getElementById('stopLight').style.backgroundColor = "black";
//   document.getElementById('slowLight').style.backgroundColor = "black";
//   document.getElementById('goLight').style.backgroundColor = "black";
// }


$(document).ready(function(){

  $('#stopButton').click(illuminateRed);
  $('#slowButton').click(illuminateYellow);
  $('#goButton').click(illuminateGreen);

  function illuminateRed () {
    clearLights();
    $('#stopLight').css('backgroundColor', 'red');

  }

  function illuminateYellow() {
    clearLights();
    $('#slowLight').css('backgroundColor', 'yellow');

  }

  function illuminateGreen() {
    clearLights();
    $('#goLight').css('backgroundColor', 'green');

  }

  function clearLights() {
    $('#stopLight').css('backgroundColor', 'black');
    $('#slowLight').css('backgroundColor', 'black');
    $('#goLight').css('backgroundColor', 'black');
  }

});