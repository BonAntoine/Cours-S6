/**
 * 
 * 
 * */


var randInt=function(a,b) {
	return Math.floor(Math.random()*(b-a)+a);
}

var setAttributes=function(v,lAttrib) {
  for(var k in lAttrib) {
    v[k]=lAttrib[k];
  }
}



class Engine {
  constructor() {
    this.particleManager = new ParticleManager();
    this.obstacleManager = new ObstacleManager();
    this.time=0;
    this.deltaTime=0.1;
  }

  draw() {  
    ctx.clearRect(0,0,500,500);
    /*
    var p = new Vector(1, 1);
    p.setRandInt(new Vector(100, 100), new Vector(200, 200));
    ctx.fillRect(p.x, p.y, 20, 20);
    ctx.fillStyle = "black";
    */
    this.particleManager.draw();
    this.obstacleManager.draw();
  }

  updateData() {
    this.particleManager.update();
  }

  loop() {
    this.time+=this.deltaTime;
    this.updateData();
    this.draw();
    window.requestAnimationFrame(this.loop.bind(this));
  }

  start() {
    this.loop();
  }

}