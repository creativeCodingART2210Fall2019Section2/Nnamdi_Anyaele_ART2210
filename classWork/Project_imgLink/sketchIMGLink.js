
var img;

function preload(){
    img = loadImage("https://github.com/OguchiIKE/Anyaele_Nnamdi_ART2210/blob/master/classWork/Project_imgLink/Horizon.PNG")
   
}

function setup(){
        createCanvas(windowWidth,windowHeight);
  
}


function draw(){
  image(img,windowWidth/2-345,windowHeight/2-194);
  
}


function windowResized(){
    resizeCanvas(windowWidth,windowHeight); 

}