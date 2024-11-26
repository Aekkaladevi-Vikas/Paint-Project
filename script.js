
var arr_touches = [];
var canvas;
var ctx;
var down = false; //mouse is pressed
var color = 'black'; //default drawing color
var width = 5; // drawing width


//calling window.onload to make sure the HTML is loaded
window.onload = function() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d'); 
    ctx.lineWidth = width;
    
    //handling mouse click and move events
    canvas.addEventListener('mousemove', handleMove); 
    canvas.addEventListener('mousedown', handleDown);
    canvas.addEventListener('mouseup', handleUp);
};
function handleMove(e)
{
	xPos = e.clientX-canvas.offsetLeft;
	yPos = e.clientY-canvas.offsetTop;
	if(down == true)
	{
		ctx.lineTo(xPos,yPos); //create a line from old point to new one
		ctx.strokeStyle = color;
		ctx.stroke();
	}
}
function handleDown() 
{
    down = true;
    ctx.beginPath();
    ctx.moveTo(xPos, yPos);
}
function handleUp() 
{
    down = false;
}
function changeColor(new_color) 
{
    color = new_color;
}
function clearCanvas() 
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
