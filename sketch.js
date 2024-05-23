function setup() {
  createCanvas(800,500);
  background("red");
}

function draw() {
fill("pink");
  stroke("lightblue");
  if(mouseIsPressed) rect(mouseX,mouseY,30,50);
}
