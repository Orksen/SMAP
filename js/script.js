var dropDown = false;
var gesteErkannt = false;
var connected = false;

$(document).ready(function() {
	
	//Kontaktliste
	document.addEventListener("deviceready", getContactList, false); 
	
	
	
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

function getContactList()
{
    var contactList = new ContactFindOptions(); 
    contactList.filter=""; 
    contactList.multiple=true;
    var fields = ["*"];  //"*" will return all contact fields
    navigator.contacts.find(fields,  getContactFields, contactList );
}
    
function getContactFields(contacts)
{
    for (var i=0; i<contacts.length; i++)
    {
       alert(contacts.length);
       alert("Name:" + contacts[i].displayName + "\n" + "Birthday:"+ contacts[i].birthday)
                    
	   for (var j=0; j<contacts[i].phoneNumbers.length; j++)
	   {
	   		alert("Type: " + contacts[i].phoneNumbers[j].type + "\n" + "Value: "  + contacts[i].phoneNumbers[j].value );
       }
	}  
};