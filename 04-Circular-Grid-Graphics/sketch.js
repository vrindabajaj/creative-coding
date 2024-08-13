let cols, rows;
let spacing = 20;
let sizes = [];

function setup() {
  createCanvas(400, 400);
  cols = width/spacing;
  rows = height/spacing;
}

function draw() {
  background(255);
  translate(spacing/2, spacing/2);

  for(let i = 0; i < cols; i++){
    for(let j = 0; j < rows; j++){
      sizes[i] = ((j+3)/rows)*spacing;
      noStroke();
      fill(j/rows*255);
      ellipse(i*spacing, j*spacing, sizes[i], sizes[i]);
    }
  }
}
