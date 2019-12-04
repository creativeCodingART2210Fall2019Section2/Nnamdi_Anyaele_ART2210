var enemyIdle, enemySpit, bites, bigBite, enemyID;
var playerSheet, playerID;
var winScreen, loseScreen, titleScreen;
var player;
var enemy;
var eBullet;
var bgImage, bgImage2;
var bgX1 = 0, bgX1a, bgX2 = 0, bgX2a;
var scrollSpeed = 2;
var pSpeed = 5;
var bullet;
var eBullet, eMissle;
var isShooting = false;
var xpos, ypos = 0;
var nutime = 0;
var nuTimeA = 0;
var nuTimeB = 0;
var nuTimeD = 0;
var bullets, mybullets;
var lives = 5;
var enemylives = 150;
var hitEm = false;
var enemad = false;
var bigShoot,shootOff = false;
var isPlaying = false;
var lose = false;
var win = false;
var starting = true;


function preload(){
  enemyIdle = loadSpriteSheet("assets/mobBossIdle.png", 378, 391, 12 );
  enemySpit = loadSpriteSheet("assets/mobBossSpit.png", 450, 427, 13 );
  bites = loadSpriteSheet("assets/bites.png", 258, 244, 6 );
  bigBite = loadAnimation("assets/Missle.png");
  playerSheet = loadSpriteSheet("assets/mc.png", 619, 380, 6 );
  bgImage = loadImage("assets/BG_Sky.png");
  bgImage2 = loadImage("assets/BG_rocks.png");
  winScreen = loadImage("assets/WinScreen.png");
  loseScreen = loadImage("assets/LoseScreen.png")
  titleScreen = loadImage("assets/title.png")
  playerID = loadImage("assets/playerIc.png")
  enemyID = loadImage("assets/enemyIc.png")
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  //Background stuff
  bgX1a = width;
  bgX2a = width;
 
  player = createSprite(100, height/2, 50, 40);
  player.addAnimation("plane",playerSheet);
  player.scale = 0.2;
  player.setCollider("circle",0,0,100);
 
  //make the enemy
  enemy = createSprite(width - 200, height/2 , 200,200);
  enemy.addAnimation("enemidle", enemyIdle);
  enemy.addAnimation("enemspit", enemySpit);
  bullets = new Group();
  mybullets = new Group();
}

function draw() {
  

  xpos = player.position.x;
  ypos = player.position.y;


  if(starting){
    starter();  }

if(isPlaying){
  backDrop();
  controller();
  enemyControl();
  shoot();
  
  drawSprites();
  //instruction text
  fill(0);
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


function backDrop(){
//Background Parallax
image(bgImage, bgX1,0, width, height);
image(bgImage, bgX1a,0, width, height);
image(bgImage2, bgX2,0, width, height);
image(bgImage2, bgX2a,0, width, height);

bgX1 -= scrollSpeed;
bgX1a -= scrollSpeed;
bgX2 -= scrollSpeed*07;
bgX2a -= scrollSpeed*07;

if(bgX1 < -width){
  bgX1 = width;
}
if(bgX1a < -width){
  bgX1a = width;
}
if(bgX2 < -width){
  bgX2 = width;
}
if(bgX2a < -width){
  bgX2a = width;
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
  image(enemyID, width/2, height - 100, 70,70);
  fill(0);
  textSize(40);
  text(" " + enemylives , width/2 + 70, height - 50);
   
  if(enemylives < 100){
    enemad = true;
   }
   
   if(enemylives < 0){
      win = true;
    }

   //Enemy Desperate 
   if (enemad){
      if(nuTimeD < millis()){
       enemySpat();
        nuTimeD = millis() + random(4000 , 11000);
        
      }
    }
    
  }


  
function enemyShoot(){
  //increment the bullets and tell them what to do
  if(nuTimeA < millis()){
    eBullet =  createSprite(enemy.position.x -75, enemy.position.y, 50, 50);
    eBullet.addAnimation("bitey",bites);
    eBullet.scale = 0.4;
    //eBullet.rotateToDirection = true;
    eBullet.attractionPoint(13, xpos, ypos);
    eBullet.setCollider("circle",0,0,125);
    eBullet.maxSpeed = 13;
    eBullet.life = 120;
    nuTimeA = millis() + 800;

  }
  //Shoot Big Missle
  if (bigShoot){
     
     var curframe = enemy.animation.getFrame();
     var curLabel = enemy.getAnimationLabel();
   
     //Wait 'til animation is at 10th frame to to shoot
      if(curLabel == "enemspit" && curframe == 10){
        eMissle =  createSprite(enemy.position.x -80, enemy.position.y, 75, 50);
        eMissle.addAnimation("missle",bigBite);
        eMissle.scale = 0.4;
        //eMissle.rotateToDirection = true;
        eMissle.attractionPoint(26, xpos, ypos);
        eMissle.maxSpeed = 26;
        eMissle.life = 120;
        
        bullets.add(eMissle);
      }

      if(curLabel == "enemspit" && curframe >= 12){
        shootOff = true;
        enemySpat();
      }
  } 

   bullets.add(eBullet);
 
    //if hit
  bullets.overlap(player, gotHit);
      
}


function enemySpat(){
  if(bigShoot != true){
     bigShoot = true;
  enemy.changeAnimation("enemspit");
  enemy.animation.changeFrame(0);
  enemy.animation.frameDeay = 5;
  enemy.animation.looping = false;
  }
  if(shootOff == true){
      enemy.changeAnimation("enemidle");
      enemy.animation.looping=true;
      bigShoot = false;

  }

  shootOff = false;
    
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
   bullet = createSprite(xpos + 50, ypos, 10, 5);
   bullet.shapeColor = color(0);
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
    image(playerID, width/2, 20, 70,70);
    fill(0);
    textSize(40);
    text("  " + lives , width/2 + 70, 60);
  
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
image(titleScreen,0,0,width,height);
textSize(150);                           
//text("Click To Play!", 300, height/2);

 if (mouseIsPressed) {
  isPlaying = true;
  starting = false;
   }

}



function weLose(){
  //Lose GUI
  isPlaying = false;
  image(loseScreen,0,0,width,height);

  fill(15);                     
  textSize(150);                           
  text("Oof!", width/2 - 200, height/2 - 200); 

  textSize(80);                           
  text("You Lost! Click to try again.", 300, height/2 + 200); 

  if (mouseIsPressed) {
   resetting();
     }

}


function weWin(){
  //Winner GUI
  isPlaying = false;
  image(winScreen,0,0,width,height);

  fill(15);                     
  textSize(150);                           
  text("Oh! You did it!", 300, height/2); 

 
  textSize(67);                           
  text("Are were you just lucky? Click to try again.", 200, height/2 + 200); 

  if (mouseIsPressed) {
    resetting();
     }
  
  }

  function resetting(){
     lives = 5;
     enemylives = 150;
     enemad = false;
  
     lose = false;
     win = false;

     player.position.x = 100;
     player.position.y = height/2;

     isPlaying = true;
     
     


  }




 