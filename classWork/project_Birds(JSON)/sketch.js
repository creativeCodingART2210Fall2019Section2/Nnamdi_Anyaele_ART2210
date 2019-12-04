var birds;
var yDis = 15;
var x = 10;
var i = 0

function preload(){
  birds = loadJSON("birds_antarctica.json");
}

function setup(){
  createCanvas(500,500);
  background(0);
  
}

function draw(){
  
  fill(225);
 // text(birds.birdsAntarctica[0].family,10,50);
 // text(birds.birdsAntarctica[1].family,10,100);
 

  for ( i = 0; i <= birds.birdsAntarctica.length; i ++)
  {
    text(birds.birdsAntarctica[i].family,x, yDis);
    
    for(var j = 0; j <= 10; j++){
        
        //text(birds.birdsAntarctica[i].family.members,x, yDis);
        x += 20;
        
    }
    yDis += 15;
    x = 10;
   
  }

if (yDis > height){
    yDis = 0;
 }


}