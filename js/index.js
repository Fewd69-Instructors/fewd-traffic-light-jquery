//Implement the red light using jQuery. Don't forget to add the script tags.
$(document).ready(function(){

  $('#stopButton').click(redLight);
  $('#slowButton').click(yellowLight);
  $('#goButton').click(greenLight);

  function redLight() {
    clearLights();
    $('#stopLight').css('background-color', 'red');
  }

  function yellowLight() {
    clearLights();
    $('#slowLight').css('background-color', 'yellow');
  }

  function greenLight() {
    clearLights();
    $('#goLight').css('background-color','green');
  }



function clearLights() {
  $(".bulb").css('background-color', 'black');
}


});