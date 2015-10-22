//Implement the red light using jQuery. Don't forget to add the script tags.
$(function(){

  $('#goButton').click(turnGreen)
  $('#slowButton').click(turnYellow)
  $('#stopButton').click(turnRed)

  function turnGreen(){
    clearAll();
    $('#goLight').css('backgroundColor','green');
  }

  function turnYellow(){
    clearAll();
    $('#slowLight').css('backgroundColor','yellow');
  }

  function turnRed(){
    clearAll();
    $('#stopLight').css('backgroundColor','red');
  }

  function clearAll(){
    $('#stopLight').css('backgroundColor','black');
    $('#slowLight').css('backgroundColor','black');
    $('#goLight').css('backgroundColor','back')
  }
})


// function illuminateRed() {
//   //clearLights();
//   document.getElementById('stopLight').style.backgroundColor = "red";
// }

// function illuminateYellow() {
//   //clearLights();
//   document.getElementById('slowLight').style.backgroundColor = "yellow";
// }

// function illuminateGreen() {
//   //clearLights();
//   document.getElementById('goLight').style.backgroundColor = "green";
// }

// function clearLights() {
//   document.getElementById('stopLight').style.backgroundColor = "black";
//   document.getElementById('slowLight').style.backgroundColor = "black";
//   document.getElementById('goLight').style.backgroundColor = "black";
// })