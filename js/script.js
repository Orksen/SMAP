dropDown = false;

$(document).ready(function() {
	
	//alert(storedName);
	function circleRed(){
		if(connectionStatus == "Disconnected")
		{
			$('#isConnected').css('background-color', 'red');
		}
	}
	function circleGreen(){
		if(connectionStatus == "Connected")
		{
			$('#isConnected').css('background-color', 'green');
		}
	}
	
	$(document).on("click","#submitButton", function(){
		store();	
	});
	
	
	function store(){
		//Name
    	var name = document.getElementById("name");
		localStorage.setItem("name", name.value);
		var storedName = localStorage.getItem("name");	
		$( ".name" ).empty();
		$( ".name" ).append( "<h3>"+ storedName + "</h3>" );
		$( ".name" ).reload();
		alert("name klappt");
		//Number
		var number = document.getElementById("number");
		localStorage.setItem("number", number.value);
		var storedNumber = localStorage.getItem("number");	
		$( ".number" ).empty();
		$( ".number" ).append(storedNumber);
		$( ".number" ).reload();
		alert("nummer klappt");
		alert("Hey, " + storedName + "mit der Nummer " + storedNumber + "! Willkommen bei SMAP!");
		
    }
	

	
/*$(document).on("click","#settingsbutton", function(){
		//askforprofile();	
		var storedName = localStorage.getItem("name");
		$( ".name" ).remove();
		$( ".name" ).append( "<h3>"+ storedName + "</h3>" );

		alert("profile loaded");

	});*/
	
/*function askforprofile(){
    	
		var storedName = localStorage.getItem("name");
		$( ".name" ).append( "<h3>"+ storedName + "</h3>" );
		
    }
*/
	
	
	
	$( "#isConnected" ).on('tap',
		function(){
			if(dropDown == false){
				$('#connectionPanel').addClass( "bounceInDown animated" );	
				$('#connectionPanel').css("opacity", "1");

				console.log(dropDown);
				
				$('#connectionPanel').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
					function(){
						$('#connectionPanel').removeClass( "bounceInDown animated" );
					}
				);
			};
			if(dropDown == true){
				$('#connectionPanel').addClass( "bounceOutUp animated" );
				console.log(dropDown);
				$('#connectionPanel').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
					function(){
						$('#connectionPanel').css("opacity", "0");
						$('#connectionPanel').removeClass( "bounceOutUp animated" );		
					}
				);
			};
			dropDown = !dropDown;
		});
		
		var storedName = localStorage.getItem("name");
		$( ".name" ).append( "<h3>"+ storedName + "</h3>" );
		
		
});
