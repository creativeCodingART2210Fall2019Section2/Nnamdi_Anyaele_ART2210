var spr;
var player;
var enemy;
var eBullet;
var pSpeed = 5;
var bullet;
var eBullet;
var isShooting = false;
var xpos, ypos = 0;
var nutime = 0;
var nuTimeA = 0;
var nuTimeB = 0;
var bullets, mybullets;
var lives = 5;
var enemylives = 150;
var hitEm = false;
var isPlaying = false;
var lose = false;
var win = false;
var starting = true;






function setup() {
  createCanvas(windowWidth, windowHeight);
 
  player = createSprite(100, height/2, 50, 40);
  player.shapeColor = color(255,255,0);
 
  //make the enemy
  enemy = createSprite(width - 200, height/2 , 200,200);
  enemy.shapeColor = color(255,0,0);
  bullets = new Group();
  mybullets = new Group();
}

function draw() {
  
  xpos = player.position.x;
  ypos = player.position.y;


  if(starting){
    starter();  }

if(isPlaying){
  background(0);
  controller();
  enemyControl();
  shoot();

  drawSprites();

  fill(175);
  textSize(20);
  text("Press WASD to move" , 50, 50);
  text("Press K to shoot" , 50, height - 50); 
  }
  

  if(win){

    weWin();
   }

  if(lose) {
   weLose();

   }

}




//enemy control
function enemyControl(){

  enemyShoot();

  if(hitEm){

    enemy.shapeColor = color(255,200,200);

    hitEm = false;
  }
  else{enemy.shapeColor = color(255,0,0);  }

  //Enemy health
  fill(225);
  textSize(40);
  text("Enemy Health:  " + enemylives , width/2, height - 50);
   
   if(enemylives < 0){
      win = true;
    }
  
  }


  
function enemyShoot(){
  //increment the bullets and tell them what to do
  if(nuTimeA < millis()){
    eBullet =  createSprite(enemy.position.x -75, enemy.position.y, 50, 40);
    eBullet.shapeColor = color(200,5,5);
    eBullet.rotateToDirection = true;
    eBullet.attractionPoint(12, xpos, ypos);
    eBullet.maxSpeed = 12;
    eBullet.life = 120;
    nuTimeA = millis() + 800;

  }
   bullets.add(eBullet);
 
    //if hit
  bullets.overlap(player, gotHit);
    

}

//Shooting Stuff
function shoot(){

  if (keyDown ('k')) {
    isShooting = true;
  }
  else { isShooting = false;}


if(isShooting){
  
pSpeed = 2;
if (nutime < millis()){

// Shoot a bullet in half sec increments
   bullet = createSprite(xpos + 20, ypos, 10, 5);
   bullet.shapeColor = color(250,250,0);
   bullet.velocity.x = 20;
   bullet.life = 120;
   nutime = millis() + 250; 
   }

   mybullets.add(bullet);
}
 else{
  pSpeed = 5;
   }

   mybullets.overlap(enemy, gotEm);
}

//Player controller

function controller(){
  if (keyDown ('d')) { //right
    player.velocity.x = pSpeed;
  }
  else {if (player.velocity.x > 0 ){
            player.velocity.x -= 0.1;
          }
      }

  if (keyDown ('a')) { //left
    player.velocity.x = -pSpeed;
  }//friction
  else {if (player.velocity.x < 0 ){
    player.velocity.x += 0.1;
  }
}
  
  if (keyDown ('s')) { //down
    player.velocity.y = pSpeed;
  }
  //friction
  else {if (player.velocity.y > 0 ){
    player.velocity.y -= 0.1;
  }
}
 
  if (keyDown ('w')) { //right
    player.velocity.y = -pSpeed;
  }
  //friction
  else {if (player.velocity.y < 0 ){
    player.velocity.y += 0.1;
  }
}
//Boundaries
var bounds = 500; 
if (player.position.y > height){
  player.position.y = height;
   }

if (player.position.y < 0){
  player.position.y = 0;
   }

if (player.position.x > bounds){
  player.position.x = bounds;
   }
  
if (player.position.x < 0){
  player.position.x = 0;
    }  
//Player health
    fill(225);
    textSize(40);
    text("Health:  " + lives , width/2,50);
  
    if(lives < 0){
      lose = true;
    }

}


function gotHit(bulletA, player){
bulletA.remove();
lives --;
}

function gotEm(bulletG, enemy){
  bulletG.remove();
  hitEm = true;
enemylives --;
}

function starter(){
background(25);
textSize(150);                           
text("Click To Play!", 300, height/2);

 if (mouseIsPressed) {
  isPlaying = true;
  starting = false;
   }

}



function weLose(){
  //Lose GUI
  isPlaying = false;
  background(150,0,0);

  fill(15);                     
  textSize(150);                           
  text("Oof!", width/2 - 200, height/2); 

  textSize(75);                           
  text("You Lost! Click to try again.", 300, height/2 + 100); 

  if (mouseIsPressed) {
   resetting();
     }

}


function weWin(){
  //Winner GUI
  isPlaying = false;
  background(225,225,0);

  fill(15);                     
  textSize(150);                           
  text("Oh! You did it!", 300, height/2); 

 
  textSize(67);                           
  text("Or were you just lucky? Click to try again.", 200, height/2 + 200); 

  if (mouseIsPressed) {
    resetting();
     }
  
  }

  function resetting(){
     lives = 5;
     enemylives = 100;
     
  
     lose = false;
     win = false;

     player.position.x = 100;
     player.position.y = height/2;

     isPlaying = true;
     


  }




 