var canvas;
var ctx; // !!! context 2D (drawing)

var engine;


window.addEventListener("load",main);

function main() {
   	canvas=document.getElementById("canvas");
  	ctx=canvas.getContext("2d");

  	//Handle mouse event

  	canvas.addEventListener('mousedown', handleMouseDown);
  	canvas.addEventListener('mousemove', handleMouseMove);
	  canvas.addEventListener('mouseup', handleMouseUp);

    
    engine=new Engine();


	var gen1 = new GeneratorBox();
	gen1.min.setXY(50, 50); // setXY à faire dans la classe Vector
	gen1.max.setXY(60, 60);

	var gen2 = new GeneratorBox();
	gen2.min.setXY(150, 150);
	gen2.max.setXY(160, 170);

	engine.particleManager.generatorList.push(gen1, gen2); // ajoute au tableau generatorList

	var obs1=new Circle(new Vector(100,100),50);
  	var obs2=new Segment(new Vector(100,200),new Vector(250,300));

  	engine.obstacleManager.obstacleList.push(obs1, obs2);

    engine.start();
}

var mouseButton = false;
var oldMouse = new Vector(0, 0);

function handleMouseDown(event) {
  // get the mouse relative to canvas
  var mouseX = event.layerX-canvas.offsetLeft;
  var mouseY = event.layerY-canvas.offsetTop;

  var mouse = new Vector(mouseX,mouseY);
  oldMouse = new Vector(mouseX,mouseY);

  	engine.particleManager.select(mouse);
  	engine.obstacleManager.select(mouse);
	mouseButton=true;

}


function handleMouseMove(event) {
  // get the mouse relative to canvas
  var mouseX = event.layerX-canvas.offsetLeft;
  var mouseY = event.layerY-canvas.offsetTop;

    var mouse = new Vector(mouseX,mouseY);

    if(mouseButton){
  		engine.particleManager.move(new Vector(mouse.x-oldMouse.x, mouse.y-oldMouse.y));
  		engine.obstacleManager.move(mouse);
  	}
  	oldMouse = new Vector(mouseX,mouseY);
}


function handleMouseUp(event) {
  // get the mouse relative to canvas
  var mouseX = event.layerX-canvas.offsetLeft;
  var mouseY = event.layerY-canvas.offsetTop;
	oldMouse = new Vector(mouseX,mouseY);
  	mouseButton = false;
}