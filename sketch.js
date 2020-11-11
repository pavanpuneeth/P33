var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var score = 0;
var particle;
var turn = 5;
var gameState = "play";
var plinko1, plinko2, plinko3, plinko4, plinko5, plinko6, plinko7, plinko8, plinko9, plinko10;




var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  getScore();

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 25; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 0; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 25; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 0; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}





function draw() {
  background(0);
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   /*if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
   }
   */
 
  /*for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }*/

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   


   fill(255);
   textSize(30);
   text("Score: " + score, 30, 30);
   text("Turns Left: " + turn, 600, 30);
   textSize(30);
   writeScore();
   addPoints();
   
   if(gameState === "end"){
     textSize(80);
     fill(20, 255, 200);
     text("Game Over", 190, 250);
     textSize(50);
     text("Your Score Is: " + score, 190, 350);
     fill(20, 200, 100);
     textSize(35);
     text("Click Anywhere On The Screen To Play Again!!!", 30, 450);
     if(mouseIsPressed){
       gameState = "play";
       score = 0;
       turn = 5;
       particle = null;
       getScore();
       writeScore();
     }
    }
}
function mouseClicked(){
  if(gameState!=="end"){
  turn--;
  particle = new Particles(mouseX,10,10);
}
}
async function getScore(){
  plinko1 = Math.round(random(2, 10)) * 50;
  plinko2 = Math.round(random(2, 10))* 50;
  plinko3 = Math.round(random(2, 10))* 50;
  plinko4 = Math.round(random(2, 10)) * 50;
  plinko5 = Math.round(random(2, 10)) * 50;
  plinko6 = Math.round(random(2, 10)) * 50;
  plinko7 = Math.round(random(2, 10)) * 50;
  plinko8 = Math.round(random(2, 10)) * 50;
  plinko9 = Math.round(random(2, 10)) * 50;
  plinko10 = Math.round(random(2, 10)) * 50;
}
function writeScore(){
  textSize(30);
    text(plinko1, 13.5, 525);
    text(plinko2, 93.5, 525);
    text(plinko3, 173.5, 525);
    text(plinko4, 253.5, 525);
    text(plinko5, 333.5, 525);
    text(plinko6, 413.5, 525);
    text(plinko7, 493.5, 525);
    text(plinko8, 573.5, 525);
    text(plinko9, 653.5, 525);
    text(plinko10, 733.5, 525);
    
}
async function addPoints(){
  if(particle != null){
    particle.display();
    if(particle.body.position.y > 760){
      if(particle.body.position.x < 80 && particle.body.position.x > 10){
         score+=plinko1;
         particle = null;
      }
      else if(particle.body.position.x < 160 && particle.body.position.x > 90){
       score+=plinko2;
       particle = null;
     }
      else if(particle.body.position.x < 240 && particle.body.position.x > 170){
       score+=plinko3;
       particle = null;
     }
      else if(particle.body.position.x < 320 && particle.body.position.x > 250){
       score+=plinko4;
       particle = null;
     }
      else if(particle.body.position.x < 400 && particle.body.position.x > 330){
       score+=plinko5;
       particle = null;
     }
      else if(particle.body.position.x < 480 && particle.body.position.x > 410){
       score+=plinko6;
       particle = null;
     }
     else if(particle.body.position.x < 560 && particle.body.position.x > 490){
       score+=plinko7;
       particle = null;
     }
    else if(particle.body.position.x < 640 && particle.body.position.x > 570){
       score+=plinko8;
       particle = null;
     }
    else if(particle.body.position.x < 720 && particle.body.position.x > 650){
     score+=plinko9;
     particle = null;
     }
     else if(particle.body.position.x < 800 && particle.body.position.x > 730){
       score+=plinko10;
       particle = null;
     } else {
       particle = null;
       }
      if(turn <= 0){
       gameState = "end";
     }
    }
  }
}