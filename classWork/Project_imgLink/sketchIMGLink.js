
var img;

function preload(){
    img=loadImage('https://oguchiike.github.io/Anyaele_Nnamdi_ART2210/raw/master/classWork/Project_imgLink/Horizon.png')
   
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