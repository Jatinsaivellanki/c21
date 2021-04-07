var fixedRect,movingRect;


function setup() {
  createCanvas(800,500);
  fixedRect = createSprite(400, 50, 50, 70);
  movingRect = createSprite(400,450,70,50);

  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";

  movingRect.velocityY = -2;
  fixedRect.velocityY = +2;
  

  // fixedRect.debug = true;
  // movingRect.debug = true;
}

function draw() {
  background(255,255,255);  
  
  // movingRect.x = mouseX;
  // movingRect.y = mouseY;

 if(isTouching(fixedRect,movingRect)) {
  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";
 }else{
  fixedRect.shapeColor = "blue";
  movingRect.shapeColor = "blue";
 }

 bounceOff(fixedRect,movingRect);

 edges = createEdgeSprites();
 fixedRect.bounceOff(edges);
 movingRect.bounceOff(edges);
  

 
  drawSprites();
}




