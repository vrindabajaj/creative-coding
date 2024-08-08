let grid = [];
let cols = 4;
let rows = 4;

function setup() {
  createCanvas(400, 400);
  let rowSize = height/rows;
  let colSize = width/cols;

  for (let i = 0; i < cols; i++){
    grid[i] = [];
    for (let j = 0; j < rows; j++){
      grid[i][j] = new Cell(colSize * i + (colSize/2), rowSize * j + (rowSize/2), rowSize/2);
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
