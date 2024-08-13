let outer = []
let outerNum = 12;
let outerAngles = [];

function setup() {
  createCanvas(400, 400);
  
  for(i = 0; i < outerNum; i++){
    outerAngles[i] = (TWO_PI/outerNum * i);
    outer[i] = new Star(outerAngles[i]);
  }
}

function draw() {
  background(220);
  translate(width/2, height/2);

  for(i = 0; i < outerNum; i++){
    outer[i].update();
    outer[i].display();
  }
}
