$(document).ready(function(){


	$("button").click(function(){
        $("#sideMenu").toggle();
    });
		
		
var bgChange = setInterval(setBG, 5000);

function setBG() {
	var dt = new Date();
	var min = dt.getMinutes();

	if(min % 2 == 0)
		{
		  $("body").css( 'background', 'url("img/background.png")' );
		}
		else
		{
		  $("body").css( 'background', 'url("img/background2.jpg")' );
		}

}



});