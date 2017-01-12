<!-- Websocket -->

// Config
var port = 9000;
var host = "ws://127.0.0.1:"+port; // No need to change this if using localhost

//Declare Variables
var socket;
var explodedValues;
var counter = 0;

var square_size_gc = 10*0.75 * 2;
var square_size_pc = 7.5; //20*0.75;

var ctx;
var number_of_loops; // for different sized matrixes...

var net_color =  'rgba(250,0,0,';  // 'rgba(220,110,20,' //'rgba(0,0,255,';  // 'rgba(0,0,250,';   


function init() {
	
	try {
		socket = new WebSocket(host);
		console.log('WebSocket status '+socket.readyState);
		socket.onopen    = function(msg) { 
							   console.log("Welcome - status "+this.readyState); 
						   };

		socket.onmessage = function(msg) {
		  				    explodedValues = msg.data.split(';');
    						drawVisualization();    						
						   };

		socket.onclose   = function(msg) { 
							   console.log("Disconnected - status "+this.readyState); 
						   };
	}
	catch(ex){ 
		console.log(ex); 
	}
	
}

function quit(){
	if (socket != null) {
		console.log("Close Socket");
		socket.close();
		socket=null;
	}
}
function reconnect() {
	quit();
	init();
}




function drawVisualization() {

	if ( explodedValues[0] == 'drives' ){ plot_drives(); }
	if ( explodedValues[0] == 'discrepancy' ){ plot_discrepancy(); }

	if ( explodedValues[0] == 'ltm' ){ plot_ltm(); }
	if ( explodedValues[0] == 'prototypes' ){ plot_prototypes(); }
	if ( explodedValues[0] == 'discrepancy' ){ plot_discrepancy(); }

	if ( explodedValues[0] == 'weights' ){ plot_weights(); }

	if ( explodedValues[0] == 'text_change' ){ change_text(); }
	
	



	if ( explodedValues[0] == '2.0' ) // words
	{  
		canvas = document.getElementById("Canvas_2");
	    ctx = canvas.getContext('2d');
	    ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.font = "150px Arial";
		ctx.fillStyle = "white";
		ctx.fillText(explodedValues[1],0,canvas.height-10);
	}



	if ( explodedValues[0] == '4.0' ) // histogram
	{  
		canvas = document.getElementById("Canvas_4");
	
	    ctx = canvas.getContext('2d');
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		ctx.fillStyle = 'rgba(255,255,255,1)';
		// ctx.fillRect(0, 0, canvas.width, canvas.height);

		for(var i=1; i<explodedValues.length; i++)
		{	
			ctx.fillRect( i*30, canvas.height, 20, explodedValues[i]*-100);
		}

	}


};


