let grid = [];
let cols = 2;
let rows = 2;

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < cols; i++){
    grid[i] = [];
    for (let j = 0; j < rows; j++){
      grid[i][j] = new Cell((width/cols) * i, (height/rows) * j);
    }
  }
}

function draw() {
  background(220);
  for (let i = 0; i < cols; i++){
    for (let j = 0; j < rows; j++){
      grid[i][j].update();
      grid[i][j].display();
    }
  }
}
