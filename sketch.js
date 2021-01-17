
var fixedRect, movingRect;
var rect1,rect2

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(300,200,80,30);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;
  movingRect=createSprite(500,200,30,80);
  movingRect.shapeColor="green";
  movingRect.debug=true
  rect1=createSprite(200,100,50,50);
  rect1.shapeColor="green";
  rect2=createSprite(600,100,50,50);
  rect2.shapeColor="green"
  
}

function draw() {
  background(0);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
if(isTouching(movingRect,rect1)){
 movingRect.shapeColor="red";
    rect1.shapeColor="red"
}
else if(isTouching(movingRect,rect2)){
  movingRect.shapeColor="pink";
  rect2.shapeColor="pink"
}



 
  drawSprites();
}
