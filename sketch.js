var fixedRect, movingRect
var ob1, ob2, gob1, gob2, gob3, gob4

function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(200, 200, 50, 80);
  movingRect=createSprite(400,200,80,30)
  gob1=createSprite(100,100,50,50)
  gob1.shapeColor="green"
  gob2=createSprite(200,100,50,50)
  gob2.shapeColor="green"
  gob3=createSprite(300,100,50,50)
  gob3.shapeColor="green"
  gob4=createSprite(400,100,50,50)
  gob4.shapeColor="green"
  fixedRect.shapeColor="green"
  movingRect.shapeColor="green"
  movingRect.debug=true
  fixedRect.debug=true
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);
  movingRect.x=World.mouseX 
  movingRect.y=World.mouseY 
  
  if (isTouching(movingRect, gob2)){
    movingRect.shapeColor="red"
    gob2.shapeColor="red"
  }else {
    movingRect.shapeColor="green"
    gob2.shapeColor="green"
  } 
  bounceOff(movingRect, fixedRect)

  drawSprites();
}
