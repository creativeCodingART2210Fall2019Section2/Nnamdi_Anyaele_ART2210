function setup() {
 

  createCanvas(windowWidth,windowHeight);
 }
    
 function draw() {

        strokeWeight(10);
        stroke(30,0,0);

         fill (31,18,2);


         rect (windowWidth/2.1,windowHeight/1.3,200,200);
      //jaw
        ellipse(windowWidth/2,windowHeight/2,500,600);
        //ears
        ellipse(windowWidth/2 - 300,windowHeight/2.5,150,150);
        ellipse(windowWidth/2 + 300,windowHeight/2.5,175,150);

        ellipse(windowWidth/2,windowHeight/2.7,600,450);

      
      nose();
      mouth();
      eyes();
      hair();
      
      //crown
      noStroke();
      fill(232,205,0)
      triangle(width/2.2, 100, width/2.1, 10, width/2, 100);
      triangle(width/2.4, 100, width/2.3, 10, width/2.19, 100);
      triangle(width/2.06, 100, width/1.9, 10, width/1.85, 100);
    
    }



 function eyes() {


      strokeWeight(30);
      stroke(242,133,0);
      fill(242,57,0);
      ellipse(width/2.5,height/2.3,200,75);

      let eye2 = map(mouseX, 0, width, width/2.5 -85, width/2.5 +100, true);
      ellipse(eye2, height/2.3, 25, 25);

      strokeWeight(20);
      stroke(84,8,1);
      fill(217,184,17);
      ellipse(width/1.7,height/2.2,210,60);


      let eye1 = map(mouseX, 0, width, width/1.7 -85, width/1.7 +100, true);
      ellipse(eye1, height/2.3, 25, 25);

      


  }


function nose(){

  fill(145,0,0);
  strokeWeight(5);
  stroke(0);
rect (windowWidth/2.2,windowHeight/2.6,95,200);

rect (windowWidth/2.4,windowHeight/1.8,200,50);

stroke(255);
strokeWeight(10);
line (width/2.3,height/1.8,width/2.2,height/2.3);
line (width/2.2,height/2.3,width/2.2,height/3.5);
line (width/2.2,height/3.5,width/3,height/3.5);

stroke(200,35,3);
strokeWeight(12);
line (width/1.6,height/1.2,width/1.5,height/2.1);
line (width/1.5,height/2.1,width/1.4,height/2.5);
line (width/2.2,height/3.3,width/3,height/3.5);

stroke(255);
line (width/1.4,height/2.5,width/1.6,height/3.5);


}

function hair(){
  noFill();
  stroke(0);
  arc(width/2, 100, 400, 80,30, PI + QUARTER_PI, TWO_PI);
  arc(width/2.5, 150, 300, 80,15,10, PI + QUARTER_PI, TWO_PI);
  arc(width/1.7, 200, 300, 200, PI + QUARTER_PI, TWO_PI);
}

function mouth(){
  fill (100,10,0);
  strokeWeight(25);
  stroke(181,21,0);
  ellipse(windowWidth/2,windowHeight*0.75,400,150);

  //teeth
  var xPos = windowWidth/2.3;

  for(var i = 0; i <= 13; i++) {
    stroke(0);
    strokeWeight(10);
    fill(15,255,255); 

    if(i <= 5 ){
      ellipse(xPos,windowHeight*0.72,45,50);

      xPos += 35;
    }else{ 
      //reset the x position of the bottom row of teeth  
      if(i <=6){ xPos = windowWidth/2.4; }

      ellipse(xPos,windowHeight*0.78,45,50);

      xPos += 35;

    }

  }

}



    function windowResized(){
        resizeCanvas(windowWidth,windowHeight);
      
      }