//Implement the red light using jQuery. Don't forget to add the script tags.
  $(document).ready(function(){


  $('#stopButton').click(illuminateRed);
  $('#slowButton').click(illuminateYellow);
  $('#goButton').click(illuminateGreen);

  function illuminateRed() {
  	clearLights();
  	$('stopLight').attr('class', 'red');
  }

    function illuminateYellow() {
  	$('slowLight').attr('class', 'yellow');
  }

    function illuminateGreen() {
  	$('goLight').attr('class', 'green');
  }

  function clearLights() {
    $('stopLight').attr('class', 'black');
    $('slowLight').attr('class', 'black');
    $('goLight').attr('class', 'black');

});