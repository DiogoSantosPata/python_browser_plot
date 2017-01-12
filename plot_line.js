var size_each_line = 100;
var colors_list = ['red', 'blue', 'green'];
var lines_array = [];

for(var ii=0; ii<3; ii++) // setting up lists of zeros
{
	lines_array[ii] =[];
	for(var ll=0; ll<size_each_line; ll++)
	{
		lines_array[ii].push(0);			
	}
}	




function plot_drives()
{  

	canvas = document.getElementById("Canvas_drives");				
    ctx = canvas.getContext('2d');
	ctx.beginPath();
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	ctx.fillStyle = 'white';
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	var size_each_line = 100;
	var colors_list = ['red', 'blue', 'green'];
	
	counter = 0;

	lines_array[0].shift();
	lines_array[1].shift();
	lines_array[2].shift();

	lines_array[0].push(  explodedValues[1] );
	lines_array[1].push(  explodedValues[2] );
	lines_array[2].push(  explodedValues[3] );

	for(var ll=0; ll<3; ll++)
	{		
		ctx.beginPath();
		ctx.lineWidth = 1.5;
		ctx.moveTo(0, lines_array[0][0]*canvas.height );

		for(var i=0; i<size_each_line; i++)
		{	
			ctx.lineTo(i*(canvas.width/size_each_line), (1-lines_array[ll][i])*canvas.height  );
		}

		ctx.strokeStyle = colors_list[ll];
		ctx.stroke();
	}

}

