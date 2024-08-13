let outer = []
let outerNum = 12;
let outerAngles = [];

let inner = []
let innerNum = 3;
let innerAngles = [];
let delta = 0.03;

function setup() {
  createCanvas(400, 400);
  
  for(let i = 0; i < outerNum; i++){
    outerAngles[i] = (TWO_PI/outerNum * i);
    outer[i] = new Star(outerAngles[i], false);
  }
  for(let i = 0; i < innerNum; i++){
    innerAngles[i] = (TWO_PI/innerNum * i);
    inner[i] = new Star(innerAngles[i], true);
  }
}

function draw() {
  background(220);
  translate(width/2, height/2);

  for(let i = 0; i < outerNum; i++){
    outer[i].update();
    outer[i].display();
  }
  for(let i = 0; i < innerNum; i++){
    inner[i].angle += delta;
    inner[i].update();
    inner[i].display();
  }

  for(let i = 0; i < outerNum; i++){
    for(let j = 0; j < innerNum; j++){
      line(outer[i].x, outer[i].y, inner[j].x, inner[j].y);
    }
  }
}
