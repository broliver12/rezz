class LED {

  constructor(color, id, xpos, ypos){
    this.xpos = xpos;
    this.ypos = ypos;
    this.color = color;
    this.id = id;
  }

  drawLED(){
    this.applySelectedPatternLogic();
    ellipse(this.xpos,this.ypos,ledSize,ledSize);
  }

  applySelectedPatternLogic(){
    fill(this.color);
  }

}
