class Circle {
	constructor(center, radius) {
		this.center = center;
		this.radius = radius;
	}

	draw() {
		ctx.beginPath();
		ctx.arc(this.center.x, this.center.y, this.radius, 0, 2 * Math.PI);
		ctx.stroke();
	}

	select(mouse) {

	}

	distance(m) {
		console.log(m.x + "  " + m.y);
		return Math.sqrt(Math.pow((m.x-this.center.x), 2)+Math.pow((m.y-this.center.y), 2));
	}
}

class Segment {
	constructor(a, b) {
		this.a = a;
		this.b = b;
	}

	draw() {
		ctx.beginPath();       // Start a new path
		ctx.moveTo(this.a.x, this.a.y);
		ctx.lineTo(this.b.x, this.b.y);
		ctx.stroke();          // Render the path
	}

	select(mouse) {

	}

	distance(m) {

	}
 }

class ObstacleManager {
	constructor() {
		this.obstacleList = [];
		this.selected = null;
	}

	draw() {
		for(var i = 0; i < this.obstacleList.length; i++){
			this.obstacleList[i].draw();
		}
	}

	select(mouse) {
		for(var i = 0; i < this.obstacleList.length; i++){
			console.log(this.obstacleList[i].distance(mouse));
		}
	}

	move(mouse) {

	}
}