let cols, rows;
let spacing = 10;
let sizes = [];

function setup() {
  createCanvas(400, 400);
  cols = width/spacing;
  rows = height/spacing;
}

function draw() {
  background(0);
  translate(spacing/2, spacing/2);
  
  for(let i = 0; i < cols; i++){
    sizes[i] = [];
    for(let j = 0; j < rows; j++){
      sizes[i][j] = ((j+3)/rows)*spacing;
      noStroke();
      fill(j/(rows-1)*255);
      // fill(255);
      ellipse(i*spacing, j*spacing, sizes[i][j], sizes[i][j]);
    }
  }
}
