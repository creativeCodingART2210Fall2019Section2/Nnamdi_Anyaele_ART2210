var img;

var var1={
    x:100,      //use a colon, not an assignment operator
    y:200,
    z:50,
    a:160,
    b:600,
    c:700   // no comma in the end
  };

function preload() {

}
function setup() {
 

createCanvas(windowWidth,windowHeight);
}

function draw() {

   

     fill (210);
  
    ellipse(windowWidth/2,var1.c,var1.y,var1.a);
    var xRow = 5;
    var yPos = 100;
    var xPos = 50;

//Nested x&y 5 columns
    for (var i =1; i <= 100; i++){
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