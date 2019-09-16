

function preload() {

}
function setup() {
 

createCanvas(windowWidth,windowHeight);
}

function draw() {
  var r;
  var g;
  var b;

  r = random(255);
  g = random(225);
  b = random(225);

   
  
     
  
    
    var xRow = 5;
    var yPos = 100;
    var xPos = 50;

//Nested x&y 5 columns
    for (var i =1; i <= 100; i++){
      randomColor = color(random(255),random(255),random(255));
      fill (randomColor);

        ellipse(xPos,yPos,100,100);
        
        if(i >= xRow){
          xRow += 5;
          yPos += 100;
          xPos = 50;
        }else{
          xPos += 50;
        }

    }

}