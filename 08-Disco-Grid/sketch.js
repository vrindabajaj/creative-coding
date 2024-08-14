let sizes = [];
let cols; let rows;
let size = 50;
let xOff = 0; let yOff = 0;
let inc = 5;


function setup() {
  createCanvas(400, 400);

  rectMode(CENTER);

  cols = width/size;
  rows = height/size;

  for (let i = 0; i < cols; i++){
    sizes[i] = [];
    yOff = 0;
    for (let j = 0; j < rows; j++){
      sizes[i][j] = map(noise(xOff, yOff), 0, 1, 0, size);
      yOff += inc;
    }
    xOff += inc;
  }
}

function draw() {
  background(220);
  translate(size/2, size/2);

  for (let i = 0; i < cols; i++){
    for (let j = 0; j < rows; j++){
      rect(i*size, j*size, sizes[i][j], sizes[i][j]);
    }
  }
}
