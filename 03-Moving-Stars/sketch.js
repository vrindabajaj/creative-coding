let star;

function setup() {
  createCanvas(400, 400);
  star = new Star();
}

function draw() {
  background(220);
  star.update();
  star.display();
}
