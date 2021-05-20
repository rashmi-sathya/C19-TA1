function Ball(tempX, tempY, tempW) {
  this.x = tempX;  
  this.y = tempY;   
  this.w = tempW;  

  this.display = function() {
    fill(255,100); 
    stroke(0); 
    ellipse(this.x,this.y,this.w,this.w); 
  }

 
}
