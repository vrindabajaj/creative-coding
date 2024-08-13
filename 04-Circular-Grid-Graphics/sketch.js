let cols, rows;
let spacing = 50;

function setup() {
  createCanvas(400, 400);
  cols = width/spacing;
  rows = height/spacing;
}

function draw() {
  background(220);
  translate(spacing/2, spacing/2);

  for(let i = 0; i < cols; i++){
    for(let j = 0; j < rows; j++){
      ellipse(i*spacing, j*spacing, spacing, spacing);
    }
  }
}
