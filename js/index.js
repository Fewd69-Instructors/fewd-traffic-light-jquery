//Implement the red light using jQuery. Don't forget to add the script tags.

$(function(){

	$('#stopButton').click(illuminateRed);
	$('#slowButton').click(illuminateYellow);
	$('#goButton').click(illuminateGreen);
	$('#resetButton').click(illuminateBlack);

		function illuminateRed(){
			clearLights();
			$('#stopLight').attr('class','red');
		}

		function illuminateYellow(){
			clearLights();
			$('#slowLight').attr('class','yellow');
		}

		function illuminateGreen(){
			clearLights();
			$('#goLight').attr('class','green');
		}

		function illuminateBlack(){
			clearLights();
		}

		function clearLights(){
			$('#stopLight').attr('class','black');
			$('#slowLight').attr('class','black');
			$('#goLight').attr('class','black');
		}
});