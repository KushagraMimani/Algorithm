//creating the sprites
var fixedRect, movingRect

function setup() {
  //creating canvas
  createCanvas(1200,800);
  //fixed rectangle
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  //moving rectangle
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

}

function draw() {
  //background
  background("black");  
  //movement of the rectangle
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  //is Touching Feature
  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
      //changing of the colour
      fixedRect.shapeColor = "red";
      movingRect.shapeColor = "red";
  }else{
    fixedRect.shapeColor = "green";
      movingRect.shapeColor = "green";
  }
  
  //drawing the sprites
  drawSprites();
}