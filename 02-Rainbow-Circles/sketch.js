let circles = [];
let count = 12;
let angles = [];

function setup() {
  createCanvas(400, 400);

  for(let i = 0; i < count; i++){
    angles[i] = (TWO_PI/count) * i;
    circles[i] = new Circle(angles[i]);
  }
}

function draw() {
  background(220);
  translate(width/2, height/2);

  for(let i = 0; i < count; i++){
    circles[i].update();
    circles[i].display();
  }
}
