let start = 0;
let inc = 0.01;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(35);

  stroke(255);
  noFill();

  beginShape();
  let xOff = start;

  for(let x = 0; x < width; x++){
    let y = noise(xOff) * height;
    vertex(x, y);
    xOff += inc;
  }
  endShape();
  start += inc;
}
