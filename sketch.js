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

let heart; // Declaración de heart globalmente

function preload() {
  // Carga la imagen del corazón en formato base64
  heart = loadImage(
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAAXNSR0IArs4c6QAAAEZJREFUGFd9jcsNACAIQ9tB2MeR3YdBMBBq8CIXPi2vBICIiOwkOedatllqWO6Y8yOWoyuNf1GZwgmf+RRG2YXr+xVFmA8HZ9Mx/KGPMtcAAAAASUVORK5CYII="
  );
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(50);
  background(20); // Fondo negro
  describe(
    "A yellow circle on a black background. The circle opens and closes its mouth."
  );
}

function draw() {
  background(20, random(0, 100));

  //CÓDIGO DEL PACMAN*****************************************************
  noStroke();
  fill(255, 255, 0); // Color amarillo para Pacman

  let biteSize = PI / 16;
  let startAngle = biteSize * sin(frameCount * 0.1) + biteSize;
  let endAngle = TWO_PI - startAngle;

  // Arco de Pacman donde está el mouse
  arc(mouseX, mouseY, 80, 80, startAngle, endAngle, PIE);

  //CÓDIGO DEL CORAZÓN*****************************************************
  noSmooth(); //Desactiva el suavizado

  // Efecto de palpitación para el corazón
  let pulse = sin(frameCount * 0.1) * 10 + 40;

  // Posición del corazón a la derecha de Pacman
  let heartX = mouseX + 80;
  let heartY = mouseY - 15;

  // Efecto de palpitación
  image(heart, heartX, heartY, pulse, pulse);
}
