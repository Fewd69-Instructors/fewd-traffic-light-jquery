$(function(){

  $('#stopButton').click(switchRed);
  $('#slowButton').click(switchYellow);
  $('#goButton').click(switchGreen);

  function switchRed() {
    clearLights();
    $('#stopLight').css('backgroundColor', 'red');
  }

  function switchYellow() {
    clearLights();
    $('#slowLight').css('backgroundColor', 'yellow');
  }

  function switchGreen() {
    clearLights();
    $('#goLight').css('backgroundColor', 'green');
  }

  function clearLights() {
    $('#stopLight').css('backgroundColor', 'black');
    $('#slowLight').css('backgroundColor', 'black');
    $('#goLight').css('backgroundColor', 'black');
  }

});



//Implement the red light using jQuery. Don't forget to add the script tags.