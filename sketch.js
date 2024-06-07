var av,hulk,ground,invisibleground,groundImage,restart,gameover,thor,cap,light,light1,a,sheild,up,up1,wbox,wbox1,right,right1,left,left1,boxgroup,dead,dead1,mbox,mbox1,mboxgroup,bullet,bullets,gun,guns,gungroup,wbox2,mbox2,bullet2;
var bg,bulletgroup;   
var score=0;
     var SERVE=2;
    var PLAY=1;
    var END=0;
var gamestate=SERVE;

function preload(){
  hulk=loadImage("hulk.png");
  
  groundImage=loadImage("ground2.png");
  thor=loadImage("thor.png");
  cap=loadImage("cap.png");
  //gameover1=loadImage("gameOver.png");
  restart1=loadImage("restart.png");
  bg=loadImage("buildings.png")
  light=loadImage("lightning.png");
  sheild=loadImage("sheild.png")
  up1=loadImage("up.png")
  wbox=loadImage("box.png")
  right1=loadImage("right.png")
 mbox=loadImage("mbox.png")
  left1=loadImage("left.png")
  dead=loadImage("dead.png")
   guns=loadImage("guns.png")
   bullets=loadImage("bullets.png")
  
}



function setup() {
  
  createCanvas(600, 300);

   mbox2=createSprite(170,180,30,30)
  
   mbox2.addAnimation("mbox5",mbox)
  mbox2.scale=0.03;
   wbox2=createSprite(170,120,30,30)
   wbox2.addAnimation("wbox5",wbox)
  wbox2.scale=0.08;
   bullet2=createSprite(170,240,30,30)
   bullet2.addAnimation("bullet3",bullets)
  bullet2.scale=0.2
  mbox2.visible=false
    wbox2.visible=false
    bullet2.visible=false
  dead1=createSprite(80,255,30,30)
  dead1.addAnimation("dead2",dead)
  dead1.scale=0.3
  dead1.visible=false;
   left=createSprite(450,27,30,30)
  left.addAnimation("left2",left1)
  right=createSprite(250,27,30,30)
  right.addAnimation("right2",right1)
   up=createSprite(30,30,30,30)
  up.addAnimation("up2",up1)
  restart=createSprite(300,172);
  restart.addImage("restart",restart1);
  restart.scale=0.08;
  restart.visible=false;
 
  av=createSprite(50,300,20,50);
  av.addAnimation("thor1",thor);
  av.scale=0.1;
  ground=createSprite(200,200,400,20);
  ground.addAnimation("ground",groundImage);
  
  av.addAnimation("hulk1",hulk);
  ground.x=ground.width/2;
 
  invisibleground=createSprite(300,300,600,10);
  invisibleground.visible=false;
  invisibleground.shapeColor="brown";
  av.addAnimation("captain",cap)
 light1=createSprite(1,1,100,5)
 
  
  
  
 //trex.addAnimation("sheild1",sheild)
  light1.addAnimation("sheild1",sheild)
  light1.addAnimation("light2",light);
 light1.scale=0.18
  light1.visible=false;
  boxgroup=createGroup();
  mboxgroup=createGroup();
  a=0;
  b=0;
  bulletgroup=createGroup()
  gungroup=createGroup();
}

function draw() {
  background("white")
  background(bg);
 console.log(frameCount);
  if(gamestate===SERVE){
     
     av.visible=false
     ground.visible=false
     mbox2.visible=true
    wbox2.visible=true
    bullet2.visible=true
    stroke("black")
     fill("blue")
    textSize(30)
     text("OBSTACLES ",200,85)
     textSize(15)
    
    
    fill("yellow")
     text("=CAN BE DESTROYED WITH LIGHTNING",230,120)
    text("=CAN NOT BE DESTROYED WITH LIGHTNING",230,180)
     text("=BLOCK WITH CAPTAIN's SHEILD",230,240)
     
     
     }
  if(keyDown("shift")&&gamestate===SERVE){
     gamestate=PLAY;
      mbox2.visible=false
    wbox2.visible=false
    bullet2.visible=false
  //playSound(sound,true)
     }
  if(frameCount%2===0&&gamestate===SERVE){
    fill("orange")
    textSize(20)
    stroke("black")
text("PRESS 'SHIFT' TO PLAY",230,290)
     }
  if(gamestate===PLAY){   
  
     av.collide(invisibleground);
     ground.velocityX=-6;
  av.visible=true;
    ground.visible=true
 
  if(keyDown("space") && a===2 ){
     av.y=av.y-14;
   // av.velocityY=-13;
     }
  if(ground.x<0){
    ground.x=ground.width/2;
  }
 
  
 if(keyDown("backspace") && a===0){
     
     
     light1.changeAnimation("light2",light);
     light1.visible=true;
   light1.x=150;
   light1.y=260;
   light1.scale=0.18
     b=1
     }else{
     
     light1.visible=false
     light1.x=1
       light1.y=1
     
     
     
     }
    
    
    if(a===1||a===2){
 
    light1.visible=false
      light1.x=10;
      light1.y=10;
      
    }
    if(frameCount%150===0){

       
       wbox1=createSprite(600,275,20,20)
       wbox1.addAnimation("box",wbox)
       wbox1.scale=0.08
       //wbox1.collide(invisibleground)
       wbox1.velocityX=-6;
      wbox.lifetime=150;
      // wbox.lifetime=150;
       boxgroup.add(wbox1);
   
       
    
       
       }
   // boxgroup.setLifetimeEach=100;
    
    if(boxgroup.isTouching(av))
       {
       
           
       gamestate=END
       
       dead1.visible=true
       
       
       }  
    
   
    if(a===1&&keyDown("enter"))
       {
       
       
       
       light1.changeAnimation("sheild1",sheild)
       
       b=2;
       light1.visible=true;
   light1.x=100;
   light1.y=260;
       
       
       light1.scale=0.05
       
       
       
       }    
    if(keyDown("RIGHT_ARROW")){
     
     
     
     av.changeAnimation("thor1",thor)
     a=0;
     }
  
  
  if(keyDown("LEFT_ARROW")){
     
     
     av.changeAnimation("hulk1",hulk);
     a=2;
     }
  
  if(keyDown("UP_ARROW")){
     
     
     av.changeAnimation("captain",cap);
     
     
     a=1;
  
     }
    if(a===1){
  
  
  textSize(20);
    fill("purple")
  stroke("black")
  text("HOLD 'ENTER' TO ACTIVATE SHEILD",120,90)
  
  
  
  
  
  }
  if(a===0){
  
  
  textSize(20);
    fill("purple")
  stroke("black")
  text("HOLD 'BACKSPACE' FOR LIGHTNING",120,90)
  
  
  
  
  
  }
  if(a===2){
  
  
  textSize(20);
    fill("purple")
  stroke("black")
  text("HOLD 'SPACE' TO JUMP HIGH",150,90)
  

  
  }
    if(light1.isTouching(boxgroup)&&b===1)
       {
       
       
       
       boxgroup.destroyEach();
         light1.x=1
         light1.y=1
         light1.visible=false
       
       
       
       
       
       
       
       
       
       
       
       }
    if(frameCount%5===0){
      
      
      score=score+1;
      
      
      
    }
    
   if(frameCount%200===0){
      
      mbox1=createSprite(600,275,30,20)
       mbox1.addAnimation("mbox2",mbox)
      mbox1.scale=0.05;
       mbox1.velocityX=-6
      mbox.lifetime=150;
       mboxgroup.add(mbox1)
      
      
      }
    
    if(mboxgroup.isTouching(light1))
       {
       
       light1.x=1
         light1.y=1
         light1.visible=false;
      // mboxgroup.destroyEach()
       
       
       
       
       
       
       
       
       
       
       
       }  
    if(mboxgroup.isTouching(av))
       {
       
       gamestate=END
        
       
       mboxgroup.destroyEach()
       
             
       
       
       
       
       } 
    if(frameCount%500===0)
       {
       
       gun=createSprite(540,255,20,20);       
       gun.addAnimation("gun1",guns)
       gun.scale=0.14;
       //gun.velocityX=-2
         gun.lifetime=100;
       bullet=createSprite(590,250,20,30)
       bullet.addAnimation("bullet1",bullets)
       bullet.velocityX=-9
       bullet.scale=0.1
       bulletgroup.add(bullet);
       gungroup.add(gun)
       }  
    if(bulletgroup.isTouching(av)){
       
       gamestate=END;
      
       
       
       
       
       
       
  }
    
    if(light1.isTouching(bulletgroup)&&b===2)
       {
       
       
       bulletgroup.destroyEach()
       
       
       
       
       
       
       
       
       
       }
    if(mboxgroup.isTouching(boxgroup))
       {
       
       boxgroup.destroyEach();
       
       
       }
    
   
    av.velocityY=av.velocityY+0.55;
    //dead1.velocityY=velocityY+1
    stroke("black")
    fill("orange")
 text("score: "+score,450,120)
  }
  else if(gamestate===END){
    ground.velocityX=0;
   
   
    //trex.changeAnimation("collided",trex_collided);
   
   
    restart.visible=true;
    boxgroup.destroyEach();
     dead1.visible=true
    mboxgroup.destroyEach()
    bulletgroup.destroyEach();
    gungroup.destroyEach()
    light1.visible=false
    light1.x=1
    light1.y=1
    score=0
    
  }
  
  
  
  
  
  
  if(mousePressedOver(restart)&&gamestate===END){
    
   gamestate=PLAY;
   
   restart.visible=false;
   // trex.changeAnimation("running",trex_running);
  av.x=50
    av.y=170
    dead1.visible=false
    
    
  }
  
  

  

   drawSprites();
  stroke("black")
  textSize(14)
  fill("blue")
  text("CAPTAIN(block bullets)",60,30)
  //text("AMERICA ",60,40)
  fill("red")
  text("THOR(destroy boxes)",280,30)
  fill("green")
  text("HULK(high jump)",480,30)
}



function reset(){
 if(mousePressedOver(restart)) {
   gameState=PLAY;

   restart.visible=false;
   ObstaclesGroup.destroyEach();
   
   av.changeAnimation("running",trex_running);
   count=0;
 }
} 
  
  

