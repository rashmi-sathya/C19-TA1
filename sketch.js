//create a empty array for the ball 
function setup() {
  createCanvas(480, 240);
}

function draw() {
  background(178, 217, 48);
  
  for(var x = 0; x < balls.length; x ++ ) { 
//display the ball 

}
}

function mousePressed() {
  var b = new Ball(mouseX,mouseY,20);
 //push the ball 
}

function keyPressed() {
  var b = new Ball(mouseX,mouseY,20);
//pop the ball
}