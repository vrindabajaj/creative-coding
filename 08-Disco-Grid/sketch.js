let sizes = [];
let cols; let rows;
let size = 15;
let xOff = 0; let yOff = 0; let zOff = 0;
let inc = 0.1;


function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);
  cols = width/size;
  rows = height/size;
}

function draw() {
  background(230);
  translate(size/2, size/2);

  xOff = 0;
  for (let i = 0; i < cols; i++){
    sizes[i] = [];
    yOff = 0;
    for (let j = 0; j < rows; j++){
      sizes[i][j] = map(noise(xOff, yOff, zOff), 0, 1, 0, size * 1.5);
      yOff += inc;

      let r = noise(zOff) * 255;
      let g = noise(zOff + 5) * 255;
      let b = noise(zOff + 10) * 255;

      fill(r, g, b);
      noStroke();
      rect(i*size, j*size, sizes[i][j], sizes[i][j]);
    }
    xOff += inc;
    zOff += 0.0002;
  }
}
