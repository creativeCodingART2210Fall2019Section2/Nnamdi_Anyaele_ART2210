var boxes;


function preload(){
  boxes = loadJSON("object.json");
}

function setup(){
  createCanvas(500,500);
  
}

function draw(){
  background(0);
  fill(boxes.col);
  textSize(boxes.xSize);
  text(boxes.name,10,50);
}



 