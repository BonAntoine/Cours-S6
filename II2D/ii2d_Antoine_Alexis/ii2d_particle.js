/**
 * 
 * 
 * 
 * */

class GeneratorBox {
  constructor() {
    this.nbBirth=0;
    this.birthRate=0.2;
    this.min = new Vector(0, 0);
    this.max = new Vector(0, 0);
    this.lifeExpectancyMin = 30;
    this.lifeExpectancyMax = 120;
  }
  
  initParticle(p) {
    p.position.setRandInt(this.min, this.max);
    p.color.r = randInt(0,255);
    p.color.g = randInt(0,255);
    p.color.b = randInt(0,255);
    p.color.alpha = 1;
    p.isAlive = true;
    p.lifeTime = randInt(this.lifeExpectancyMin, this.lifeExpectancyMax);

    return p;
  }
};



/**
 * 
 * 
 * 
 *  */
class Particle {
  constructor() {
    this.position=new Vector(0,0);
    this.color={r:0,g:0,b:0,alpha:0}
    this.isAlive = false;
    this.lifeTime = 0;
  }

  draw() {
    var colorStringBuild = 'rgba(' + this.color.r + ', ' + this.color.g + ', ' + this.color.b + ', ' + this.color.alpha + ')';
    ctx.fillStyle = colorStringBuild;
    ctx.fillRect(this.position.x, this.position.y, 5, 5);
  }

};

/**
 * 
 * 
 * 
 * 
 * */


class ParticleManager {
  constructor() {
    this.all=[]
    this.nbAliveMax=300;
    this.generatorList = [];

    for(var i=0;i<this.nbAliveMax;++i) {
      this.all.push(new Particle());
    }
  }

  update() {
    for(var i = 0; i < this.generatorList.length; i++){
      this.generatorList[i].nbBirth += this.generatorList[i].birthRate;
    }

    for(i=0;i<this.nbAliveMax;++i) {
      if(this.all[i].isAlive){
        this.all[i].lifeTime--;
        if(this.all[i].lifeTime < 50){
          this.all[i].color.alpha = this.all[i].lifeTime/50;
          //console.log(this.all[i].alpha);
        }
        if(this.all[i].lifeTime <= 0){
          this.all[i].isAlive = false;
        }
      }else{
        for(var j = 0; j < this.generatorList.length; j++){
          if(this.generatorList[j].nbBirth >= 1){
            this.generatorList[j].initParticle(this.all[i]);
            this.generatorList[j].nbBirth--;
            break;
          }
        }
      }
    }

    /*
    for(var i=0;i<this.nbAliveMax;++i) {
      if(i < this.nbAliveMax/2){
        this.generatorList[0].initParticle(this.all[i]);
      }else{
        this.generatorList[1].initParticle(this.all[i]);
      }
    }
    */
  }

  draw() {
    for(var i=0;i<this.nbAliveMax;++i) {
        this.all[i].draw();
      if(this.all[i].isAlive){
      }
    }
  }

};
