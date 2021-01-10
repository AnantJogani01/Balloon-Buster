var bow , arrow,  background, redB, pinkB, greenB ,blueB ,arrowGroup;
var redBGroup, pinkBGroup, greenBGroup ,blueBGroup; 
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var score;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() {
  createCanvas(600, 600);
  
  //creating background
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 3;
  
  // creating bow to shoot arrow
  bow = createSprite(580,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  score = 0;

  redBGroup = new Group();
  pinkBGroup = new Group();
  greenBGroup = new Group();
  blueBGroup = new Group();
  arrowGroup = new Group();
 
  arrowGroup.setCollider = ("rectangle",0,0,5,3); 
  arrowGroup.debug = false;
}


function draw() {

  // moving ground
    background.velocityX = -3 

    if (background.x < 0){
      background.x = background.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //creating continous enemies
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }
  
  if(arrowGroup.isTouching(redBGroup)){
  redBGroup.destroyEach();
  arrowGroup.destroyEach();
  score = score+1;
}
  
  if(arrowGroup.isTouching(pinkBGroup)){
  pinkBGroup.destroyEach();
  arrowGroup.destroyEach();
  score = score+2;
}
  
  if(arrowGroup.isTouching(greenBGroup)){
  greenBGroup.destroyEach();
  arrowGroup.destroyEach();
  score = score+3;
}
  
  if(arrowGroup.isTouching(blueBGroup)){
  blueBGroup.destroyEach();
  arrowGroup.destroyEach();
  score = score+4;
}
  
 


  
  drawSprites();
  text("Score: "+ score, 500,50);
}


function redBalloon() {
  var redB = createSprite(0,Math.round(random(20, 370)), 10, 10);
  redB.addImage(red_balloonImage);
  redB.velocityX = 3;
  redB.lifetime = 150;
  redB.scale = 0.1;
  redB.debug = false;
  redBGroup.add(redB);
}

function blueBalloon() {
  var blueB = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blueB.addImage(blue_balloonImage);
  blueB.velocityX = 3;
  blueB.lifetime = 150;
  blueB.scale = 0.1;
  blueB.debug = false;
  blueBGroup.add(blueB);
}

function greenBalloon() {
  var greenB = createSprite
  (0,Math.round(random(20, 370)), 10, 10);
  greenB.addImage(green_balloonImage);
  greenB.velocityX = 3;
  greenB.lifetime = 150;
  greenB.scale = 0.1;
  greenB.debug = false;
  greenBGroup.add(greenB);
}

function pinkBalloon() {
  var pinkB = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pinkB.addImage(pink_balloonImage);
  pinkB.velocityX = 3;
  pinkB.lifetime = 150;
  pinkB.scale = 1;
  pinkB.debug = false ;    
  pinkBGroup.add(pinkB);
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
}
