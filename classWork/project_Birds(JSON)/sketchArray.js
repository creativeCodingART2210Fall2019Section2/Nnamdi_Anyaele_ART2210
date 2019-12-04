var bubbles = []; // Declare object
var xSpace = 5;
var c = ['#CD0043','#FFFF4D','#9D00E5','#ED77FA']

function setup() {
  createCanvas(windowWidth, windowHeight);
 
 
  // Create object
  for(var i = 0; i < 200; i++){
    bubbles[i] = new floaty(i);
   
  }
  
}

function draw() {

   background(200, 95, 100);
  for(var i = 0; i < 200; i++){
    
    bubbles[i].moveUp();
    bubbles[i].display();
  }
}

// Our floaty class
class floaty {
  constructor(xDis) {
    this.x = xDis*xSpace;
    this.y = height;
    this.diameter = random(15, 50);
    this.xSpeed = random(-0.5, 0.5);
    this.speed = random(0.1, 0.5);
    this.hue = c[int(random(0, 4))];
  }

  moveUp() {
    this.x += this.xSpeed;
    this.y -= this.speed;
  }

  display() {
    fill (this.hue);
    noStroke();
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}



 