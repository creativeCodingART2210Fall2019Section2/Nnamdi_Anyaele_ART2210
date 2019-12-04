var hr,min,sec;


function setup() {
    createCanvas(windowWidth,windowHeight);
    angleMode(DEGREES);
    textFont('Arial');
    textAlign(CENTER);
 }
  
  function draw() {
    
    background(12); 

    hr = hour();
    min = minute();
    sec = second();

    //fill(255);
    // text(hr + ':'+ min + ':' + sec, 100,100);
    
    strokeWeight(5);
    stroke(245,65,100);
    noFill();

   // let end = map(sec, 0, 60, 0, 360);
    //arc(400, 400, 400, 400, 0,end);

    //let end1 = map(sec, 0, 15, 0, 45);
    //arc(400, 400, 300, 300, 0,end1);
    
    seconds();
    minutes();
    hours();

    
   

  }

  function seconds(){
   strokeWeight(6);   
   stroke(255);
   
    var topLn = 0;
    var endTop = 0;
    var riLn = 0;
    var endRi = 0;
    var botLn = 0;
    var endBot = 0;
    var leftLn = 0;
    var endLeft = 0;


    if (sec >= 0 && sec <= 15){
       topLn = sec;
       endTop = map(topLn, 0, 15, 500, 900);
    }
    else{

        endTop = 900;
    }

      //Second Quarter 
    if(sec >= 15 ){

        if (sec <= 30){
            riLn = sec;
            endRi = map(riLn, 15, 30, 200, 600);
         }
         else{
         
             endRi = 600;
         }
    } else{
        endRi = 200;
    }

    //Third Quarter
    if(sec >= 30 ){

        if (sec <= 45){
            botLn = sec;
            endBot = map(botLn, 30, 45, 900, 500);
         }
         else{
         
             endBot = 500;
         }
    } else{
        endBot = 900;
    }

    //Fourth Quarter
    if(sec >= 45 ){

        if (sec <= 60){
            leftLn = sec;
            endLeft = map(leftLn, 45, 60, 600, 200);
         }
         
    } else{
        endLeft = 600;
    }

    line(500, 200, endTop, 200);
    line(900, 200, 900, endRi);
    line(900, 600, endBot, 600);
    line(500, 600, 500, endLeft);
    

  }


  //Minutes______________________________________________________________
  function minutes(){
    strokeWeight(4);   
    stroke(255);
    
     var topLn = 0;
     var endTop, endTop2 = 0;
     var riLn = 0;
     var endRi, endRi2 = 0;
     var botLn = 0;
     var endBot, endBot2 = 0;
     var leftLn = 0;
     var endLeft, endLeft2 = 0;
 
 
     if (min >= 0 && min <= 15){
        topLn = min;
        endTop = map(topLn, 0, 15, 700, 825);
        endTop2 = map(topLn, 0, 15, 275, 400); //y Ax
     }
     else{
 
         endTop = 825;
         endTop2 = 400;
     }
 
       //Second Quarter 
     if(min >= 15 ){
 
         if (min<= 30){
             riLn = min;
             endRi = map(riLn, 15, 30, 400, 525);
             endRi2 = map(riLn, 15, 30, 825, 700); //x Ax
          }
          else{
          
              endRi = 525;
              endRi2 = 700;
          }
     } else{
         endRi = 400;
         endRi2 = 825;
     }
 
     //Third Quarter
     if(min >= 30 ){
 
         if (min <= 45){
             botLn = min;
             endBot = map(botLn, 30, 45, 700, 575); //x Ax
             endBot2 = map(botLn, 30, 45, 525, 400); //y Ax
          }
          else{
          
              endBot = 575;
              endBot2 = 400;
          }
     } else{
         endBot = 700;
         endBot2 = 525;
     }
 
     //Fourth Quarter
     if(min >= 45 ){
 
         if (min <= 60){
             leftLn = min;
             endLeft = map(leftLn, 45, 60, 400, 275); //y Ax
             endLeft2 = map(leftLn, 45, 60, 575, 700); //x Ay
          }
          
     } else{
         endLeft = 400;
         endLeft2 = 575;
     }
 
     stroke(245,65,100);

     line(700, 275, endTop, endTop2);
     line(825, 400, endRi2, endRi);
     line(700, 525, endBot, endBot2);
     line(575, 400, endLeft2, endLeft);

  //Minute numbers
     noStroke();
     fill(255);
     textSize(25);
      text('12', 700,250);
      text('3', 850,400);
      text('6', 700,570);
      text('9', 545,400);
 
 
   }

function hours(){

    fill(245,65,100);
    textSize(45);
    
    text(hr, 700,400);


}

  function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
  
    background(12);
  }