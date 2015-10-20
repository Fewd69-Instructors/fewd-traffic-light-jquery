function clearAll() {
  $('#stopLight, #slowLight, #goLight').removeClass().addClass('bulb');
}

$(function() {

  $('#stopButton').click(function() {
    clearAll();
    $('#stopLight').addClass('red')
  });

  $('#slowButton').click(function() {
    clearAll();
    $('#slowLight').addClass('yellow')
  });

  $('#goButton').click(function() {
    clearAll();
    $('#goLight').addClass('green')
  });
  
});


