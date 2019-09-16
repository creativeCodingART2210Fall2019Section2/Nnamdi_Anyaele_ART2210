

function setup() {
 

createCanvas(windowWidth,windowHeight);
}

function draw() {

     fill (150,0,112);
  
     ellipse (0, 200, 30, 30);
		ellipse (50, 200, 30, 30);
		ellipse (100, 200, 30, 30);
		ellipse (150, 200, 30, 30);
		ellipse (200, 200, 30, 30);

    var x = 0;
     

    while( x <= width ){ 	//while (condition) is true, keep going
           ellipse(x, 200, 30, 30);
    x = x + 50; 
    }
// Do while
    var xP = 0;
     
    do {
      ellipse(xP, 500, xP/10, 30);
    xP = xP + 100; 
    }while( xP <= width);	

    
          
    


}