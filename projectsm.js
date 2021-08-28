var path
var boy
var rightBsprite,leftBsprite

function preload(){
  //pre-load images
  pathImg=loadImage("path.png")
  boyimg=loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=3;
  path.scale=1.2

  boy=createSprite(200,200)
  boy.addAnimation("running",boyimg)
  boy.scale=0.1

  rightBsprite=createSprite(30,400,20,900)
  rightBsprite.visible=false

  leftBsprite=createSprite(375,400,20,900)
  leftBsprite.visible=false
}

function draw() {
  background(0);

if(path.y>400){
  path.y=height/2
}
boy.x=mouseX;


  boy.bounceOff(rightBsprite)
 boy.bounceOff(leftBsprite)


  drawSprites();
}
