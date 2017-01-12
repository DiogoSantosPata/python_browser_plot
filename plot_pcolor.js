var discrepancy_color = 'rgba(0,0,250,' ;
	
function plot_discrepancy()
	{  
		canvas = document.getElementById("Canvas_discrepancy");
		
		ctx = canvas.getContext('2d');
		
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		
		ctx.fillStyle = 'rgba(255,255,255,1)'; //'rgba(255,255,255,1)';
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		var size_loop = Math.sqrt(  explodedValues.length - 1 );
		var square_size = canvas.width/size_loop ; 

		counter = 1;
		for(var x=0;x<size_loop;x++){
			for(var y=0;y<size_loop;y++){
				ctx.fillStyle = discrepancy_color+explodedValues[counter]+')';
				ctx.fillRect(x*square_size, y*square_size, square_size, square_size);

				counter = counter + 1;
			}
		}
	}



var ltm_color = 'rgba(50,150,50,' ;
function plot_ltm()
	{  
		canvas = document.getElementById("Canvas_ltm");
		
		ctx = canvas.getContext('2d');
		
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		
		ctx.fillStyle = 'rgba(255,255,255,1)'; //'rgba(255,255,255,1)';
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		var size_loop = Math.sqrt(  explodedValues.length - 1 );
		var square_size = canvas.width/size_loop ; 

		counter = 1;
		for(var x=0;x<size_loop;x++){
			for(var y=0;y<size_loop;y++){
				ctx.fillStyle = ltm_color+explodedValues[counter]+')';
				ctx.fillRect(x*square_size, y*square_size, square_size, square_size);

				counter = counter + 1;
			}
		}
	}



function plot_weights()
	{  
		canvas = document.getElementById("Canvas_weights");
		
		ctx = canvas.getContext('2d');
		
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		
		ctx.fillStyle = 'rgba(255,255,255,1)'; //'rgba(255,255,255,1)';
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		var size_loop = Math.sqrt(  explodedValues.length - 1 );
		var square_size = canvas.width/size_loop ; 

		counter = 1;
		for(var x=0;x<size_loop;x++){
			for(var y=0;y<size_loop;y++){
				ctx.fillStyle = net_color+explodedValues[counter]+')';
				ctx.fillRect(x*square_size, y*square_size, square_size, square_size);

				counter = counter + 1;
			}
		}
	}




function plot_prototypes()
	{  
		canvas = document.getElementById("Canvas_prototypes");
		
		ctx = canvas.getContext('2d');
		
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		
		ctx.fillStyle = 'rgba(255,255,255,1)'; //'rgba(255,255,255,1)';
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		var size_loop = Math.sqrt(  explodedValues.length - 1 );
		var square_size = canvas.width/size_loop ; 

		counter = 1;
		for(var x=0;x<size_loop;x++){
			for(var y=0;y<size_loop;y++){
				ctx.fillStyle = net_color+explodedValues[counter]+')';
				ctx.fillRect(x*square_size, y*square_size, square_size, square_size);

				counter = counter + 1;
			}
		}
	}



function change_text()
{
	document.getElementById("change_txt_val").innerHTML = explodedValues[1];
}
	
