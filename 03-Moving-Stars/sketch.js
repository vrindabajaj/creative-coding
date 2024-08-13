let outer = []
let outerNum = 15;
let outerAngles = [];
let outerDelta = -0.005;

let inner = []
let innerNum = 5;
let innerAngles = [];
let innerDelta = 0.05;

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
  background(0);
  translate(width/2, height/2);

  for(let i = 0; i < outerNum; i++){
    outer[i].angle += outerDelta;
    outer[i].update();
    outer[i].display();
  }
  for(let i = 0; i < innerNum; i++){
    inner[i].angle += innerDelta;
    inner[i].update();
    inner[i].display();
  }

  for(let i = 0; i < outerNum; i++){
    for(let j = 0; j < innerNum; j++){
      stroke(255);
      line(outer[i].x, outer[i].y, inner[j].x, inner[j].y);
    }
  }
}
