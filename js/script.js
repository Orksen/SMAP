var dropDown = false;
var gesteErkannt = false;
var connected = false;

$(document).ready(function() {
	 
	
	checkUser();
	$('#welcome').delay(2000).fadeOut('slow');
	
	/*//alert(storedName);
	function circleRed(){
		if(connectionStatus == "Disconnected")
		{
			$('#isConnected').css('background-color', 'blue');
			

		}
	}
	function circleGreen(){
		if(connectionStatus == "Connected")
		{
			$('#isConnected').css('background-color', 'green');
		}
	}*/
	
	$(document).on("click","#submitButton", function(){
		store();
	});
	
	
	function store(){
		
		//Name
    	var name = document.getElementById("name");
		localStorage.setItem("name", name.value);
		var storedName = localStorage.getItem("name");	
		$( ".name" ).empty();
		$( ".name" ).append(storedName);
		
		//Number
		var number = document.getElementById("number");
		localStorage.setItem("number", number.value);
		var storedNumber = localStorage.getItem("number");	
		$( ".number" ).empty();
		$( ".number" ).append(storedNumber);
		alert("Hey, " + storedName + " mit der Nummer " + storedNumber + "! Willkommen bei SMAP!");
		
    }
    
	
	
	
	$( "#isConnected" ).on('tap',
		function(){
			if(dropDown == false)
			{
				
				//BT Panel
				$('#connectionPanel').addClass( "bounceInDown animated" );	
				$('#connectionPanel').css("opacity", "1");
				$('#connectionPanel').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
					function(){
						$('#connectionPanel').removeClass( "bounceInDown animated" );
					}
				);
				
				//Pulse
				$('#isConnected').addClass( "pulse animated" );
				$('#isConnected').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
					function(){
						$('#isConnected').removeClass( "pulse animated" );
					}
				);
				
				//Connection Icon
				$('#searchingIcon').addClass( "bounceIn animated" );	
				$('#searchingIcon').css("opacity", "1");
				$('#searchingIcon').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
					function(){
						$('#searchingIcon').removeClass( "bounceIn animated" );
					}
				);
			};
			if(dropDown == true)
			{
				
				//BT Panel
				$('#connectionPanel').addClass( "bounceOutUp animated" );
				console.log(dropDown);
				$('#connectionPanel').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
					function(){
						$('#connectionPanel').css("opacity", "0");
						$('#connectionPanel').removeClass( "bounceOutUp animated" );		
					}
				);
				
				//Pulse
				$('#isConnected').addClass( "pulse animated" );
				$('#isConnected').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
					function(){
						$('#isConnected').removeClass( "pulse animated" );
					}
				);
				
				//Connection Icon
				$('#searchingIcon').addClass( "bounceOut animated" );
				console.log(dropDown);
				$('#searchingIcon').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
					function(){
						$('#searchingIcon').css("opacity", "0");
						$('#searchingIcon').removeClass( "bounceOut animated" );		
					}
				);	
			};
		dropDown = !dropDown;
	});
		
	storedName = localStorage.getItem("name");
	$( ".name" ).append(storedName);
	storedNumber = localStorage.getItem("number");
	$( ".number" ).append(storedNumber);
	
	//Auslösen der Geste
	$(document).on("tap","#gesteErkannt", function(){
		gesteErkannt = !gesteErkannt;
		console.log(gesteErkannt);
		
		if(gesteErkannt == true){
			$('#gesteErkannt').css("color", "green");
		} else{
			$('#gesteErkannt').css("color", "red");
		};
	});
	
	
	//BluetoothConnection
	$(document).on("click","#bluetoothConnect", function(){
		connected = !connected;
		console.log(connected);
		
		if(connected == true){
			$('#bluetoothConnect').css("color", "green");
		} else{
			$('#bluetoothConnect').css("color", "red");
		};
	});	
	
	//Clear Storage
	$(document).on("click","#clearLocalStorage", function(){
		localStorage.clear();
		alert("Storage wurde gelöscht");
	});	
 	
});

function checkUser(){
    var userStatus = localStorage.getItem("name");
    if(userStatus == null){
	    alert("shit fuck, kein user da");
    }else{
	    alert("Yeah, User ist da!");
	    $('#createUser').css("display", "none");
	    window.location.href = "#home";
    }
}

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady()
{
    function onSuccess(contacts)
    {
    	alert('Found ' + contacts.length + ' contacts.');
    	for (var i = 0; i < contacts.length; i++) {
	    	for (var j=0; j<contacts[i].phoneNumbers.length; j++)
	    	{
				alert(contacts[i].phoneNumbers[0].value);
			}

	    }
	    //alert(contacts.length.phoneNumbers[1].value)
	};
	
	function onError(contactError) {
	    alert('onError!');
	};
	
	// find all contacts with 'Bob' in any name field
	var options      = new ContactFindOptions();
	options.filter   = "Smap";
	options.multiple = true;
	options.desiredFields = [navigator.contacts.fieldType.name, navigator.contacts.fieldType.phoneNumbers];
	//var fields       = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
	var fields       = ["note", "phoneNumbers", "name", "displayName"];
	navigator.contacts.find(fields, onSuccess, onError, options);

}
