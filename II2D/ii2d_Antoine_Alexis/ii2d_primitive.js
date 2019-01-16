/**
 * 
 * Vector
 * 
 *  */
class Vector {
  constructor(x,y) {
    this.x=x;
    this.y=y;
  }

  distanceTo(vector) {
  	//A DEBUGUER
	return Math.sqrt(Math.pow((this.x-vector.x), 2)+Math.pow((this.y-vector.y), 2));
  }


  setRandInt(p1, p2){
  	this.x = randInt(p1.x, p2.x);
  	this.y = randInt(p1.y, p2.y);
  	return this;
  }

  setX(x){
  	this.x = x;
  }

  setY(y){
  	this.y = y;
  }

  setXY(x, y){
  	this.x = x;
  	this.y = y;
  }

};



