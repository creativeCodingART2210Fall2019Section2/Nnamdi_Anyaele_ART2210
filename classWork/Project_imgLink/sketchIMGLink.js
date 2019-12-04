
var img;

function preload(){
    img = loadImage("https://github.com/OguchiIKE/Anyaele_Nnamdi_ART2210/raw/master/classWork/Project_imgLink/Horizon.PNG")
   
}

function setup(){
        createCanvas(windowWidth,windowHeight);
  
}


function draw(){
  image(img,0,0);
  
}


function windowResized(){
    resizeCanvas(windowWidth,windowHeight); 

}