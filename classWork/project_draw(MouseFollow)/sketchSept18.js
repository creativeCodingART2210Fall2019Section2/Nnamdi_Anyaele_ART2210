
var xLoc = 0;
var targetX = 0;
var targetY = 0;
var damp = 0.5;
var x = 0;
var y = 0;

function setup(){

    createCanvas (windowWidth,windowHeight);
    xLoc = windowWidth/2;
}


function draw(){
    
     targetX = mouseX;
     targetY = mouseY;
    x += (targetX - x) *damp;
    y += (targetX - y) *damp;
  
    noStroke();

//If we are on the left side of the window, draw something this color
 if(mouseX < xLoc){

    if (mouseIsPressed) {
        if (mouseButton == LEFT) {
           fill(255,25,25);
           ellipse(mouseX, mouseY, 15, 15);
        }else{

          if (mouseButton == RIGHT) {
            fill(255);
            ellipse(mouseX, mouseY, 60, 60); 
          }

        }  
    }
 }else
    {

        if (mouseIsPressed) {
            if (mouseButton == LEFT) {
               fill(25,25,255);
               ellipse(mouseX, mouseY, 15, 15);
            }else{
    
              if (mouseButton ==RIGHT) {
                fill(255);
                ellipse(mouseX, mouseY, 60, 60); 
              }
    
            }  

      }

    }
 
}



function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
  
  }