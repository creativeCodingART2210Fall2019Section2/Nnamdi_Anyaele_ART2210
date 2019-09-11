function setup() {
    // put setup code here
    createCanvas(windowWidth,windowHeight);

     background(255);
  
  }
  
  function draw() {
    // put drawing code here
  
    
    
    if(mouseIsPressed){
        fill(255,204,0);
        ellipse(mouseX, mouseY, 55, 55);
    }
    else {

        strokeWeight(0);
        fill(255);
        ellipse(mouseX, mouseY, 15, 15);

    }
     
  }
  

  

 
  
  
  
  function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
  
  }
  