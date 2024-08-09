let circles = [];
let count = 12;
let angles = [];
let colours = [];

function setup() {
  createCanvas(400, 400);

  colours = [color(255, 0, 0), color(0, 255, 0), color(0, 0, 255)]

  for(let i = 0; i < count; i++){
    angles[i] = (TWO_PI/count) * i;
    circles[i] = new Circle(angles[i], colours[i % 3]);
  }
}

function draw() {
  background(220);
  translate(width/2, height/2);

  push();
  blendMode(DIFFERENCE);
  for(let i = 0; i < count; i++){
    circles[i].update();
    circles[i].display();
  }
  pop();
}
