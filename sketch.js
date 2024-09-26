function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(2);
  background(0);
  rectMode(CENTER);
}

function draw() {
  background(random(50, 100), random(255, 0), random(150, 200));
  fill(0, 20, 200);
  circle(mouseX + 80, mouseY, mouseX);
  fill(100, 200, 20);
  rect(mouseX, mouseY, 100, 100);
}
