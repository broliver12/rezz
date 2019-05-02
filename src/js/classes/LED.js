class LED {

  constructor(color, id, xpos, ypos){
    this.xpos = xpos;
    this.ypos = ypos;
    this.color = color;
    this.id = id;
  }

  drawLED(){
    stroke(1);
    fill(this.color);
    ellipse(this.xpos,this.ypos,ledSize,ledSize);
    noStroke();
  }
}
