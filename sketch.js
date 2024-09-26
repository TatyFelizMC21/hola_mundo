//function setup() {
//createCanvas(windowWidth, windowHeight);
//frameRate(50);
//background(0);
//rectMode(CENTER);
//}

//function draw() {
//  background(20, random(0, 100), 255, 10);

//strokeWeight(5);
//noFill();
//stroke(mouseY, 255, 0);
//fill(0, 20, 200);
//circle(mouseX + 80, mouseY, mouseX);

//strokeWeight(5);
//stroke(0, 255, 0);
//fill(100, 200, 20);
//rect(mouseX, mouseY, 100, 100);
//}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(50);
  background(20);
  describe(
    "A yellow circle on a black background. The circle opens and closes its mouth."
  );
}

function draw() {
  background(0);

  noStroke();
  fill(255, 255, 0); // Color amarillo para Pacman

  let biteSize = PI / 16;
  let startAngle = biteSize * sin(frameCount * 0.1) + biteSize;
  let endAngle = TWO_PI - startAngle;

  arc(mouseX, mouseY, 80, 80, startAngle, endAngle, PIE); // Dibuja el arco de Pacman

  strokeWeight(5);
  noFill();
  stroke(mouseY, 255, 0);
  fill(0, 20, 200);
  circle(mouseX + 80, mouseY, 30);
}
