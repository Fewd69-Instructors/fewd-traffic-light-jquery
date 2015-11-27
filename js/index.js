$(function(){

  $("#stopButton").click(function(){
    clearLights();
    $("#stopLight").css("backgroundColor", "red");
  }); 

  $("#slowButton").click(function(){
    clearLights();
    $("#slowLight").css("backgroundColor", "yellow");
  });

  $("#goButton").click(function(){
    clearLights();
    $("#goLight").css("backgroundColor", "green");
  });

function clearLights() {
  $("#stopLight").css("backgroundColor", "black");
  $("#slowLight").css("backgroundColor", "black");
  $("#goLight").css("backgroundColor", "black");
}


});
