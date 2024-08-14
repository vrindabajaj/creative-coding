let xOff = 0;
let inc = 0.01;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(35);

  for(let x = 0; x < width; x++){
    stroke(255);
    let y = noise(xOff) * height;
    point(x, y);
    xOff += inc;
  }
}
