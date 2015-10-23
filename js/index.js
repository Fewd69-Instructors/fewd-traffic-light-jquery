//Implement the red light using jQuery. Don't forget to add the script tags.
//test
$(document).ready(function(){


  $('#stopButton').click(turnRed);
  $('#slowButton').click(turnYellow);
  $('#goButton').click(turnGreen);

  function turnRed() {

    $("#stopLight").css('backgroundColor', 'red');
    $("#slowLight").css('backgroundColor', 'black');
    $("#goLight").css('backgroundColor', 'black');
  }

  function turnYellow() {

    $("#stopLight").css('backgroundColor', 'black');
    $("#slowLight").css('backgroundColor', 'yellow');
    $("#goLight").css('backgroundColor', 'black');
  }

  function turnGreen() {

    $("#stopLight").css('backgroundColor', 'black');
    $("#slowLight").css('backgroundColor', 'black');
    $("#goLight").css('backgroundColor', 'green');
  }

});