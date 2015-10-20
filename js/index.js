$(document).ready(function(){

  $('#stopButton').click(switchStop);
  $('#slowButton').click(switchSlow);
  $('#goButton').click(switchGo);

function switchStop() {
  clearLights();
  $('#stopLight').css('backgroundColor','red');
}
function switchSlow() {
    clearLights();
  $('#slowLight').css('backgroundColor','yellow');
}
function switchGo() {
    clearLights();
  $('#goLight').css('backgroundColor','green');
}
function clearLights() {
  $('.bulb').css('backgroundColor','black')
}


});