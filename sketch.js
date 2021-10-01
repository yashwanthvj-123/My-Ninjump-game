
var ninja, climbNinjaImageLeft, climbNinjaImageRight, fallNinjaImage;

var blue, blueImageLeft, blueImageRight, blueGroup;

var squirrel, squirrelImageLeft, squirrelImageRight, squirrelGroup;

var laundry, laundryImage, laundryGroup;
var wallLeft, wallRight , wallImageLeft, wallImageRight;
var ninjaBlade, ninjaBladeImage, ninjaBladeGroup;

var bgImage;

var gameState = "WAIT";

var score ;
var bladesCollected;
var fruitsCollected;

var gameover, gameoverImage, replay, replayImage;

var opening, openingImage;

var playbutton, playImage, playbutton2, playImage2;

var black_bg, black_bgImage;

var head1, head2, head3, head4, head5, head6;
var fruits, fruitsGroup;

var gong_sound, ninjaOpening_sound; 
var gameOver_music, gameOver_voice, powerNinja_sound;
var fruits_sound, ninjaBlade_sound;

function preload () {

  fruits_sound         = loadSound ("Sounds/Going Up sound.m4a");
  powerNinja_sound     = loadSound ("Sounds/Ninja hawa.m4a");
  gong_sound           = loadSound ("Sounds/Gong.m4a");
  ninjaOpening_sound   = loadSound ("Sounds/Ninja opening sound.m4a");
  ninjaBlade_sound     = loadSound ("Sounds/Ninja blade collected.m4a");
  gameOver_music       = loadSound ("Sounds/Game over.m4a");
  gameOver_voice       = loadSound ("Sounds/Game over voice.m4a");

  bgImage              = loadImage ("images/tree bg.jpg");

  head1                = loadImage ("images/head_1.png");
  head2                = loadImage ("images/head_2.png");
  head3                = loadImage ("images/head_3.png");
  head4                = loadImage ("images/head_4.png");
  head5                = loadImage ("images/head_5.png");
  head6                = loadImage ("images/head_6.png");

  black_bgImage        = loadImage ("images/black photo - Copy.jpeg");

  playImage            = loadImage ("images/play.png");

  playImage2           = loadImage ("images/play 2.png");

  openingImage         = loadImage ("images/ninja warrior background.jpg");

  gameoverImage        = loadImage ("images/game over.png");

  replayImage          = loadImage ("images/replay.png");

  laundryImage         = loadImage ("images/laundry.png");

  wallImageLeft        = loadImage ("images/Wall1.png");

  wallImageRight       = loadImage ("images/Wall1.png");

  ninjaBladeImage      = loadImage ("images/ninja blade.png");

  climbNinjaImageLeft  = loadAnimation ("ClimbingAnimation/ClimbingNinja1.png","ClimbingAnimation/ClimbingNinja3.png","ClimbingAnimation/ClimbingNinja5.png","ClimbingAnimation/ClimbingNinja7.png","ClimbingAnimation/ClimbingNinja9.png","ClimbingAnimation/ClimbingNinja11.png","ClimbingAnimation/ClimbingNinja13.png","ClimbingAnimation/ClimbingNinja15.png",);

  climbNinjaImageRight = loadAnimation ("ClimbingAnimation/RightClimb/RightClimb1.png","ClimbingAnimation/RightClimb/RightClimb3.png","ClimbingAnimation/RightClimb/RightClimb5.png","ClimbingAnimation/RightClimb/RightClimb7.png","ClimbingAnimation/RightClimb/RightClimb9.png","ClimbingAnimation/RightClimb/RightClimb11.png","ClimbingAnimation/RightClimb/RightClimb13.png","ClimbingAnimation/RightClimb/RightClimb15.png");

  fallNinjaImage       = loadAnimation ("FallingNinjaAnimation/FallingNinja1.png","FallingNinjaAnimation/FallingNinja3.png","FallingNinjaAnimation/FallingNinja5.png","FallingNinjaAnimation/FallingNinja7.png","FallingNinjaAnimation/FallingNinja9.png","FallingNinjaAnimation/FallingNinja11.png","FallingNinjaAnimation/FallingNinja13.png","FallingNinjaAnimation/FallingNinja15.png","FallingNinjaAnimation/FallingNinja17.png");

  blueImageLeft        = loadAnimation ("ObstacleNinjaAnimation/LeftBlue/LeftBlue1.png","ObstacleNinjaAnimation/LeftBlue/LeftBlue3.png","ObstacleNinjaAnimation/LeftBlue/LeftBlue5.png","ObstacleNinjaAnimation/LeftBlue/LeftBlue7.png","ObstacleNinjaAnimation/LeftBlue/LeftBlue9.png","ObstacleNinjaAnimation/LeftBlue/LeftBlue11.png","ObstacleNinjaAnimation/LeftBlue/LeftBlue13.png","ObstacleNinjaAnimation/LeftBlue/LeftBlue15.png");
  blueImageRight       = loadAnimation ("ObstacleNinjaAnimation/BlueNinja1.png","ObstacleNinjaAnimation/BlueNinja3.png","ObstacleNinjaAnimation/BlueNinja5.png","ObstacleNinjaAnimation/BlueNinja7.png","ObstacleNinjaAnimation/BlueNinja9.png","ObstacleNinjaAnimation/BlueNinja11.png","ObstacleNinjaAnimation/BlueNinja13.png","ObstacleNinjaAnimation/BlueNinja15.png");

  squirrelImageLeft    = loadAnimation ("SquirrelAnimation/Squirrel1.png","SquirrelAnimation/Squirrel3.png","SquirrelAnimation/Squirrel5.png","SquirrelAnimation/Squirrel7.png","SquirrelAnimation/Squirrel9.png");
  squirrelImageRight   = loadAnimation ("SquirrelAnimation/RightSquirrel/RightSquirrel1.png","SquirrelAnimation/RightSquirrel/RightSquirrel3.png","SquirrelAnimation/RightSquirrel/RightSquirrel5.png","SquirrelAnimation/RightSquirrel/RightSquirrel7.png","SquirrelAnimation/RightSquirrel/RightSquirrel9.png");

}

function setup () {

  createCanvas(500, displayHeight-130);

  blueGroup       = createGroup ();
  squirrelGroup   = createGroup ();
  ninjaBladeGroup = createGroup ();
  fruitsGroup     = createGroup ();
  laundryGroup    = createGroup ();

  score = 0;
  bladesCollected = 0;
  fruitsCollected = 0;

  black_bg = createSprite (250,300,0,0);
  black_bg.addImage (black_bgImage);
  black_bg.scale=1.8;
  black_bg.visible=false;

  ninja = createSprite (83,360,10,10);
  ninja.addAnimation ("a",climbNinjaImageLeft);
  ninja.addAnimation ("b", climbNinjaImageRight);
  ninja.addAnimation ("c", fallNinjaImage);
  ninja.visible = false;

  opening=createSprite(250,300,0,0);
  opening.addImage(openingImage);
  opening.scale=1.8;
  opening.visible=false;

  playbutton=createSprite (480,570,0,0);
  playbutton.addImage(playImage);
  playbutton.scale=0.1;
  playbutton.visible=false;

  playbutton2=createSprite (250,490,0,0);
  playbutton2.addImage(playImage2);
  playbutton2.scale=0.4;
  playbutton2.visible=false;
  
  gameover = createSprite (250,300,0,0);
  gameover.addImage (gameoverImage);
  gameover.scale = 2;
  gameover.visible=false

  replay = createSprite (250,500,0,0);
  replay.addImage (replayImage);
  replay.scale=0.5;
  replay.visible=false;

  wallLeft = createSprite (90,200,500, displayHeight-130);
  wallLeft.addImage (wallImageLeft);
  wallLeft.velocityY=5;

  wallRight = createSprite (530,200,500, displayHeight-130);
  wallRight.addImage (wallImageRight);
  wallRight.velocityY=5;

}

function draw () {

  background(bgImage);

  if (gameState==="WAIT") {

    opening.visible=true;
    playbutton.visible=true;

    opening.depth=playbutton.depth;
    playbutton.depth=playbutton.depth+1;

    wallRight.visible=false;
    wallLeft.visible=false;
    ninja.visible=false;

    if (mousePressedOver(playbutton)) {
      gameState="STORY";
      gong_sound.play ();
    }

  }

  if (gameState==="STORY") {
    opening.visible=false;
    playbutton.visible=false;
    playbutton2.visible=true;
    black_bg.visible=true;
    playbutton2.visible=true;

    if (mousePressedOver(playbutton2)) {
      gameState="PLAY";
      ninjaOpening_sound.play();
    }
        
  }
  
  if (gameState==="PLAY") {

    spawnFruits();
    spwanNinjaBlade ();
    spawnBlue ();
    spawnSquirrel ();

    score = score + Math.round( (getFrameRate()/90).toFixed(2) );

    black_bg.visible=false;
    playbutton2.visible=false;
    wallLeft.visible=true;
    wallRight.visible=true;

    if (wallLeft.y>400) { wallLeft.y=300; }
    if (wallRight.y>400) { wallRight.y=300; }

    wallLeft.velocityY = (4+2*fruitsCollected/6);
    wallRight.velocityY = (4+2*fruitsCollected/6);

    squirrelGroup.setVelocityYEach (wallLeft.velocityY);
    laundryGroup.setVelocityYEach (wallLeft.velocityY);
    blueGroup.setVelocityYEach (wallLeft.velocityY);
    ninjaBladeGroup.setVelocityYEach (wallLeft.velocityY);


    if (keyDown("left_arrow")) { 
      ninja.x=83;
      ninja.changeAnimation ("a",climbNinjaImageLeft);
    }
      
    if (keyDown("right_arrow")) { 
      ninja.x=420; 
      ninja.changeAnimation ("b",climbNinjaImageRight);
    }  

    ninja.visible = true;

    if (ninja.isTouching(ninjaBladeGroup)) {
      ninjaBladeGroup.destroyEach();
      bladesCollected=bladesCollected+1;
      ninjaBlade_sound.play ();
    }

    if (ninja.isTouching(fruitsGroup)) {
      fruitsGroup.destroyEach ();
      fruitsCollected=fruitsCollected+1;
      fruits_sound.play ();
    }

    if (ninja.isTouching(squirrelGroup) || ninja.isTouching(blueGroup) ) {
      gameState="FALL";
      gameOver_music.play ();
    }
    
    if (blueGroup.maxDepth()>=laundryGroup.maxDepth()) {
      ninjaBladeGroup.setDepthEach(blueGroup.maxDepth()+1);
      fruitsGroup.setDepthEach (blueGroup.maxDepth()+1);
    }

    else {
      ninjaBladeGroup.setDepthEach (laundryGroup.maxDepth()+1);
      fruitsGroup.setDepthEach (laundryGroup.maxDepth()+1);
    }

    fill ("white");
    textSize (16);
    //text ("Score : " +score, 80,20);
    text ("Ninja blades collected : " + bladesCollected, 250, 20);
    text ("Fruits collected : "+fruitsCollected,70,20);

  }

  drawSprites();

  if (gameState==="FALL") {
    ninja.changeAnimation ("c",fallNinjaImage);
    ninja.velocityY=ninja.velocityY+1;

    ninjaBladeGroup.destroyEach();
    squirrelGroup.destroyEach();
    fruitsGroup.destroyEach ();
    blueGroup.destroyEach();
    laundry.visible=false;
    wallLeft.visible=false;
    wallRight.visible=false;

    if (ninja.y>=600) {
      gameState="END";
      gameOver_voice.play ();
    }

  }

  if (gameState==="END") {
    
    gameover.visible=true;
    replay.visible=true;
    
    ninja.visible=false;
    if(mousePressedOver(replay)) { 
      restart ();
      powerNinja_sound.play ();
    }

    fill ("white");
    textSize (16);
    //text ("Score : " +score, 80,20);
    text ("Ninja blades collected : " + bladesCollected, 250, 20);
    text ("Fruits collected : "+fruitsCollected,70,20);

  }

}

function spwanNinjaBlade () {

  if (frameCount % 150 === 0) {

    var position = [70,435];
    var random = Math.round ( Math.random(0,1) );

    ninjaBlade = createSprite (position[random],0,10,10);

    ninjaBlade.addImage (ninjaBladeImage);
    ninjaBlade.lifetime = -1;
    ninjaBlade.velocityY=9;
    ninjaBladeGroup.add (ninjaBlade);
    if (ninjaBladeGroup.y>=100) { ninjaBladeGroup.destroyEach(); }
    ninjaBlade.scale = 0.2;


  }
}

function spawnFruits () {

  if (frameCount%50===0) {

    var position = [70,435];
    var r = Math.round ( Math.random(0,1) );

    var fruits = createSprite (position[r],0,0,0);

    var rand = Math.round(random(1,6));
    switch (rand) {
      case 1: 
       fruits.addImage (head1);
       break;

      case 2: 
       fruits.addImage (head2);
       break;

      case 3:
        fruits.addImage (head3);
        break;

      case 4:
        fruits.addImage (head4);
        break;

      case 5: 
       fruits.addImage (head5);
       break;

      case 6:
        fruits.addImage (head6);
        break;

      default: break;
    }

    fruits.lifetime=-1;
    fruits.scale=0.2;
    fruits.velocityY=7;
    fruitsGroup.add(fruits);

  }

}

function spawnBlue () {

 if (frameCount % 310 === 0) {
  
  var position = [60, 440];
  var random = Math.round ( Math.random(0,1) );

  blue = createSprite (position[random],0,10,10);

  if (random===0) {  
    blue.addAnimation ("blueNinja",blueImageLeft); 
  }

  if (random===1) {
    blue.addAnimation ("rightNinja", blueImageRight);
  }

  blue.lifetime = -1;
  blue.velocityY = 7;
  blueGroup.add (blue);
  
 }

}

function spawnSquirrel () {

  if (frameCount % 180 === 0) {
    
  var position = [83,450];
  var random = Math.round ( Math.random(0,1) );
  
  laundry = createSprite (250,50,10,10);
  laundry.addImage (laundryImage);
  laundry.velocityY = 7;
  laundry.scale = 1.6;
  laundryGroup.add(laundry);

  squirrel = createSprite (position[random],laundry.y-10,0,0);
  squirrel.velocityY=7;

  if (random===0) {
    squirrel.addAnimation ("leftsquirrel", squirrelImageLeft);
    squirrel.velocityX=7;
  }

  if (random===1) {
    squirrel.addAnimation ("squirrel",squirrelImageRight);
    squirrel.velocityX=-7;
  }

  squirrel.lifetime = -1;
  squirrel.velocityY = 7;
  squirrelGroup.add (squirrel);

  }

}

function restart () {

  gameState="PLAY";

  ninja.x = 83;
  ninja.y = 360;
  ninja.velocityY = 0;
  ninja.changeAnimation ("a", climbNinjaImageLeft);

  gameover.visible=false;
  replay.visible=false;

  bladesCollected = 0;
  fruitsCollected = 0;

  blueGroup.destroyEach ();
  squirrelGroup.destroyEach ();
  ninjaBladeGroup.destroyEach ();
  fruitsGroup.destroyEach ();

}
