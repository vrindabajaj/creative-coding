let offset = 0;
let x1; let y1;
let x2; let y2;
let x3; let y3;
let x4; let y4;

function setup() {
  createCanvas(400, 400);
  background(35);
}

function draw() {
  stroke(235);
  strokeWeight(0.5);
  noFill();

  x1 = noise(offset+5) * width;
  x2 = noise(offset+10) * width;
  x3 = noise(offset+15) * width;
  x4 = noise(offset+20) * width;
  y1 = noise(offset+25) * height;
  y2 = noise(offset+30) * height;
  y3 = noise(offset+35) * height;
  y4 = noise(offset+40) * height;
  offset += 0.01;

  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
}
